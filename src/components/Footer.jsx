import { socialLinks } from '../data/portfolio';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export function Footer() {
  return <footer className="footer container"><span>Fotis Balis © 2026</span><div><a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={18} /></a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a><a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a></div></footer>;
}
