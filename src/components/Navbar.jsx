import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
];

export function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#about" onClick={() => setOpen(false)}>Fotis Balis<span>.</span></a>
        <div className={`nav-menu ${open ? 'is-open' : ''}`} id="primary-navigation">
          <div className="nav-links">
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  );
}
