import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import ContactForm from './components/ContactForm.jsx';
import Icon from './components/Icons.jsx';
import AnimatedCount from './components/AnimatedCount.jsx';
import CursorSpotlight from './components/CursorSpotlight.jsx';
import { profile, manualSkills, apiSkills, technicalSkills, qaProjects, technicalProjects, journey, education } from './data/site.js';

function readInitialTheme() {
  try {
    const saved = localStorage.getItem('nasif-portfolio-theme') || localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch { /* Storage disabled; use system preference. */ }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function SkillPills({ items }) { return <div className="skill-pill-list">{items.map(item => <span key={item} className="skill-pill">{item}</span>)}</div>; }

function StatusIcon({ state }) { return <span className={`status-mark ${state}`}><Icon name={state === 'completed' ? 'check' : 'arrow'} size={18}/></span>; }

function AnimatedName() {
  const fullName = profile.name;
  const [typedName, setTypedName] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? fullName : ''
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setTypedName(fullName);
      return;
    }

    let timer;
    let position = 0;
    const typeNext = () => {
      if (position < fullName.length) {
        position += 1;
        setTypedName(fullName.slice(0, position));
        timer = window.setTimeout(typeNext, 105);
      } else {
        // Keep the complete name visible for 3 seconds, as on the original website.
        timer = window.setTimeout(() => {
          setTypedName('');
          position = 0;
          timer = window.setTimeout(typeNext, 300);
        }, 3000);
      }
    };
    timer = window.setTimeout(typeNext, 350);
    return () => window.clearTimeout(timer);
  }, [fullName]);

  return (
    <h1 id="hero-title" className="hero-name" aria-label={fullName}>
      <span className="typed-name" aria-hidden="true">{typedName}</span>
      <span className="type-caret" aria-hidden="true" />
    </h1>
  );
}

