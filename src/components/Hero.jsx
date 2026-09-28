import { hero, socialLinks } from '../data/portfolio';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export function Hero() {
  return (
    <section id="about" className="hero container" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title" className="reveal">{hero.name}</h1>
        <p className="hero-intro reveal">{hero.role}<span className="intro-separator" aria-hidden="true">·</span>{hero.education}</p>
        <p className="hero-description reveal">{hero.focus_areas}</p>
        <div className="hero-email reveal">Contact me at <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a></div>
        <div className="hero-actions reveal">
          <a className="button button-secondary" href={socialLinks.github} target="_blank" rel="noreferrer"><GitHubIcon size={17} /> GitHub</a>
          <a className="button button-secondary" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={17} /> LinkedIn</a>
          <a className="button button-secondary" href={socialLinks.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={17} /> Instagram</a>
        </div>
      </div>
    </section>
  );
}
