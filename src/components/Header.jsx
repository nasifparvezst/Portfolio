import React, { useEffect, useState } from 'react';
import Icon from './Icons.jsx';
import { navItems, profile } from '../data/site.js';

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: '-35% 0px -55% 0px' });
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    const handleEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handleEscape);
    return () => { document.body.classList.remove('nav-open'); window.removeEventListener('keydown', handleEscape); };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-shell">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Nasif Parvez - back to home">
          <span className="brand-mark">NP</span>
          <span className="brand-name">Nasif Parvez</span>
        </a>
        <nav className={`primary-nav${open ? ' is-open' : ''}`} id="mainNav" aria-label="Main navigation">
          {navItems.map(({ id, label }) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="mobile-nav-contact" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Let’s connect <Icon name="arrowUpRight" size={16}/></a>
        </nav>
        <div className="nav-actions">
          <button className="theme-switch" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onToggleTheme}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19}/>
          </button>
          <a className="nav-cta" href="#contact">Let's talk <Icon name="arrowUpRight" size={16}/></a>
          <button type="button" className="nav-menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mainNav" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            <Icon name={open ? 'close' : 'menu'} size={22}/>
          </button>
        </div>
      </div>
    </header>
  );
}
