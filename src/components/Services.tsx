import { motion } from 'motion/react';
import { Smartphone, Box, Zap, Code } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile UI Design",
      description: "Creating intuitive and engaging mobile interfaces that provide seamless user experiences across iOS and Android platforms.",
      color: "bg-[#A8C5E6]"
    },
    {
      icon: Box,
      title: "3D Design",
      description: "Bringing depth and dimension to digital experiences through modern 3D elements and interactive visual components.",
      color: "bg-[#D7C7E9]"
    },
    {
      icon: Zap,
      title: "Animation",
      description: "Crafting smooth micro-interactions and motion design that guide users and enhance the overall product experience.",
      color: "bg-[#ff6b35]"
    },
    {
      icon: Code,
      title: "Development",
      description: "Collaborating with development teams to ensure pixel-perfect implementation and optimal user experience delivery.",
      color: "bg-[#F4F4F6]"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 font-[Inter]">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[Plus_Jakarta_Sans]">
            I specialize in creating comprehensive digital experiences that combine beautiful design 
            with functional usability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color === 'bg-[#F4F4F6]' ? 'text-gray-700' : 'text-white'}`} />
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-[Plus_Jakarta_Sans]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#A8C5E6] to-[#D7C7E9] rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe XD', 'Sketch', 'Principle', 'After Effects', 'Framer', 'React', 'HTML/CSS'].map((tool) => (
              <span
                key={tool}
                className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}