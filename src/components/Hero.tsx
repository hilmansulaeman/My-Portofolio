import { motion } from "framer-motion";
import { Particles } from "./ui/particles.tsx";

export function Hero() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh={true}
      />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#A8C5E6] to-[#D7C7E9] rounded-full opacity-10 blur-xl"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-[#D7C7E9] to-[#A8C5E6] rounded-full opacity-8 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ff6b35] rounded-full opacity-15 blur-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-medium text-white leading-tight font-[Inter]">
              Hilman
              <br />
              <span className="text-[#ff6b35] font-[Inter]">Sulaeman</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 font-medium font-[Inter]">
              UI UX & Front End Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#ff6b35] text-white px-8 py-4 rounded-xl hover:bg-[#ff5722] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-[Inter]"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-gray-500 hover:bg-white/5 transition-all duration-300 font-[Inter]"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
