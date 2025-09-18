import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';

function TextureMesh() {
  const meshRef = useRef<Mesh>(null);

  const shaderUniforms = useMemo(() => ({
    u_size: { value: 2 },
    u_amount: { value: 0.05 },
    u_vignette: { value: 0.3 },
    u_opacity_random: { value: true },
    u_random_seed: { value: 0.8873039088278812 },
    u_shape: { value: [true, false, false, false, false, false, false] },
    u_shape_image: { value: {} },
    u_shape_image_resolution: { value: [1024, 1024] },
    u_rotation: { value: 0 },
    u_rotation_random: { value: false },
    u_color_random: { value: false },
    u_color: { value: [0.9, 0.9, 0.9] },
    u_aa_passes: { value: 2 },
    u_time: { value: 0 },
    u_mouse: { value: [0, 0] },
    u_resolution: { value: [1024, 1024] },
  }), []);

  const fragmentShader = `
    uniform vec2 u_resolution;
    uniform vec3 u_color;
    uniform bool u_color_random;
    uniform float u_size;
    uniform float u_vignette;
    uniform float u_amount;
    uniform bool u_opacity_random;
    uniform float u_rotation;
    uniform bool u_rotation_random;
    uniform bool u_shape[7];
    uniform sampler2D u_shape_image;
    uniform vec2 u_shape_image_resolution;
    uniform float u_random_seed;
    uniform float u_aa_passes;

    #ifndef PI
    #define PI 3.1415926535897932384626433832795
    #endif

    float vignette(float amount){
      vec2 position = (gl_FragCoord.xy / u_resolution) - vec2(0.5);
      float dist = length(position * vec2(u_resolution.x/u_resolution.y, 1.0));
      float radius = 1.0*amount;
      float softness = 1.0-radius;
      float v = smoothstep(radius, radius - softness, dist);
      return v;
    }

    float aspectScale(inout vec2 st,float xRes, float yRes){
        float aspect = xRes/yRes;
        float diff = (1.0 - aspect)/2.0;
        float vis = 1.0;

        if(aspect > 1.){
        st.y *= aspect;
        st.y += diff;
        vis = (1.0 - step(1.0,st.y)) * (step(0.0,st.y)) * (1.0 - step(1.0,st.x)) * (step(0.0,st.x));
        } else {
            st.x *= yRes/xRes;
            st.x += (1.0 - yRes/xRes)/2.0;
            vis = (1.0 - step(1.0,st.x)) *(step(0.0,st.x)) * (1.0 - step(1.0,st.y)) *(step(0.0,st.y));
        }
        return vis;
    }

    highp float rand(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt= dot(co.xy ,vec2(a,b));
        highp float sn= mod(dt,3.14);
        return fract(sin(sn) * c);
    }

    #if defined(GL_OES_standard_derivatives)
    #extension GL_OES_standard_derivatives : enable
    #endif
    float aastep(float threshold, float value) {
    #if !defined(GL_ES) || __VERSION__ >= 300 || defined(GL_OES_standard_derivatives)
        float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
        return smoothstep(threshold-afwidth, threshold+afwidth, value);
    #else 
        return step(threshold, value);
    #endif
    }

    float fill(float x, float size, float edge) {
        return 1.0 - smoothstep(size - edge, size + edge, x);
    }
    float fill(float x, float size) {
        return 1.0 - aastep(size, x);
    }

    float triSDF(in vec2 st) {
        st -= 0.5;
        st *= 5.0;
        return max(abs(st.x) * .866025 + st.y * .5, -st.y * 0.5);
    }

    float hexSDF(in vec2 st) {
        st = st * 2.0 - 1.0;
        st = abs(st);
        return max(abs(st.y), st.x * .866025 + st.y * .5);
    }

    mat2 rotate2d(in float r){
        float c = cos(r);
        float s = sin(r);
        return mat2(c, -s, s, c);
    }

    vec2 rotate(in vec2 v, in float r) {
        return rotate2d(r) * (v - vec2(.5)) + vec2(.5);
    }

    float rectSDF(in vec2 st, in vec2 s) {
        st = st * 2.0 - 1.0;
        return max( abs(st.x / s.x), abs(st.y / s.y) );
    }
    float rectSDF(in vec2 st, in float s) {
        return rectSDF(st, vec2(s) );
    }
    float rectSDF(in vec2 st) {
        return rectSDF(st, vec2(1.0));
    }

    float crossSDF(in vec2 st, in float s) {
        vec2 size = vec2(.25, s);
        return min(rectSDF(st.xy, size.xy), rectSDF(st.xy, size.yx));
    }

    float circleSDF(in vec2 v) {
        v -= 0.5;
        return length(v) * 2.0;
    }

    #if !defined(FNC_SATURATE) && !defined(saturate)
    #define saturate(V) clamp(V, 0.0, 1.0)
    #endif

    float lineSDF( in vec2 st, in vec2 a, in vec2 b ) {
        vec2 b_to_a = b - a;
        vec2 to_a = st - a;
        float h = saturate(dot(to_a, b_to_a)/dot(b_to_a, b_to_a));
        return length(to_a - h * b_to_a );
    }

    vec3 hash3D(vec2 x) {
        uvec3 v = uvec3(x.xyx * 65536.0) * 1664525u + 1013904223u;
        v += v.yzx * v.zxy;
        v ^= v >> 16u;
        v.x += v.y * v.z;
        v.y += v.z * v.x;
        v.z += v.x * v.y;
        return vec3(v) * (1.0 / float(0xffffffffu));
    }
    
    void staticNoise(vec3 color, float scale, float distribution, float rotation, bool random_opacity, bool random_rotation, bool multicolor){
        vec2 st = gl_FragCoord.xy / u_resolution.x;
        st *= u_resolution / scale;

        vec2 ipos = floor(st);
        vec2 fpos = fract(st);
        st = fpos;

        if (random_rotation == true) {
            rotation = rand(ipos) * 360.;
        }
        st = rotate(st, rotation * PI/180.);

        float opacity = 1.0;
        if (random_opacity == true) {
            opacity = rand(ipos * u_random_seed);
        }

        float amt = hash3D(hash3D(ipos).xy).x;

        vec2 center = vec2(u_resolution / scale*0.5 - 0.5);
        float dist = distance(ipos,center);
        float v = (1.0 - (dist/center.x*(u_vignette)));
        opacity *= pow(v,20.);

        if (u_color_random == true){
            color = hash3D(ipos);
        }

        float shape = 1.;
        
        // square
        if(u_shape[0]){
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * 0.2);
        }

        // circle
        if(u_shape[1]){
            shape = fill(circleSDF(st),1.0);
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * shape * 0.2);
        }

        // triangle
        if(u_shape[2]){
            shape = fill(triSDF(st),1.0);
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * shape * 0.2);
        }

        // diamond
        if(u_shape[3]){
            shape = fill(rectSDF(rotate(st,45. * PI/180.),vec2(0.71)),1.0);
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * shape * 0.2);
        }

        // line
        if(u_shape[4]){
            shape = fill(lineSDF(st,vec2(1.0),vec2(0.0)),(u_resolution.x / scale)*0.001);
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * shape * 0.2);
        }

        // cross
        if(u_shape[5]){
            shape = fill(crossSDF(st,1.0),1.0);
            gl_FragColor = vec4(vec3(color),step(1.0 - distribution,amt) * opacity * shape * 0.2);
        }

        // image
        if(u_shape[6]){
            float vis = aspectScale(st, u_shape_image_resolution.x, u_shape_image_resolution.y);
            vec4 image = vec4(1.0);
            image = texture2D(u_shape_image, st);
            image.a *= step(1.0 - distribution,amt) * vis * opacity * 0.2;
            gl_FragColor = image;
        }
    }

    void main() {
        staticNoise(u_color, u_size, u_amount, u_rotation, u_opacity_random, u_rotation_random, u_color_random);
    }
  `;

  const vertexShader = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as any;
      const { clock, mouse, gl } = state;
      if (material.uniforms) {
        material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
        material.uniforms.u_time.value = clock.getElapsedTime();
        let c = gl.domElement.getBoundingClientRect();
        material.uniforms.u_resolution.value = [c.width, c.height];
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]}>
      <planeGeometry args={[1024, 1024]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={shaderUniforms}
        wireframe={false}
        wireframeLinewidth={0}
        dithering={false}
        flatShading={true}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          alpha: true,
          transparent: true,
          antialias: true,
          precision: "highp",
          powerPreference: "high-performance"
        }}
        resize={{
          debounce: 0,
          scroll: false,
          offsetSize: true
        }}
        dpr={1}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5]
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <TextureMesh />
      </Canvas>
    </div>
  );
}