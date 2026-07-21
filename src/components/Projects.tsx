import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import inmedFoodImage from '../assets/InmedFood.png';
import EdupassImage from '../assets/Edupass.png';
import MockupManutImage from '../assets/mockup_manut.png';
import PotoboxImage from '../assets/Potobox.png';

interface ProjectsProps {
  onViewAllProjects?: () => void;
  onViewCaseStudy?: (project: any) => void;
}

export function Projects({ onViewAllProjects, onViewCaseStudy }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [slideSnaps, setSlideSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => setSelectedSlide(carouselApi.selectedScrollSnap());

    setSlideSnaps(carouselApi.scrollSnapList());
    updateSelection();
    carouselApi.on('select', updateSelection);
    carouselApi.on('reInit', updateSelection);

    return () => {
      carouselApi.off('select', updateSelection);
      carouselApi.off('reInit', updateSelection);
    };
  }, [carouselApi]);

  const projects = [
    {
      id: 1,
      title: "Pilih Jurusan",
      category: "Company Profile Website",
      description: "Redesigned the company profile website for Pilih Jurusan, a psychological assessment platform that helps students make confident study and career decisions.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgwODIzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Website Redesign", "Education"],
      goal: "Improve the company profile experience so Pilih Jurusan's services, benefits, and value for students and school partners are communicated clearly.",
      challenge: "Presenting psychological assessment services and educational guidance in a clear, approachable way for students, parents, and school partners.",
      solution: "Redesigned the company profile with clearer service information, benefit-focused content, and conversion paths for students and school partners.",
      year: "February – August 2024",
      client: "Pilih Jurusan"
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
      description: "An integrated campus platform for learning activities and discovering campus events in one place.",
      image: EdupassImage,
      tags: ["Learning Platform", "Campus Events", "Education"],
      goal: "Provide students with one accessible platform for learning resources, academic activities, and campus event information.",
      challenge: "Bringing learning activities and campus event discovery into one clear experience without overwhelming students.",
      solution: "Designed an integrated platform with learning materials, academic schedules, campus event listings, and event registration flows.",
      year: "2023",
      client: "EDUPAS"
    },
    {
      id: 4,
      title: "Innovia HRM",
      category: "Enterprise Software",
      description: "An integrated HR management platform that streamlines employee data, HR operations, and workforce insights.",
      image: "https://images.unsplash.com/photo-1610387695018-3a90bf21c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HRM", "Employee Management", "Dashboard"],
      goal: "Centralize employee information and simplify core HR processes for a more efficient HR team and employee experience.",
      challenge: "Making complex HR workflows, employee data, and operational insights easy to access for HR teams and employees.",
      solution: "Designed role-based dashboards, structured employee data management, and self-service workflows for everyday HR tasks.",
      year: "2023",
      client: "Innovia"
    },
    {
      id: 5,
      title: "Event Run by Innovia",
      category: "Event Management",
      description: "An event management platform for organising, promoting, and tracking Innovia's internal events in one place.",
      image: "https://images.unsplash.com/photo-1750041888982-67a58e6c9014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBhcHB8ZW58MXx8fHwxNzU4MTYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Event Management", "Event Platform", "Dashboard"],
      goal: "Give organisers and participants one clear place to discover event information, schedules, and registration details.",
      challenge: "Presenting event details, updates, and participant needs in a simple experience that remains easy to scan.",
      solution: "Designed an event-focused dashboard with event listings, detail pages, schedules, and registration flows for participants.",
      year: "2023",
      client: "Innovia"
    },
    {
      id: 6,
      title: "InmedFood",
      category: "UMKM Food Platform",
      description: "A digital food ordering platform that helps UMKM manage their menu, orders, and customer experience.",
      image: inmedFoodImage,
      tags: ["UMKM", "Food Ordering", "Mobile App"],
      goal: "Help food UMKM reach customers through a simple digital ordering experience and clearer menu management.",
      challenge: "Creating an easy ordering flow that supports UMKM operations while remaining simple and appealing for customers.",
      solution: "Designed a mobile-first platform with digital menus, product discovery, cart, and order flows tailored to food UMKM.",
      year: "2024",
      client: "InmedFood"
    },
    {
      id: 15,
      title: "Urbanmenphoto",
      category: "Kiosk & Photobooth System",
      description: "A self-service web photobooth for capturing, editing, printing, and sharing event photos.",
      image: PotoboxImage,
      tags: ["Kiosk", "Photobooth", "Admin Dashboard"],
      goal: "Digitalize the photobooth experience into a self-service web flow, from payment and photo capture to editing, printing, and sharing through a gallery link or QR code.",
      challenge: "Keeping a feature-rich kiosk flow fast and easy to understand while ensuring photo sessions, uploads, and booth operations remain reliable.",
      solution: "Designed a kiosk-first wizard with payment, capture, frame selection, editing, GIF creation, printing, and sharing, supported by an admin dashboard for sessions, payments, galleries, frames, reports, and recovery.",
      year: "—",
      client: "Urbanmenphoto",
      liveUrl: "https://photo-box-dev.vercel.app/"
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

          <Carousel
            setApi={setCarouselApi}
            opts={{ align: 'start', loop: true, slidesToScroll: 3 }}
            className="featured-project-carousel"
          >
            <CarouselContent className="featured-project-carousel-content">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="featured-project-carousel-item">
                  <ProjectCard
                    {...project}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious aria-label="Previous projects" className="featured-project-carousel-arrow featured-project-carousel-arrow-previous" />
            <CarouselNext aria-label="Next projects" className="featured-project-carousel-arrow featured-project-carousel-arrow-next" />

            <div className="featured-project-carousel-dots" aria-label="Project slides">
              {slideSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={selectedSlide === index}
                  className={`featured-project-carousel-dot ${selectedSlide === index ? 'is-active' : ''}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>

          {onViewAllProjects && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
              style={{ marginTop: '64px' }}
            >
              <button 
                onClick={onViewAllProjects}
                className="featured-projects-view-all"
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
