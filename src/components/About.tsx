import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-[#F4F4F6]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 font-[Inter]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-[Plus_Jakarta_Sans]">
              Hi, I'm Hilman Sulaeman, a passionate UI UX with
              over 3 years & Front End Developer with over 1
              years of experience creating digital experiences
              that bridge the gap between user needs and
              business goals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-[Plus_Jakarta_Sans]">
              My design philosophy centers around simplicity and
              clarity—I believe that great design should feel
              effortless to users while solving complex problems
              underneath. I specialize in mobile applications,
              web platforms, and comprehensive design systems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-[Plus_Jakarta_Sans]">
              When I'm not designing, you'll find me exploring
              the latest design trends, sketching ideas in my
              notebook, or collaborating with development teams
              to bring digital products to life.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-medium text-[#ff6b35] mb-2 font-[Inter]">
                  20+
                </div>
                <div className="text-sm text-gray-600 font-[Plus_Jakarta_Sans]">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-medium text-[#ff6b35] mb-2 font-[Inter]">
                  3+
                </div>
                <div className="text-sm text-gray-600 font-[Plus_Jakarta_Sans]">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4MDg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design workspace showing sketches and mockups"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                <div className="w-12 h-12 bg-[#A8C5E6] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-medium text-gray-900 font-[Inter]">
                  Design Process
                </h4>
                <p className="text-sm text-gray-600 font-[Plus_Jakarta_Sans]">
                  User research, wireframing, prototyping, and
                  testing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                <div className="w-12 h-12 bg-[#D7C7E9] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-medium text-gray-900 font-[Inter]">
                  Innovation
                </h4>
                <p className="text-sm text-gray-600 font-[Plus_Jakarta_Sans]">
                  Exploring new technologies and design
                  methodologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}