import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Target, Lightbulb, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyProps {
  project: any;
  onBack: () => void;
}

export function CaseStudy({ project, onBack }: CaseStudyProps) {
  if (!project) return null;

  const processSteps = [
    {
      title: "Research & Discovery",
      description: "Understanding user needs, market analysis, and defining project scope",
      duration: "2 weeks"
    },
    {
      title: "Ideation & Wireframing",
      description: "Brainstorming solutions, creating user flows, and low-fidelity prototypes",
      duration: "1 week"
    },
    {
      title: "Design & Prototyping",
      description: "High-fidelity designs, interactive prototypes, and design system creation",
      duration: "3 weeks"
    },
    {
      title: "Testing & Iteration",
      description: "User testing, feedback collection, and design refinements",
      duration: "1 week"
    },
    {
      title: "Development & Launch",
      description: "Implementation support, quality assurance, and project delivery",
      duration: "2 weeks"
    }
  ];

  const keyMetrics = [
    { label: "Project Duration", value: "9 weeks" },
    { label: "Team Size", value: "4 people" },
    { label: "User Testing Sessions", value: "12" },
    { label: "Design Iterations", value: "3" }
  ];

  const results = [
    "Improved user engagement by 45%",
    "Reduced user onboarding time by 60%",
    "Increased conversion rate by 32%",
    "Enhanced user satisfaction score to 4.8/5"
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
                {project.title}
              </h1>
              <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="bg-[#A8C5E6] text-gray-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {project.category}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Goal</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.goal}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Challenge</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Solution</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#A8C5E6]/10 to-[#D7C7E9]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Project Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key numbers that showcase the project's scope and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="text-3xl font-medium text-[#ff6b35] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to deliver exceptional user experiences
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-xl flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <div className="text-sm text-gray-500 mt-1 md:mt-0">
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Results & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes that demonstrate the project's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Lessons Learned
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key insights and takeaways from this project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-r from-[#A8C5E6]/10 to-[#D7C7E9]/10 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  What Worked Well
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Early user testing and iterative design approach allowed us to identify and resolve usability issues before development. The collaborative approach with stakeholders ensured alignment throughout the project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Areas for Improvement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  More extensive accessibility testing could have been incorporated earlier in the process. Additional time for edge case scenarios would have helped create more robust solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Future Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The design system created for this project can be extended to support additional features and platforms. Performance optimization remains a key area for ongoing improvement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F4F4F6] to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onBack}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                View More Projects
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}