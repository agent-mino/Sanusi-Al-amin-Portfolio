// components/Skills.js
import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'Tailwind',
  'JavaScript/TypeScript',
  'Node.js',
  'Python',
  'Java',
  'Solidity',
  'Foundry',
  'Docker',
  'Git',
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="pt-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold text-white">Skills</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((s) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="px-3 py-1 bg-gradient-to-tr from-accentBlue/10 to-accentPurple/10 rounded-full text-sm text-gray-200 border border-white/10"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}
