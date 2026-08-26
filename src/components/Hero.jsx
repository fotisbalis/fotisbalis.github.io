import { Mail } from 'lucide-react';
import { hero, socialLinks } from '../data/portfolio';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export function Hero() {
  return (
    <section id="about" className="hero container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow reveal">{hero.title}</p>
        <h1 id="hero-title" className="reveal">{hero.name}</h1>
        <p className="hero-intro reveal">{hero.intro}</p>
        <a className="hero-email reveal" href={`mailto:${socialLinks.email}`}><Mail size={17} />{socialLinks.email}</a>
        <div className="hero-actions reveal">
          <a className="button button-secondary" href={socialLinks.github} target="_blank" rel="noreferrer"><GitHubIcon size={17} /> GitHub</a>
          <a className="button button-secondary button-social" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={17} /> LinkedIn</a>
          <a className="button button-secondary button-social" href={socialLinks.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={17} /> Instagram</a>
        </div>
      </div>
    </section>
  );
}
