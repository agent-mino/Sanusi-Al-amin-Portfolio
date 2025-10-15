// components/Contact.js
import { motion } from 'framer-motion'

const MailIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const GitHubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.935 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.632-5.48 5.927.43.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.849-3.036-1.851 0-2.134 1.446-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.27 2.37 4.27 5.456v6.284zM5.337 7.433a2.062 2.062 0 11.001-4.123 2.062 2.062 0 01-.001 4.123zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
)

const XIcon = (props) => (
    <svg {...props} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0zm50.91 179.41a12 12 0 01-16.97 1.97L128 151.51l-33.94 29.87a12 12 0 01-16.97-1.97 12 12 0 011.97-16.97L111.03 128l-33.94-29.87a12 12 0 01-1.97-16.97 12 12 0 0116.97-1.97L128 104.49l33.94-29.87a12 12 0 0116.97 1.97 12 12 0 01-1.97 16.97L144.97 128l33.94 29.87a12 12 0 011.97 16.97z"
        fill="currentColor"
      />
    </svg>
  );  
  

export default function Contact() {
  const iconWrapper = 'relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform'
  const halo = 'absolute inset-0 rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple opacity-0 group-hover:opacity-30 blur-xl transition-opacity'

  return (
    <motion.section
      className="group block rounded-2xl p-10 bg-[#111827]/60 backdrop-blur-sm border border-white/10 hover:border-accentBlue/40 transition-colors"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
      <p className="text-gray-400 mb-6">
        I’m available for frontend, backend, and security-focused roles. Reach me via:
      </p>
      <div className="flex gap-6">
        {[{
          href: 'mailto:alaminsanusi13@gmail.com',
          Icon: MailIcon,
        },{
          href: 'https://x.com/agent_mino01',
          Icon: XIcon,
        },{
          href: 'https://github.com/agent-mino',
          Icon: GitHubIcon,
        },{
          href: 'https://www.linkedin.com/in/alamin-sanusi-1245392b7/',
          Icon: LinkedInIcon,
        }].map(({ href, Icon }, i) => (
          <motion.a
            key={i}
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel="noreferrer"
            className={iconWrapper + ' group'}
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={halo}></div>
            <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"/>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
