import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Experience from './components/Experience';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
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
    </>
  );
}
