import { skillGroups } from '../data/site';

export default function Skills() {
  return (
    <section className="section skills-section reveal">
      <div className="container">
        <p className="section-label">04 / TOOLKIT</p>
        <div className="skills-columns">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
