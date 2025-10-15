// components/About.js
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="pt-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold bg-gradient-to-r from-accentBlue to-accentPurple bg-clip-text text-transparent">
        About Me
      </h3>
      <p className="mt-3 text-gray-300 leading-relaxed max-w-3xl">
        I’m <span className="text-white font-medium">Sanusi Al-Amin</span>, a
        cybersecurity specialist and full-stack developer with a strong Web2
        background and growing expertise in Web3 smart contract auditing.
        Passionate about building secure, scalable, and intuitive digital
        experiences, I blend modern frontend technologies with backend logic
        and blockchain integrations.
      </p>

      <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
        I’ve worked with tools across the stack — from
        <span className="text-gray-200"> React, Next.js, and Tailwind</span> on
        the frontend to <span className="text-gray-200">Node.js, Python, and
        Java</span> on the backend. My focus is on writing clean, efficient
        code that balances performance with strong security principles.
      </p>

      <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
        Beyond coding, I enjoy researching security vulnerabilities, exploring
        blockchain protocols, and sharing knowledge with others who want to
        understand how technology — and its risks — really work.
      </p>
    </motion.section>
  )
}
