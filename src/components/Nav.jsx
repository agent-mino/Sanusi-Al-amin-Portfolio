import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Primary">
        <a className="brand" href="#main" aria-label={`${profile.name} — home`}>
          AS<span>.</span>
        </a>
        <div id="nav-links" className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={profile.cvUrl} download onClick={() => setOpen(false)}>
            Résumé ↓
          </a>
        </div>
        <div className="nav-actions">
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Let’s talk ↗
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
    </header>
  );
}
