// components/ProjectCard.js
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl p-5 bg-[#111827]/60 backdrop-blur-sm border border-white/10 hover:border-accentBlue/40 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 25px rgba(91,140,255,0.25), 0 0 10px rgba(166,108,255,0.2)',
      }}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Title & Tagline */}
        <div>
          <h4 className="text-lg font-semibold text-white group-hover:text-accentBlue transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-accentPurple mt-1">{project.tagline}</p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-[2px] bg-white/10 text-gray-300 text-xs rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
