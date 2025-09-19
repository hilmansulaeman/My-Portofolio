import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';

interface MainPortfolioProps {
  onViewAllProjects: () => void;
  onViewCaseStudy: (project: any) => void;
}

export function MainPortfolio({ onViewAllProjects, onViewCaseStudy }: MainPortfolioProps) {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects 
        onViewAllProjects={onViewAllProjects}
        onViewCaseStudy={onViewCaseStudy}
      />
      <Contact />
    </main>
  );
}