function Hero() {
  const [imageError, setImageError] = useState(false);
  const onPortraitMove = (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`);
  };
  const onPortraitLeave = (event) => {
    event.currentTarget.style.removeProperty('--tilt-x');
    event.currentTarget.style.removeProperty('--tilt-y');
  };
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-ambient hero-ambient-a"/><div className="hero-ambient hero-ambient-b"/>
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-hello">Hi, I'm</p>
          <AnimatedName />
          <h2 className="hero-subtitle">Aspiring Software Quality Assurance Engineer</h2>
          <p className="hero-description">I am a final-year Computer Science and Engineering student focused on building practical QA skills through manual testing, API testing, SQL queries, test design and bug reporting. I have recently started learning automation testing.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects <Icon name="arrowUpRight" size={18}/></a>
            <a href="#contact" className="btn btn-secondary">Contact Me <Icon name="arrow" size={18}/></a>
          </div>
          <div className="resume-action">{profile.resumeUrl ? <a href={profile.resumeUrl} download><Icon name="download" size={17}/> Download CV</a> : <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Request for CV')}`}><Icon name="file" size={17}/> Request my CV <Icon name="arrowUpRight" size={13}/></a>}</div>
          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={18}/> GitHub <Icon name="arrowUpRight" size={13}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18}/> LinkedIn <Icon name="arrowUpRight" size={13}/></a>
            <a href={profile.facebook} target="_blank" rel="noreferrer"><Icon name="facebook" size={18}/> Facebook <Icon name="arrowUpRight" size={13}/></a>
            {profile.phone && <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}><Icon name="phone" size={17}/> Call <Icon name="arrowUpRight" size={13}/></a>}
          </div>
          <div className="hero-metrics">
            <div><strong>Manual + API</strong><span>QA fundamentals completed</span></div>
            <div><strong><AnimatedCount value={qaProjects.length}/></strong><span>Featured practice QA project</span></div>
            <div><strong>Dhaka</strong><span>Bangladesh</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-orbit portrait-orbit-one" aria-hidden="true"/>
          <div className="portrait-orbit portrait-orbit-two" aria-hidden="true"/>
          <div className="portrait-glow" aria-hidden="true"/>
          <div className="portrait-card" onPointerMove={onPortraitMove} onPointerLeave={onPortraitLeave}>
            <div className="portrait-image">
              {!imageError ? <img src={profile.photoUrl} alt="Nasif Parvez" onError={() => setImageError(true)} /> : <div className="portrait-fallback" role="img" aria-label="Nasif Parvez initials">NP</div>}
            </div>
            <div className="portrait-caption">
              <span className="portrait-identity"><span className="portrait-avatar">NP</span><span><strong>Nasif Parvez</strong><small>SQA - Manual Testing - Quality Mindset</small></span></span>
              <span className="portrait-green-dot" title="Open to opportunities"/>
            </div>
          </div>
          <div className="floating-note floating-note-top"><Icon name="check" size={19}/><span><strong>Manual Testing</strong><small>Hands-on practice</small></span></div>
          <div className="floating-note floating-note-bottom"><Icon name="globe" size={18}/><span><strong>API Testing</strong><small>Fundamentals completed</small></span></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-tinted" id="about">
      <div className="container about-layout">
        <div className="about-left">
          <SectionHeading eyebrow="About Me" title="Building a strong QA foundation through hands-on practice." description="My background and approach to learning software testing."/>
        </div>
        <div className="about-right">
          <p className="about-lead">I am a Computer Science and Engineering student at <strong>Southeast University, Dhaka,</strong> with a growing focus on Software Quality Assurance. I enjoy understanding how features are expected to work, exploring where they can fail, and documenting findings clearly.</p>
          <p>I have completed learning manual testing and API testing fundamentals. My skills include test scenario and case design, test execution, functional, smoke and regression testing, exploratory testing, retesting and bug reporting. I can also write SQL queries for database checks.</p>
          <p>I have just started learning automation testing. I am continuing to improve through practice and small projects while completing the final semester of my B.Sc.</p>
          <div className="about-highlights">
            <div><Icon name="shield" size={22}/><span><strong>Structured Testing</strong><small>Test scenarios, cases, execution and defect reporting</small></span></div>
            <div><Icon name="graduation" size={22}/><span><strong>Continuous Learning</strong><small>Automation beginner - B.Sc. ongoing - CGPA 3.66</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container"><SectionHeading eyebrow="Skills & Tools" title="My current QA toolkit and technical foundation." description="Core skills are separated from learning goals so the portfolio reflects my actual current level."/>
        <div className="skills-grid">
          <article className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Icon name="shield" size={25}/></span><span className="skill-level complete">Completed learning</span></div><span className="card-number">01 / QUALITY ASSURANCE</span><h3>Manual Testing</h3><p>Building reliable test coverage from requirements to defect reporting.</p><SkillPills items={manualSkills}/></article>
          <article className="skill-card"><div className="skill-card-top"><span className="skill-icon blue"><Icon name="globe" size={25}/></span><span className="skill-level complete">Completed learning</span></div><span className="card-number">02 / API QUALITY</span><h3>API Testing</h3><p>Checking how endpoints behave through requests, responses and validation.</p><SkillPills items={apiSkills}/></article>
          <article className="skill-card"><div className="skill-card-top"><span className="skill-icon violet"><Icon name="database" size={25}/></span><span className="skill-level knowledge">Working knowledge</span></div><span className="card-number">03 / TECHNICAL SKILLS</span><h3>SQL & Programming</h3><p>Query writing and programming fundamentals that support a QA mindset.</p><SkillPills items={technicalSkills}/></article>
          <article className="skill-card learning-card"><div className="skill-card-top"><span className="skill-icon amber"><Icon name="code" size={25}/></span><span className="skill-level in-progress">Currently learning</span></div><span className="card-number">04 / THE NEXT CHAPTER</span><h3>Automation Testing</h3><p>Just getting started with automation concepts, scripting and automated web testing. This is a learning goal—not a completed project.</p><div className="learning-callout"><span className="live-dot"/><span>Learning in progress</span></div></article>
        </div>
      </div>
    </section>
  );
}

