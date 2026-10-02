import { profile } from '../data/site';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">SOFTWARE ENGINEER · FULL-STACK · AI · WEB3 SECURITY</p>
        <h1>
          Ship it.
          <br />
          <span>Then break it.</span>
        </h1>
        <p className="hero-text">
          I’m <strong>{profile.name}</strong>, a full-stack engineer building AI-powered products — with a security
          mindset sharpened by smart contract auditing.
        </p>
        <div className="hero-actions">
          <a className="button button-solid" href="#projects">
            View my work <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-ghost" href={profile.cvUrl} download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <div className="crosshair" />
        <div className="mark-text">
          AL-AMIN
          <br />
          SANUSI
        </div>
        <div className="orbit" />
      </div>
    </section>
  );
}
