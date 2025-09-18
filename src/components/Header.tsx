import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-300 font-[Inter]">📍 Jakarta, Indonesia</div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white hover:text-gray-300 hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-white hover:text-gray-300 transition-colors"  
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}