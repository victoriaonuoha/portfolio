// src/components/ui/ProjectCard.jsx

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <div className="flex gap-2 flex-wrap justify-center mb-4">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="px-4 py-2 rounded-full border border-white"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}