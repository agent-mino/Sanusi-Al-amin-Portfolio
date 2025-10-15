// components/Header.js
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [active, setActive] = useState('hero')

  // track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      )
      const scrollY = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        if (section && section.offsetTop <= scrollY && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Sanusi Al-Amin Olasubomi</h2>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-colors ${
                active === link.id ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute left-0 -bottom-1 h-[2px] w-full rounded bg-gradient-to-r from-accentBlue to-accentPurple"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
