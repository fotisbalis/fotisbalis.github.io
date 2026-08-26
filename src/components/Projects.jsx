import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="section projects-section container" aria-labelledby="projects-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected projects</p>
        <h2 id="projects-title">Personal and Academic Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
      </div>
    </section>
  );
}
