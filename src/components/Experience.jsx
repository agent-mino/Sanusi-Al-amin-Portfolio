import { experience } from '../data/site';

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <p className="section-label">02 / EXPERIENCE</p>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="experience reveal">
              <div className="exp-meta">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
              <div>
                <h3>
                  {job.role} {job.team && <small>{job.team}</small>}
                </h3>
                <p className="company">{job.company}</p>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
