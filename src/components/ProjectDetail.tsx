import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface ProjectDetailProps {
  project: any;
  onClose: () => void;
  onViewCaseStudy?: (project: any) => void;
}

export function ProjectDetail({ project, onClose, onViewCaseStudy }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <div className="text-sm text-[#ff6b35] font-medium">{project.category}</div>
            <h1 className="text-3xl font-medium text-gray-900">{project.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#A8C5E6] rounded-full flex items-center justify-center text-white text-sm">🎯</span>
                Goal
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.goal}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#ff6b35] rounded-full flex items-center justify-center text-white text-sm">⚡</span>
                Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#D7C7E9] rounded-full flex items-center justify-center text-white text-sm">✨</span>
                Solution
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                View Live Project
              </Button>
              <Button variant="outline" onClick={() => onViewCaseStudy?.(project)}>
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}