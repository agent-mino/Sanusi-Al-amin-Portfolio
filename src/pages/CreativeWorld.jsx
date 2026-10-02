import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function CreativeWorld() {
  return (
    <motion.div
      className="world"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="noise" aria-hidden="true" />

      {/* ── Hero ── */}
      <section className="world-hero" aria-label="mino">
        <motion.div
          className="world-hero__wordmark-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src="/mino/chrome-wordmark.png"
            alt="mino"
            className="world-hero__wordmark"
            draggable="false"
          />
        </motion.div>

        <motion.p
          className="world-hero__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Brand. Design. Direction.
        </motion.p>

        <motion.a
          href="#brand"
          className="world-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          aria-label="Scroll to brand"
        >
          ↓
        </motion.a>
      </section>

      {/* ── Identity ── */}
      <section className="world-identity" id="brand" aria-labelledby="brand-heading">
        <div className="world-container">
          <motion.div
            className="world-identity__layout"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div className="world-identity__text" variants={reveal} custom={0}>
              <p className="world-label">THE BRAND</p>
              <h2 id="brand-heading" className="world-heading">
                MINOSWRLD<br />is a statement.
              </h2>
              <p className="world-body">
                Born in Lagos — 6.5244° N, 3.3792° E — built for everywhere else.
                MINOSWRLD is a clothing brand, a creative practice, and a point of view.
                Every piece is a document. Every design, a decision.
              </p>
              <p className="world-body">
                First collection: Find North. The compass is a reference — for those
                who move with intention, not drift.
              </p>
            </motion.div>

            <motion.div className="world-identity__image-wrap" variants={reveal} custom={1}>
              <img
                src="/mino/origin.png"
                alt="6.5244° N, 3.3792° E — Lagos"
                className="world-identity__origin"
                draggable="false"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Collection ── */}
      <section className="world-collection" aria-labelledby="collection-heading">
        <div className="world-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p className="world-label" variants={reveal} custom={0}>COLLECTION 01</motion.p>
            <motion.h2 id="collection-heading" className="world-heading" variants={reveal} custom={0.5}>
              Find North.
            </motion.h2>
          </motion.div>

          <motion.div
            className="world-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            <motion.div className="world-grid__item world-grid__item--tall" variants={reveal} custom={0}>
              <img src="/mino/brand-sheet.png" alt="MINOSWRLD Collection — tees and apparel" draggable="false" />
            </motion.div>
            <motion.div className="world-grid__item" variants={reveal} custom={0.15}>
              <img src="/mino/polo.png" alt="MINOSWRLD Polo — Find North" draggable="false" />
            </motion.div>
            <motion.div className="world-grid__item" variants={reveal} custom={0.3}>
              <img src="/mino/collection.png" alt="MINOSWRLD full collection" draggable="false" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What I do ── */}
      <section className="world-craft" aria-labelledby="craft-heading">
        <div className="world-container">
          <motion.div
            className="world-craft__layout"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="world-label" variants={reveal} custom={0}>CREATIVE PRACTICE</motion.p>
            <motion.h2 id="craft-heading" className="world-heading" variants={reveal} custom={0.2}>
              The work.
            </motion.h2>
            <motion.div className="world-craft__grid" variants={reveal} custom={0.4}>
              {[
                { label: 'Clothing Brand', desc: 'Concept to garment — MINOSWRLD Collection 01 live.' },
                { label: 'Digital Design', desc: 'Brand systems, visual identity, digital assets.' },
                { label: 'Photography', desc: 'Editorial and product photography.' },
                { label: 'Creative Direction', desc: 'Concept, visual language, and execution.' },
              ].map(({ label, desc }) => (
                <div className="world-craft__item" key={label}>
                  <p className="world-craft__item-label">{label}</p>
                  <p className="world-craft__item-desc">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Crossover ── */}
      <section className="world-crossover" aria-label="Technical world link">
        <div className="world-container">
          <motion.div
            className="world-crossover__inner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="world-label">THE OTHER SIDE</p>
            <p className="world-crossover__line">
              Also a software engineer.
            </p>
            <Link to="/dev" className="world-crossover__link">
              Enter the technical world →
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="world-footer">
        <div className="world-container">
          <span className="world-footer__brand">MINOSWRLD</span>
          <span className="world-footer__copy">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </motion.div>
  );
}
