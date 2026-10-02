import { useEffect, useState } from 'react';
import { profile, socials } from '../data/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner reveal">
        <p className="section-label">06 / CONTACT</p>
        <h2>
          Have an idea?
          <br />
          <em>Let’s build it.</em>
        </h2>
        <p>I’m open to software engineering, full-stack and AI roles, collaborations and ambitious product ideas.</p>
        <div className="email-row">
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <button type="button" className="copy-button" onClick={copyEmail}>
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
          <span className="sr-only" role="status">
            {copied ? 'Email address copied' : ''}
          </span>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
          <a href={profile.cvUrl} download>
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
