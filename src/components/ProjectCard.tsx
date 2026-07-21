import { motion } from 'motion/react';
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
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden border border-[#E5E7EB] bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-35px_rgba(15,23,42,0.18)]"
        style={{ borderRadius: '16px' }}
      >
        <div
          className="relative overflow-hidden bg-gray-100"
          style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-5">
            <span className="inline-flex rounded-full border border-[#FFE7D9] bg-[#FFF1E8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">
              {category}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#ff6b35]">
              {title}
            </h3>
            <p className="text-sm leading-7 text-slate-600">
              {description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition duration-300 group-hover:bg-[#FF6B35]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
