import { useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Filter,
  Grid,
  List,
  Search,
} from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );

  const allProjects = useMemo(() => [
    {
      id: 1,
      title: "Pilih Jurusan",
      category: "Mobile App",
      description:
        "Educational guidance app helping students choose the right career path with AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgwODIzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Mobile", "Education"],
      goal: "Create an intuitive platform that helps Indonesian students make informed decisions about their academic and career paths.",
      challenge:
        "Designing for diverse user groups with varying levels of digital literacy while presenting complex career information in an accessible way.",
      solution:
        "Implemented a gamified onboarding process, personality assessments, and clear visual career pathways with local job market data integration.",
      year: "2024",
      client: "Education Startup",
    },
    {
      id: 2,
      title: "Manut Kopi",
      category: "Branding & E-commerce",
      description:
        "Complete brand identity and e-commerce platform for artisanal coffee shop with focus on local Indonesian beans.",
      image:
        "https://images.unsplash.com/photo-1750825997349-a59f9639300e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        "Learning management system designed for Indonesian educational institutions with integrated assessment tools.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgwOTEyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Dashboard", "Education", "SaaS"],
      goal: "Streamline the educational process for teachers and students with a comprehensive digital learning platform.",
      challenge:
        "Creating an interface that works for different user roles (students, teachers, administrators) with varying technical skills.",
      solution:
        "Designed role-based dashboards with simplified navigation, integrated communication tools, and responsive design for mobile learning.",
      year: "2023",
      client: "Educational Institution",
    },
    {
      id: 4,
      title: "Innovia HRM",
      category: "Enterprise Software",
      description:
        "Human Resource Management system with advanced analytics and employee engagement features.",
      image:
        "https://images.unsplash.com/photo-1610387695018-3a90bf21c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Enterprise", "HRM", "Dashboard"],
      goal: "Modernize HR processes with an intuitive system that improves employee experience and HR efficiency.",
      challenge:
        "Designing complex data visualization and workflows while maintaining ease of use for non-technical HR staff.",
      solution:
        "Created modular dashboard components, automated workflow wizards, and integrated employee self-service portals.",
      year: "2023",
      client: "Innovia Corp",
    },
    {
      id: 5,
      title: "Event Run by Innovia",
      category: "Event Management",
      description:
        "Comprehensive event management platform for organizing and tracking corporate events and activities.",
      image:
        "https://images.unsplash.com/photo-1750041888982-67a58e6c9014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBhcHB8ZW58MXx8fHwxNzU4MTYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Event Management", "Mobile", "Real-time"],
      goal: "Provide event organizers with tools to manage all aspects of event planning and execution in one platform.",
      challenge:
        "Coordinating multiple stakeholders and real-time updates while maintaining a clean, organized interface.",
      solution:
        "Built a timeline-based interface with real-time collaboration features, automated notifications, and mobile-first design for on-site management.",
      year: "2023",
      client: "Innovia Corp",
    },
    {
      id: 6,
      title: "InmedFood",
      category: "Food Delivery",
      description:
        "Healthcare-focused food delivery app connecting patients with nutritionist-approved meal options.",
      image:
        "https://images.unsplash.com/photo-1663153206138-cc0f166f82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "Food Tech", "Mobile"],
      goal: "Bridge the gap between healthcare and nutrition by providing easy access to medically-approved meals.",
      challenge:
        "Creating trust and clarity around medical dietary requirements while maintaining an appealing food ordering experience.",
      solution:
        "Implemented doctor verification system, clear nutritional labeling, and personalized meal recommendations based on medical conditions.",
      year: "2024",
      client: "Healthcare Startup",
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
      id: 9,
      title: "FinanceFlow",
      category: "Fintech",
      description:
        "Personal finance management app with budgeting tools, expense tracking, and investment insights.",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1ODE2MzA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Fintech", "Mobile", "Analytics"],
      goal: "Simplify personal finance management for young professionals in emerging markets.",
      challenge:
        "Building trust in financial data handling while making complex financial concepts accessible.",
      solution:
        "Developed clear data security messaging, educational content integration, and simplified financial planning tools.",
      year: "2023",
      client: "FinanceFlow Ltd",
    },
    {
      id: 10,
      title: "Creative Studio Portfolio",
      category: "Portfolio Website",
      description:
        "Interactive portfolio website for a creative agency showcasing their diverse project portfolio.",
      image:
        "https://images.unsplash.com/photo-1667984391983-8c35bea78bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU4MTYzMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Portfolio", "Creative", "Web"],
      goal: "Create an immersive showcase that reflects the agency's creative capabilities and attracts premium clients.",
      challenge:
        "Balancing visual impact with fast loading times and ensuring the design doesn't overshadow the work itself.",
      solution:
        "Implemented progressive loading, interactive animations, and a clean gallery system with detailed case studies.",
      year: "2023",
      client: "Creative Agency",
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
  ], []);

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

  const handleViewModeChange = useCallback((mode: "grid" | "list") => {
    setViewMode(mode);
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
      <section className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
                All Projects
              </h1>
              <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore my complete portfolio of digital
                products, from mobile apps to enterprise
                solutions. Each project represents a unique
                challenge and a story of problem-solving through
                design.
              </p>
            </div>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-10 w-full rounded-xl border-gray-200 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-[#ff6b35] text-white shadow-lg shadow-[#ff6b35]/25"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => handleViewModeChange("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-white text-[#ff6b35] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleViewModeChange("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-white text-[#ff6b35] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""} found
              {selectedCategory !== "All" &&
                ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "space-y-6"
            }
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

          {/* No Results */}
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