function Projects({ onViewProject }) {
  const project = qaProjects[0];
  return (
    <section className="section section-tinted" id="projects">
      <div className="container"><div className="projects-heading-row"><SectionHeading eyebrow="Featured QA Projects" title="Practical work that demonstrates how I approach testing." description="A practice project from my QA learning journey, clearly identified as demo work."/><div className="projects-heading-mark" aria-hidden="true">01<span>/ QA CASE STUDY</span></div></div>
        <div className="feature-project"><div className="feature-visual"><div className="fake-browser"><div className="fake-browser-bar"><i/><i/><i/><span>Demo QA workflow</span></div><div className="fake-browser-content"><div className="fake-sidebar"><div className="faux-sidebar-icon"/><div/><div/><div/><div/></div><div className="fake-dashboard"><div className="fake-dash-title"><span>Example Testing Workflow</span><span className="faux-ok">Practice</span></div><div className="fake-dash-cards"><div><span>Test scenarios</span><b>Defined</b></div><div><span>Test cases</span><b>Prepared</b></div></div><div className="fake-test-row"><span>Functional checks</span><span className="fake-progress"><i/></span></div><div className="fake-test-row"><span>Bug reporting</span><span className="fake-progress"><i/></span></div><div className="fake-test-row"><span>Retesting</span><span className="fake-progress"><i/></span></div></div></div></div><span className="visual-overline">ILLUSTRATIVE QA WORKFLOW</span></div>
          <div className="feature-details"><div className="project-topline"><span className="pill pill-accent">{project.type}</span><span className="project-index">PROJECT / 01</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-outcomes"><div><Icon name="check" size={18}/> Scenario & case design</div><div><Icon name="check" size={18}/> Execution & reporting</div><div><Icon name="check" size={18}/> Smoke & regression concepts</div></div><button type="button" className="btn btn-primary" onClick={() => onViewProject(project)}>Explore case study <Icon name="arrowUpRight" size={18}/></button></div></div>
        <p className="project-transparency"><Icon name="shield" size={18}/><strong>Transparency note:</strong> This case study is self-directed practice on a demo application, not paid client work. Supporting documents will be linked when publicly available.</p>
        <div className="technical-heading">
          <div><h3>Academic & Technical Projects</h3><p>Coursework and personal builds exploring graphics, web applications and problem solving.</p></div>
          <span className="technical-count"><AnimatedCount value={technicalProjects.length}/> <span>projects</span></span>
        </div>
        <div className="technical-grid">{technicalProjects.map(p =>
          <article className="tech-card" key={p.title}>
            <div className="tech-card-header"><span>{p.index} / {p.category.toUpperCase()}</span><span className="tech-card-icon"><Icon name={p.icon || 'code'} size={24}/></span></div>
            <h4>{p.title}</h4><p>{p.summary}</p>
            <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            {p.sourceNote && <p className="project-source-note">{p.sourceNote}</p>}
            <div className="tech-card-footer">
              {p.sourceUrl ? <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="tech-source-link" aria-label={`${p.sourceLabel || 'View on GitHub'}: ${p.title}`}><Icon name="github" size={17}/> {p.sourceLabel || 'View on GitHub'} <Icon name="arrowUpRight" size={15}/></a> : <span className="tech-unpublished"><Icon name="file" size={15}/> Source not linked</span>}
            </div>
          </article>
        )}</div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    ['01','Understand','Review requirements, workflows and expected behavior.'],
    ['02','Design','Prepare scenarios, test cases and relevant test data.'],
    ['03','Execute','Run checks and compare actual versus expected results.'],
    ['04','Report','Describe issues with clear reproduction steps and context.'],
    ['05','Retest','Verify reported problems after a change or fix.'],
    ['06','Regress','Check connected workflows for unintended effects.'],
  ];
  return <section className="section workflow-section" id="workflow"><div className="container"><SectionHeading eyebrow="My QA Workflow" title="From understanding a feature to verifying the fix." description="A simple end-to-end workflow that keeps testing organized and repeatable."/><div className="workflow-grid">{steps.map(([number,title,description]) => <div className="workflow-card" key={number}><span className="workflow-number">{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>;
}

function Journey() {
  return <section className="section section-tinted" id="journey"><div className="container journey-layout"><div className="journey-intro"><SectionHeading eyebrow="Learning Roadmap" title="My current learning progress and next steps." description="Manual testing and API testing fundamentals are complete; I can write SQL queries and have just started automation testing."/><p className="journey-side-note">I am continuing with automation testing after completing manual and API testing fundamentals and learning SQL queries.</p></div><div className="journey-steps">{journey.map(item => <article className={`journey-item ${item.state}`} key={item.number}><div className="journey-track"><StatusIcon state={item.state}/></div><div className="journey-item-body"><div className="journey-item-top"><span>{item.number} / {item.label}</span>{item.state === 'current' && <span className="pill progress-pill">NOW LEARNING</span>}</div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>;
}

function Education() {
  return <section className="section" id="education"><div className="container"><SectionHeading eyebrow="Education" title="My academic background." description="My education and current academic standing."/><div className="education-grid">{education.map(item => <article className={`education-card${item.featured ? ' featured' : ''}`} key={item.name}><span className="education-period">{item.period}</span><span className="education-icon"><Icon name="graduation" size={22}/></span><h3>{item.name}</h3><p>{item.institution}</p>{item.detail && <span className="education-detail">{item.detail}</span>}<strong className="education-score">{item.score}</strong></article>)}</div></div></section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };
  return <section className="section section-tinted contact-section" id="contact"><div className="container"><div className="contact-heading"><SectionHeading eyebrow="Contact" title="Let's connect." description="I am open to SQA internships, junior QA opportunities and professional connections."/></div><div className="contact-grid"><div className="contact-left"><div className="contact-callout"><span className="contact-callout-icon"><Icon name="mail" size={27}/></span><h3>Have an opportunity or a question?</h3><p>I'd love to hear from you. The best way to reach me is by email{profile.phone ? ', phone' : ''} or through my social profiles.</p><div className="email-copy-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" aria-label={copied ? 'Email copied' : 'Copy email address'} title="Copy email" onClick={handleCopy}><Icon name={copied ? 'check' : 'copy'} size={18}/></button></div><span className="copy-feedback" role="status">{copied ? 'Email copied!' : '\u00a0'}</span>{profile.phone && <a className="contact-phone" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}><Icon name="phone" size={17}/>{profile.phone}</a>}</div><div className="contact-social-row"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={19}/> LinkedIn <Icon name="arrowUpRight" size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={19}/> GitHub <Icon name="arrowUpRight" size={16}/></a><a href={profile.facebook} target="_blank" rel="noreferrer"><Icon name="facebook" size={19}/> Facebook <Icon name="arrowUpRight" size={16}/></a></div></div><div className="contact-form-card"><div className="form-heading"><h3>Send a message</h3><p>Fill out the form, and I'll get back to you.</p></div><ContactForm/></div></div></div></section>;
}

export default function App() {
  const [theme, setTheme] = useState(readInitialTheme);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBackTop, setShowBackTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a1020' : '#f7f9fc');
    try { localStorage.setItem('nasif-portfolio-theme', theme); } catch { /* private mode */ }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage(max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0);
      setShowBackTop(window.scrollY > 550);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      'main .section-heading, .about-right > p, .about-highlights > div, .skill-card, .feature-project, .project-transparency, .technical-heading, .tech-card, .workflow-card, .journey-intro, .journey-item, .education-card, .contact-callout, .contact-social-row, .contact-form-card, .footer-upper > *'
    );
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      const siblingIndex = Array.prototype.indexOf.call(element.parentElement?.children || [], element);
      element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 4) * 75}ms`);
      if (reduceMotion) element.classList.add('is-revealed');
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(element => element.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -42px 0px' });

    revealTargets.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <CursorSpotlight/>
    <div className="reading-progress" style={{ width: `${scrollPercentage}%` }}/>
    <Header theme={theme} onToggleTheme={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}/>
    <main id="main"><Hero/><About/><Skills/><Projects onViewProject={setSelectedProject}/><Workflow/><Journey/><Education/><Contact/></main>
    <Footer/>
    <button type="button" aria-label="Back to top" title="Back to top" className={`back-to-top${showBackTop ? ' visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><Icon name="arrowUp" size={21}/></button>
    <ProjectModal project={selectedProject} onClose={closeProject}/>
  </>;
}
