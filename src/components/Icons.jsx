import React from 'react';

const paths = {
  arrow: <><path d="M4.5 12h15"/><path d="m13 5.5 6.5 6.5-6.5 6.5"/></>,
  arrowUpRight: <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
  arrowUp: <><path d="m6 14 6-6 6 6"/><path d="M12 8v12"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  code: <><path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/><path d="m14 4-4 16"/></>,
  download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 17v3h16v-3"/></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></>,
  facebook: <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8h3.7z" fill="currentColor" stroke="none"/>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18.8a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z"/>,
  github: <><path d="M9 19c-4.5 1.5-4.5-2.5-6-3"/><path d="M9 22v-4a4 4 0 0 1-2.3-.6C3 15 4 9 6 7c0-2 0-3 1-4 2 0 3 1 4 1h2c1 0 2-1 4-1 1 1 1 2 1 4 3 3 2.7 9 .3 10.4A4 4 0 0 1 16 18v4"/></>,
  linkedin: <><rect x="3" y="9" width="4" height="12"/><path d="M5 3v.5"/><path d="M11 21V9h4v2a4 4 0 0 1 4-2c2 0 3 1.5 3 4v8h-4v-7c0-1.3-.5-2-1.7-2-1.3 0-2.3 1-2.3 2.5V21"/></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 7 9-7"/></>,
  map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z"/>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  shield: <><path d="M12 2 21 6v6c0 5-3.5 8-9 10-5.5-2-9-5-9-10V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v7c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12v7c0 1.7 4 3 9 3s9-1.3 9-3v-7"/></>,
  terminal: <><rect x="2.5" y="3.5" width="19" height="17" rx="2"/><path d="m7 9 3 3-3 3M12 15h5"/></>,
  sparkles: <><path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5Z"/><path d="m20 16 .8 2.2L23 19l-2.2.8L20 22l-.8-2.2L17 19l2.2-.8Z"/></>,
  external: <><path d="M12 4h8v8M20 4l-9 9"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></>,
  send: <><path d="m22 2-7.8 20-4.1-8.1L2 9.8 22 2Z"/><path d="m10.1 13.9 5-5"/></>,
  close: <path d="M5 5 19 19M19 5 5 19"/>,
  copy: <><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v6c3 3 9 3 12 0v-6M22 9v7"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 0 0 18M12 3a16 16 0 0 1 0 18"/></>,
};

export default function Icon({ name, size = 19, className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.arrow}
    </svg>
  );
}
