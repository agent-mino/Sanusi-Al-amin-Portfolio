import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Threshold() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null); // 'dev' | 'world' | null

  return (
    <motion.div
      className="threshold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="noise" aria-hidden="true" />

      <button
        className={`threshold__side threshold__side--dev ${hovered === 'dev' ? 'is-focused' : ''} ${hovered === 'world' ? 'is-dimmed' : ''}`}
        onClick={() => navigate('/dev')}
        onMouseEnter={() => setHovered('dev')}
        onMouseLeave={() => setHovered(null)}
        aria-label="Enter technical world — Al-Amin Sanusi, Software Engineer"
      >
        <div className="threshold__content">
          <p className="threshold__eyebrow">SOFTWARE ENGINEER</p>
          <h1 className="threshold__name threshold__name--dev">
            <span>Al-Amin</span>
            <span>Sanusi</span>
          </h1>
          <p className="threshold__enter">enter ↗</p>
        </div>
        <div className="threshold__grid" aria-hidden="true" />
      </button>

      <div
        className={`threshold__divider ${hovered ? `threshold__divider--${hovered}` : ''}`}
        aria-hidden="true"
      />

      <button
        className={`threshold__side threshold__side--world ${hovered === 'world' ? 'is-focused' : ''} ${hovered === 'dev' ? 'is-dimmed' : ''}`}
        onClick={() => navigate('/world')}
        onMouseEnter={() => setHovered('world')}
        onMouseLeave={() => setHovered(null)}
        aria-label="Enter creative world — mino"
      >
        <div className="threshold__content">
          <p className="threshold__eyebrow threshold__eyebrow--world">CREATIVE DIRECTOR</p>
          <div className="threshold__wordmark-wrap">
            <img
              src="/mino/chrome-wordmark.png"
              alt="mino"
              className="threshold__wordmark"
              draggable="false"
            />
          </div>
          <p className="threshold__enter threshold__enter--world">enter ↗</p>
        </div>
      </button>
    </motion.div>
  );
}
