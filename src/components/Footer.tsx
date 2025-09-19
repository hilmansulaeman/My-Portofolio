import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { Particles } from "./ui/particles.tsx";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh={true}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-medium mb-2 font-[Inter]">
                Hilman Sulaeman
              </h3>
              <p className="text-gray-400 font-[Plus_Jakarta_Sans]">
                UI UX & Front End Developer
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md font-[Plus_Jakarta_Sans]">
              Creating digital experiences that bridge the gap
              between user needs and business goals. Always
              passionate about designing clarity out of
              complexity.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-[Plus_Jakarta_Sans]">
                  hilmansulaeman0504@email.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-[Plus_Jakarta_Sans]">
                  +62 878 3156 8837
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-lg font-[Inter]">
              Navigation
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-[Plus_Jakarta_Sans]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-[Plus_Jakarta_Sans]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-[Plus_Jakarta_Sans]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-[Plus_Jakarta_Sans]"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-white transition-colors text-sm font-[Plus_Jakarta_Sans]"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium text-lg font-[Inter]">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-sm">🎨</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-sm text-gray-400 font-[Plus_Jakarta_Sans]">
                Available for freelance work
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm font-[Inter]">
            © 2024 Hilman Sulaeman. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors font-[Plus_Jakarta_Sans]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors font-[Plus_Jakarta_Sans]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
