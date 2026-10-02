import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Experience from '../components/Experience';
import ProjectShowcase from '../components/ProjectShowcase';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useReveal from '../hooks/useReveal';

export default function DevWorld() {
  useReveal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <section id="projects" className="section container reveal" aria-labelledby="projects-label">
          <p id="projects-label" className="section-label">03 / SELECTED WORK</p>
          <ProjectShowcase />
        </section>
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />

      <Link to="/world" className="world-switcher" aria-label="Enter creative world">
        <span className="world-switcher__label">creative</span>
        <span className="world-switcher__name">mino</span>
      </Link>
    </motion.div>
  );
}
