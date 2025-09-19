import { useState } from 'react';
import { Header } from './components/Header';
import { MainPortfolio } from './components/MainPortfolio';
import { AllProjects } from './components/AllProjects';
import { CaseStudy } from './components/CaseStudy';
import { Footer } from './components/Footer';
import { ShaderBackground } from './components/ShaderBackground';

type Page = 'portfolio' | 'all-projects' | 'case-study';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCaseStudy = (project: any) => {
    setSelectedProject(project);
    setCurrentPage('case-study');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return (
          <>
            <MainPortfolio 
              onViewAllProjects={() => handleNavigate('all-projects')}
              onViewCaseStudy={handleViewCaseStudy}
            />
            <Footer />
          </>
        );
      case 'all-projects':
        return (
          <>
            <AllProjects 
              onBack={() => handleNavigate('portfolio')}
              onViewCaseStudy={handleViewCaseStudy}
            />
            <Footer />
          </>
        );
      case 'case-study':
        return (
          <>
            <CaseStudy 
              project={selectedProject}
              onBack={() => handleNavigate('portfolio')}
            />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <MainPortfolio 
              onViewAllProjects={() => handleNavigate('all-projects')}
              onViewCaseStudy={handleViewCaseStudy}
            />
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