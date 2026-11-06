import React from 'react';
import Icon from './Icons.jsx';
import { navItems, profile } from '../data/site.js';

export default function Footer() {
  const phoneHref = profile.phone ? `tel:${profile.phone.replace(/[^+\d]/g, '')}` : null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#home">Nasif Parvez<span>.</span></a>
            <p>Aspiring Software Quality Assurance Engineer, focused on clear testing, practical learning and better software experiences.</p>
          </div>
          <div className="footer-links-group">
            <h3>Quick links</h3>
            <div className="footer-nav">
              {navItems.filter(({ id }) => id !== 'education').map(({ id, label }) => (
                <a key={id} href={`#${id}`}>{label}</a>
              ))}
            </div>
          </div>
          <div className="footer-connect">
            <h3>Connect</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.phone && <a className="footer-phone" href={phoneHref}><Icon name="phone" size={15}/>{profile.phone}</a>}
            <div className="footer-socials">
              <a href={profile.facebook} aria-label="Facebook" title="Facebook" target="_blank" rel="noreferrer"><Icon name="facebook"/></a>
              <a href={profile.github} aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer"><Icon name="github"/></a>
              <a href={profile.linkedin} aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin"/></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Icon name="mail"/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nasif Parvez. All rights reserved.</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
