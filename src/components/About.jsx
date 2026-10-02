import { focusAreas } from '../data/site';

export default function About() {
  return (
    <section id="about" className="section container split reveal">
      <div>
        <p className="section-label">01 / ABOUT</p>
        <h2>
          Turning ideas into
          <br />
          <em>working products.</em>
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I’m a software engineer who builds AI-integrated web applications with Next.js, Node.js and LLM APIs — and
          ships them to production.
        </p>
        <p>
          My work sits where software engineering, AI and security meet. I take ideas from architecture and interface
          design through APIs, validation, testing and deployment, and I review my own code the way an auditor would.
        </p>
        <dl className="mini-grid">
          {focusAreas.map((area) => (
            <div key={area.label}>
              <dt>{area.label}</dt>
              <dd>{area.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
