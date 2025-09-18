import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  onClick: () => void;
}

export function ProjectCard({ title, category, description, image, tags, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="text-sm text-[#ff6b35] font-medium font-[Inter]">{category}</div>
            <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#ff6b35] transition-colors duration-300 font-[Inter]">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-[Plus_Jakarta_Sans]">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-[Plus_Jakarta_Sans]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}