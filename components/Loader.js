// components/Loader.js
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => {
      // signal parent to hide loader
      onDone()
    }, 1800) // duration of loader (1.8s)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className="loader-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          className="pulse-dot"
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-gray-300 text-sm"
        >
          Al-Amin will be with you shortly…
        </motion.p>
      </motion.div>
    </div>
  )
}
