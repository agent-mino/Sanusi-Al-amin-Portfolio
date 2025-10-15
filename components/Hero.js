// components/Hero.js
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between gap-10 pt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0 perspective"
      >
        {/* glowing depth halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple blur-3xl opacity-25" />
        {/* animated avatar wrapper */}
        <motion.div
          whileInView={{ rotateY: [0, 15, -12, 0], y: [0, -6, 0] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative z-10 rounded-full overflow-hidden"
        >
          <Image
            src="/avatar.svg"
            alt="Sanusi Al-Amin avatar"
            width={240}
            height={240}
            className="rounded-full border-[2px] border-transparent"
          />
          {/* shimmer light sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
            whileInView={{ opacity: [0, 1, 0], x: ['-120%', '120%'] }}
            transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Hi, I’m Al-Amin</h1>
        <p className="mt-3 text-lg text-gray-300">
          Cybersecurity specialist, Web3 enthusiast, and full-stack developer focused on
          building secure and modern web experiences.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="mailto:alaminsanusi13@gmail.com"
            className="px-4 py-2 border border-accentBlue rounded-md hover:bg-accentBlue/10 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/agent-mino"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md bg-accentBlue text-white hover:opacity-90 transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
