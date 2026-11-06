import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const previousActive = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const focusable = Array.from(modalRef.current?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') || []);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousActive?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-dialog" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description">
        <div className="modal-topline"><span className="pill pill-accent">{project.type}</span><button ref={closeRef} className="icon-button modal-close" aria-label="Close project details" type="button" onClick={onClose}><Icon name="close" size={21}/></button></div>
        <div className="modal-body">
          <p className="eyebrow">QA Case Study / {project.index}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="modal-lead" id="project-dialog-description">{project.summary}</p>
          <div className="modal-grid">
            <section>
              <h3>What I practiced</h3>
              <ul className="detail-list">{project.steps.map(item => <li key={item}><Icon name="check" size={16}/><span>{item}</span></li>)}</ul>
            </section>
            <section>
              <h3>Key takeaways</h3>
              <ul className="detail-list">{project.takeaways.map(item => <li key={item}><Icon name="check" size={16}/><span>{item}</span></li>)}</ul>
            </section>
          </div>
          <div className="transparency-note"><Icon name="shield" size={20}/><p>{project.note}</p></div>
          <div className="modal-bottom">
            {project.documentationUrl ? <a className="btn btn-primary" href={project.documentationUrl} target="_blank" rel="noreferrer">View documentation <Icon name="arrowUpRight" size={18}/></a> : <span className="document-note"><Icon name="file" size={17}/> Supporting documents can be added when published.</span>}
            <button className="btn btn-secondary" type="button" onClick={onClose}>Close details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
