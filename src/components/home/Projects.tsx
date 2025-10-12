import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  tags: string[];
  phase: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "FlowerUI",
    description: "Beautiful, production-ready React component library featuring 90+ carefully crafted components with smooth animations and dark theme design. Built with React, TypeScript, Tailwind CSS, and Framer Motion. Components are free to copy and use in any project.",
    status: "Live",
    statusColor: "bg-green-500",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    phase: "Published · Production",
    link: "https://flowerui.vercel.app",
    github: "https://github.com/valasellisdimitris/flowerui",
  },
  // Add more projects here when available
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-auto px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] w-full bg-white"
    >
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-ubuntu text-neutral-900 text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-tight"
      >
        Projects
      </motion.span>
      
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="h-[2px] bg-neutral-900 mb-10"
      ></motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative flex flex-col items-start w-full bg-white border border-neutral-200 hover:border-neutral-300 p-8 transition-all duration-300"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`absolute right-4 top-4 text-xs text-white ${project.statusColor} px-3 py-1 rounded-full uppercase tracking-wider font-medium`}
            >
              {project.status}
            </motion.span>

            <h3 className="font-ubuntu text-neutral-900 text-xl sm:text-2xl font-bold mb-4 pr-24 tracking-tight">
              {project.title}
            </h3>

            <p className="text-neutral-600 text-base sm:text-lg mb-5 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <span className="font-ubuntu text-neutral-700 text-sm font-semibold block mb-2 uppercase tracking-wider">
                Current Phase
              </span>
              <span className="text-sm text-neutral-600 bg-neutral-50 border border-neutral-200 px-3 py-1.5">
                {project.phase}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs bg-neutral-900 text-white px-3 py-1.5 font-medium tracking-wide"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            {(project.link || project.github) && (
              <div className="mt-4 pt-4 border-t border-neutral-200 flex gap-4">
                {project.link && (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 font-medium hover:text-neutral-600 transition-colors underline"
                  >
                    View Project →
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors underline"
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            )}
          </motion.article>
        ))}
        
        {/* Placeholder for adding more projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative flex flex-col items-center justify-center min-h-[300px] w-full bg-neutral-50 border-2 border-dashed border-neutral-200 p-8"
        >
          <p className="font-ubuntu text-neutral-900 text-xl font-bold text-center mb-2 tracking-tight">
            More projects on the way!
          </p>
          <p className="text-neutral-600 text-base text-center">
            Check back soon for exciting new work
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
