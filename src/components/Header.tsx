import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: 'portfolio' | 'all-projects' | 'case-study';
  onNavigate: (page: 'portfolio' | 'all-projects' | 'case-study') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'portfolio') {
      onNavigate('portfolio');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (currentPage !== 'portfolio') {
      onNavigate('portfolio');
    } else {
      scrollToSection('home');
    }
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    if (currentPage === 'all-projects') {
      onNavigate('portfolio');
      setTimeout(() => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (currentPage === 'case-study') {
      onNavigate('portfolio');
      setTimeout(() => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection('projects');
    }
    setIsMenuOpen(false);
  };

  const isPortfolioPage = currentPage === 'portfolio';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleHomeClick}
            className="text-sm text-gray-300 font-[Inter] hover:text-white transition-colors"
          >
            📍 Jakarta, Indonesia
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={handleHomeClick}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-sm transition-colors font-[Inter] ${
              isPortfolioPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isPortfolioPage}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={`text-sm transition-colors font-[Inter] ${
              isPortfolioPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isPortfolioPage}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`text-sm transition-colors font-[Inter] ${
              isPortfolioPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isPortfolioPage}
          >
            Services
          </button>
          <button 
            onClick={handleProjectsClick}
            className="text-sm text-white hover:text-gray-300 transition-colors font-[Inter]"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-sm transition-colors font-[Inter] ${
              isPortfolioPage 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isPortfolioPage}
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
                onClick={handleHomeClick}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block text-sm transition-colors ${
                  isPortfolioPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isPortfolioPage}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className={`block text-sm transition-colors ${
                  isPortfolioPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isPortfolioPage}
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block text-sm transition-colors ${
                  isPortfolioPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isPortfolioPage}
              >
                Services
              </button>
              <button 
                onClick={handleProjectsClick}
                className="block text-sm text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block text-sm transition-colors ${
                  isPortfolioPage 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isPortfolioPage}
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