import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">Technical Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group reveal" style={{ '--delay': `${index * 80}ms` }} key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
