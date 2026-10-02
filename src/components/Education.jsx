import { education } from '../data/site';

export default function Education() {
  return (
    <section className="section education container reveal">
      <div>
        <p className="section-label">05 / EDUCATION</p>
        <h2>
          {education.title}
          <br />
          <em>{education.emphasis}</em>
        </h2>
      </div>
      <div>
        <p className="edu-current">Now studying: {education.current}</p>
        <p className="edu-school">{education.school}</p>
        <p>{education.period}</p>
        <p className="muted">{education.detail}</p>
        <ul className="certs">
          {education.certs.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
