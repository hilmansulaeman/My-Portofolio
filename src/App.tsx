import { useState } from 'react';
import { Header } from './components/Header';
import { MainPortfolio } from './components/MainPortfolio';
import { AllProjects } from './components/AllProjects';
import { Footer } from './components/Footer';
import { ShaderBackground } from './components/ShaderBackground';

type Page = 'portfolio' | 'all-projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return (
          <>
            <MainPortfolio onViewAllProjects={() => handleNavigate('all-projects')} />
            <Footer />
          </>
        );
      case 'all-projects':
        return (
          <>
            <AllProjects onBack={() => handleNavigate('portfolio')} />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <MainPortfolio onViewAllProjects={() => handleNavigate('all-projects')} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ShaderBackground />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
    </div>
  );
}