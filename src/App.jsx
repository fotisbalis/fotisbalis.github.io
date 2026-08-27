import { useEffect, useState } from 'react';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#121619' : '#f6f7f8');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let scrollDirection = 0;

    const trackScrollDirection = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = Math.sign(currentScrollY - previousScrollY);
      previousScrollY = currentScrollY;
    };

    const revealWithoutAnimation = (element) => {
      element.classList.add('no-reveal-transition', 'is-visible');
      requestAnimationFrame(() => element.classList.remove('no-reveal-transition'));
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scrollDirection < 0) revealWithoutAnimation(entry.target);
          else entry.target.classList.add('is-visible');
          return;
        }

        const leftAboveViewport = entry.boundingClientRect.top < 0;
        const leftBelowViewport = entry.boundingClientRect.top > 0;
        const shouldReset = (scrollDirection > 0 && leftAboveViewport)
          || (scrollDirection < 0 && leftBelowViewport);

        if (shouldReset) entry.target.classList.remove('is-visible');
      }),
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));
    window.addEventListener('scroll', trackScrollDirection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', trackScrollDirection);
    };
  }, []);

  return <><Navbar theme={theme} toggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} /><main><Hero /><Experience /><Projects /></main><Footer /></>;
}
