import { useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
} from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import inmedFoodImage from "../assets/InmedFood.png";
import EdupassImage from "../assets/Edupass.png";
import MockupManutImage from '../assets/mockup_manut.png';
import PotoboxImage from "../assets/Potobox.png";


interface AllProjectsProps {
  onBack: () => void;
  onViewCaseStudy?: (project: any) => void;
}

export function AllProjects({ onBack, onViewCaseStudy }: AllProjectsProps) {
  const [selectedProject, setSelectedProject] =
    useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const allProjects = useMemo(() => [
    {
      id: 1,
      title: "Pilih Jurusan",
      category: "Company Profile Website",
      description:
        "Redesigned the company profile website for Pilih Jurusan, a psychological assessment platform that helps students make confident study and career decisions.",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgwODIzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Website Redesign", "Education"],
      goal: "Improve the company profile experience so Pilih Jurusan's services, benefits, and value for students and school partners are communicated clearly.",
      challenge:
        "Presenting psychological assessment services and educational guidance in a clear, approachable way for students, parents, and school partners.",
      solution:
        "Redesigned the company profile with clearer service information, benefit-focused content, and conversion paths for students and school partners.",
      year: "February – August 2024",
      client: "Pilih Jurusan",
    },
    {
      id: 2,
      title: "Manut Kopi",
      category: "Branding & E-commerce",
      description:
        "Complete brand identity and e-commerce platform for artisanal coffee shop with focus on local Indonesian beans.",
      image: MockupManutImage,
      tags: ["Branding", "E-commerce", "Web Design"],
      goal: "Establish a premium coffee brand that celebrates Indonesian coffee culture while appealing to modern consumers.",
      challenge:
        "Balancing traditional coffee culture with contemporary design aesthetics and creating a seamless online shopping experience.",
      solution:
        "Developed a warm, earthy brand identity with custom illustrations and built a user-friendly e-commerce platform with detailed product stories and brewing guides.",
      year: "2024",
      client: "Manut Coffee",
    },
    {
      id: 3,
      title: "EDUPAS",
      category: "Web Platform",
      description:
        "An integrated campus platform for learning activities and discovering campus events in one place.",
      image: EdupassImage,
      tags: ["Learning Platform", "Campus Events", "Education"],
      goal: "Provide students with one accessible platform for learning resources, academic activities, and campus event information.",
      challenge:
        "Bringing learning activities and campus event discovery into one clear experience without overwhelming students.",
      solution:
        "Designed an integrated platform with learning materials, academic schedules, campus event listings, and event registration flows.",
      year: "2023",
      client: "EDUPAS",
    },
    {
      id: 4,
      title: "Innovia HRM",
      category: "Enterprise Software",
      description:
        "An integrated HR management platform that streamlines employee data, HR operations, and workforce insights.",
      image:
        "https://images.unsplash.com/photo-1610387695018-3a90bf21c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HRM", "Employee Management", "Dashboard"],
      goal: "Centralize employee information and simplify core HR processes for a more efficient HR team and employee experience.",
      challenge:
        "Making complex HR workflows, employee data, and operational insights easy to access for HR teams and employees.",
      solution:
        "Designed role-based dashboards, structured employee data management, and self-service workflows for everyday HR tasks.",
      year: "2023",
      client: "Innovia",
    },
    {
      id: 5,
      title: "Event Run by Innovia",
      category: "Event Management",
      description:
        "An event management platform for organising, promoting, and tracking Innovia's internal events in one place.",
      image:
        "https://images.unsplash.com/photo-1750041888982-67a58e6c9014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBhcHB8ZW58MXx8fHwxNzU4MTYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Event Management", "Event Platform", "Dashboard"],
      goal: "Give organisers and participants one clear place to discover event information, schedules, and registration details.",
      challenge:
        "Presenting event details, updates, and participant needs in a simple experience that remains easy to scan.",
      solution:
        "Designed an event-focused dashboard with event listings, detail pages, schedules, and registration flows for participants.",
      year: "2023",
      client: "Innovia",
    },
    {
      id: 6,
      title: "InmedFood",
      category: "UMKM Food Platform",
      description:
        "A digital food ordering platform that helps UMKM manage their menu, orders, and customer experience.",
      image: inmedFoodImage,
      tags: ["UMKM", "Food Ordering", "Mobile App"],
      goal: "Help food UMKM reach customers through a simple digital ordering experience and clearer menu management.",
      challenge:
        "Creating an easy ordering flow that supports UMKM operations while remaining simple and appealing for customers.",
      solution:
        "Designed a mobile-first platform with digital menus, product discovery, cart, and order flows tailored to food UMKM.",
      year: "2024",
      client: "InmedFood",
    },
    {
      id: 7,
      title: "TechFlow Dashboard",
      category: "Analytics Platform",
      description:
        "Real-time analytics dashboard for monitoring tech startup performance metrics and KPIs.",
      image:
        "https://images.unsplash.com/photo-1600267185393-e158a98703de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MTYzMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Analytics", "Dashboard", "B2B"],
      goal: "Provide startups with clear insights into their business performance through intuitive data visualization.",
      challenge:
        "Making complex data accessible and actionable for non-technical founders.",
      solution:
        "Created modular widgets, customizable views, and AI-powered insights with natural language explanations.",
      year: "2024",
      client: "TechFlow Inc",
    },
    {
      id: 8,
      title: "Wellness Tracker",
      category: "Health & Fitness",
      description:
        "Personal wellness tracking app with meditation, exercise, and nutrition monitoring features.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1ODE2MzA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Health", "Mobile", "Wellness"],
      goal: "Create a holistic wellness platform that motivates users to maintain healthy habits.",
      challenge:
        "Designing for motivation and habit formation while avoiding overwhelming users with too much data.",
      solution:
        "Implemented gamification elements, personalized coaching, and gentle reminder systems with progress visualization.",
      year: "2024",
      client: "Wellness Startup",
    },
    {
      id: 11,
      title: "EcoTrack",
      category: "Sustainability",
      description:
        "Carbon footprint tracking app helping individuals and businesses monitor their environmental impact.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1ODE2MzA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sustainability", "Mobile", "Analytics"],
      goal: "Make environmental impact tracking accessible and actionable for everyday users.",
      challenge:
        "Presenting complex environmental data in an engaging way that motivates behavior change.",
      solution:
        "Created visual impact comparisons, achievement systems, and community challenges with local environmental data.",
      year: "2024",
      client: "GreenTech Startup",
    },
    {
      id: 12,
      title: "CloudSync Enterprise",
      category: "Enterprise Software",
      description:
        "Cloud-based collaboration platform for distributed teams with advanced project management features.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Enterprise", "Collaboration", "SaaS"],
      goal: "Streamline remote team collaboration with integrated communication and project management tools.",
      challenge:
        "Creating a unified experience across multiple complex workflows while maintaining performance.",
      solution:
        "Designed modular workspace layouts, intelligent notification systems, and seamless tool integrations.",
      year: "2023",
      client: "CloudSync Corp",
    },
    {
      id: 13,
      title: "LocalMarket",
      category: "E-commerce",
      description:
        "Marketplace platform connecting local artisans with customers, featuring handmade and sustainable products.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NTgxNjMwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["E-commerce", "Marketplace", "Local"],
      goal: "Support local artisans by providing them with a user-friendly platform to sell their handmade products.",
      challenge:
        "Balancing seller needs with buyer experience while building trust in a new marketplace.",
      solution:
        "Implemented seller verification, detailed product stories, customer review systems, and local delivery tracking.",
      year: "2024",
      client: "LocalMarket Inc",
    },
    {
      id: 14,
      title: "StudyBuddy",
      category: "EdTech",
      description:
        "Collaborative study platform for students with flashcards, group study rooms, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NTgxNjMwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Education", "Collaboration", "Mobile"],
      goal: "Make studying more engaging and effective through peer collaboration and gamification.",
      challenge:
        "Creating an environment that encourages genuine learning rather than just completing tasks.",
      solution:
        "Built peer-to-peer learning features, adaptive study plans, and achievement systems that reward understanding over completion.",
      year: "2024",
      client: "StudyBuddy Team",
    },
    {
      id: 15,
      title: "Urbanmenphoto",
      category: "Kiosk & Photobooth System",
      description:
        "A self-service web photobooth for capturing, editing, printing, and sharing event photos.",
      image: PotoboxImage,
      tags: ["Kiosk", "Photobooth", "Admin Dashboard"],
      goal: "Digitalize the photobooth experience into a self-service web flow, from payment and photo capture to editing, printing, and sharing through a gallery link or QR code.",
      challenge:
        "Keeping a feature-rich kiosk flow fast and easy to understand while ensuring photo sessions, uploads, and booth operations remain reliable.",
      solution:
        "Designed a kiosk-first wizard with payment, capture, frame selection, editing, GIF creation, printing, and sharing, supported by an admin dashboard for sessions, payments, galleries, frames, reports, and recovery.",
      year: "—",
      client: "Urbanmenphoto",
      liveUrl: "https://photo-box-dev.vercel.app/",
    },
  ].filter((project) => ![7, 8, 11, 12, 13, 14].includes(project.id)), []);

  const categories = useMemo(() => [
    "All",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ], [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProjects, searchTerm, selectedCategory]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("All");
  }, []);

  const handleProjectSelect = useCallback((project: any) => {
    setSelectedProject(project);
  }, []);

  const handleProjectClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <main className="pt-20">
      <section className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#F4F4F6] via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Button>

            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-5">
              All Projects
            </h1>
            <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore a selected set of projects with a simpler, cleaner view.
              The focus stays on the work, not the interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: '32px' }}
          >
            <div className="all-project-filters">
              <div className="all-project-search-wrap">
                <div className="all-project-search">
                  <Search className="all-project-search-icon" />
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="all-project-search-input"
                  />
                </div>
              </div>

                <div className="all-project-category-list">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`all-project-category-button ${
                        selectedCategory === category
                          ? "is-active"
                          : ""
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
          </motion.div>

          {(searchTerm || selectedCategory !== "All") && (
            <div className="mb-8 flex justify-end">
              <button
                onClick={handleClearFilters}
                className="text-sm font-medium text-[#ff6b35] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
                onClick={() => handleProjectSelect(project)}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search terms or category
                filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                className="mt-6"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleProjectClose}
          onViewCaseStudy={onViewCaseStudy}
        />
      )}
    </main>
  );
}
