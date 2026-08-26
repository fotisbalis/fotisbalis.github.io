import { ArrowUpRight, Download, Globe } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.featured ? 'is-featured' : ''} reveal`} style={{ '--delay': `${Math.min(index * 65, 260)}ms` }}>
      <div className="project-topline"><span>{project.number}</span><span>{project.topRightLabel}</span></div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.detail && <p className="project-detail">{project.detail}</p>}
      </div>
      <div className="project-footer">
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-actions">
          {project.releases && (
            <a className="project-link project-release" href={project.releases} target="_blank" rel="noreferrer" aria-label={`View ${project.name} releases on GitHub`}>
              <Download size={16} /><span>Install</span><ArrowUpRight size={15} />
            </a>
          )}
          {project.website && (
            <a className="project-link" href={project.website} target="_blank" rel="noreferrer" aria-label={`Visit the ${project.name} website`}>
              <Globe size={16} /><span>{project.websiteLabel || 'Website'}</span><ArrowUpRight size={15} />
            </a>
          )}
          <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
            <GitHubIcon size={17} /><span>Source</span><ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
