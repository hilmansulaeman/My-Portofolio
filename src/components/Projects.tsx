import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import inmedFoodImage from '../assets/InmedFood.png';
import EdupassImage from '../assets/Edupass.png';
import MockupManutImage from '../assets/mockup_manut.png';

interface ProjectsProps {
  onViewAllProjects?: () => void;
  onViewCaseStudy?: (project: any) => void;
}

export function Projects({ onViewAllProjects, onViewCaseStudy }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Pilih Jurusan",
      category: "Mobile App",
      description: "Educational guidance app helping students choose the right career path with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgwODIzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Mobile", "Education"],
      goal: "Create an intuitive platform that helps Indonesian students make informed decisions about their academic and career paths.",
      challenge: "Designing for diverse user groups with varying levels of digital literacy while presenting complex career information in an accessible way.",
      solution: "Implemented a gamified onboarding process, personality assessments, and clear visual career pathways with local job market data integration.",
      year: "2024",
      client: "Education Startup"
    },
    {
      id: 2,
      title: "Manut Kopi",
      category: "Branding & E-commerce",
      description: "Manut Kopi is a coffee shop located in Bekasi City",
      image: MockupManutImage,
      tags: ["POS System", "Web App", "E-commerce"],
      goal: "The purpose of developing the POS System application in Manut Kopi is to increase operational efficiency and customer comfort in the process of ordering food and beverages.",
      challenge: "How might we streamline the ordering process at Manut Kopi to make it faster, more intuitive, and efficient, reducing customer wait time and preventing service bottlenecks?",
      solution: "Designed and developed an integrated POS system to streamline the ordering process, making it faster, more structured, and easy to use. The system includes a well-organized digital menu, clear categorization, and real-time order processing to reduce errors, improve service speed, and prevent queue bottlenecks.",
      year: "2024",
      client: "Manut Coffee",
      liveUrl: "https://manut-kopi.vercel.app"
    },
    {
      id: 3,
      title: "EDUPAS",
      category: "Web Platform",
      description: "Learning management system designed for Indonesian educational institutions with integrated assessment tools.",
      image: EdupassImage,
      tags: ["Dashboard", "Education", "SaaS"],
      goal: "Streamline the educational process for teachers and students with a comprehensive digital learning platform.",
      challenge: "Creating an interface that works for different user roles (students, teachers, administrators) with varying technical skills.",
      solution: "Designed role-based dashboards with simplified navigation, integrated communication tools, and responsive design for mobile learning.",
      year: "2023",
      client: "Educational Institution"
    },
    {
      id: 4,
      title: "Innovia HRM",
      category: "Enterprise Software",
      description: "Human Resource Management system with advanced analytics and employee engagement features.",
      image: "https://images.unsplash.com/photo-1610387695018-3a90bf21c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Enterprise", "HRM", "Dashboard"],
      goal: "Modernize HR processes with an intuitive system that improves employee experience and HR efficiency.",
      challenge: "Designing complex data visualization and workflows while maintaining ease of use for non-technical HR staff.",
      solution: "Created modular dashboard components, automated workflow wizards, and integrated employee self-service portals.",
      year: "2023",
      client: "Innovia Corp"
    },
    {
      id: 5,
      title: "Event Run by Innovia",
      category: "Event Management",
      description: "Comprehensive event management platform for organizing and tracking corporate events and activities.",
      image: "https://images.unsplash.com/photo-1750041888982-67a58e6c9014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBhcHB8ZW58MXx8fHwxNzU4MTYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Event Management", "Mobile", "Real-time"],
      goal: "Provide event organizers with tools to manage all aspects of event planning and execution in one platform.",
      challenge: "Coordinating multiple stakeholders and real-time updates while maintaining a clean, organized interface.",
      solution: "Built a timeline-based interface with real-time collaboration features, automated notifications, and mobile-first design for on-site management.",
      year: "2023",
      client: "Innovia Corp"
    },
    {
      id: 6,
      title: "InmedFood",
      category: "Food Delivery",
      description: "Healthcare-focused food delivery app connecting patients with nutritionist-approved meal options.",
      image: inmedFoodImage,
      tags: ["Healthcare", "Food Tech", "Mobile"],
      goal: "Bridge the gap between healthcare and nutrition by providing easy access to medically-approved meals.",
      challenge: "Creating trust and clarity around medical dietary requirements while maintaining an appealing food ordering experience.",
      solution: "Implemented doctor verification system, clear nutritional labeling, and personalized meal recommendations based on medical conditions.",
      year: "2024",
      client: "Healthcare Startup"
    }
  ];

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my approach to solving complex design challenges 
              and creating meaningful user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {onViewAllProjects && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button 
                onClick={onViewAllProjects}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-[Inter]"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onViewCaseStudy={onViewCaseStudy}
        />
      )}
    </>
  );
}
