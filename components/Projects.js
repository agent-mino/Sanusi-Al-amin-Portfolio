// components/Projects.js
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'brightworld',
    title: 'BrightWorld',
    tagline: 'Lighting design marketplace',
    description:
      'A platform for designers to showcase and sell lighting designs. Built responsive UI, product listings, and secure checkout flows.',
    tech: ['React', 'Next.js', 'Tailwind', 'Node.js', 'MongoDB'],
    link: 'https://bright-world.vercel.app/',
  },
  {
    id: 'currensee',
    title: 'CurrenSee',
    tagline: 'Currency conversion platform',
    description:
      'Real-time currency conversions Mobile app backed by reliable API integrations and persistent storage for recent rates.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL', 'CurrencyLayer'],
    link: '#',
  },
  {
    id: 'dsce',
    title: 'DSCEngine',
    tagline: 'Decentralized stablecoin simulation',
    description:
      'Solidity contracts implementing minting and liquidation logic; unit-tested with Foundry and mock Chainlink feeds.',
    tech: ['Solidity', 'Foundry', 'Chainlink'],
    link: '#',
  },
  {
    id: 'raffle',
    title: 'Raffle Smart Contract',
    tagline: 'On-chain random draw system',
    description:
      'Provably fair raffle using Chainlink VRF for randomness; full test coverage with Foundry/Hardhat.',
    tech: ['Solidity', 'Foundry', 'Chainlink VRF', 'Hardhat'],
    link: 'https://github.com/agent-mino',
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="pt-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold text-white">Projects</h3>
      <p className="mt-2 text-gray-400">
        Check Out Some of My Projects
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
