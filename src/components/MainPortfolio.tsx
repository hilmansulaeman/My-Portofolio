import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';

interface MainPortfolioProps {
  onViewAllProjects: () => void;
}

export function MainPortfolio({ onViewAllProjects }: MainPortfolioProps) {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects onViewAllProjects={onViewAllProjects} />
      <Contact />
    </main>
  );
}