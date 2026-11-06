import React, { useState } from 'react';
import Icon from './Icons.jsx';
import { profile } from '../data/site.js';

const initial = { name: '', email: '', subject: '', message: '', website: '' };

export default function ContactForm() {
  const [fields, setFields] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const update = (event) => {
    setFields(current => ({ ...current, [event.target.name]: event.target.value }));
    if (status !== 'submitting') { setStatus('idle'); setFeedback(''); }
  };
  const mailto = () => {
    const body = `From: ${fields.name} (${fields.email})\n\n${fields.message}`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject || 'Portfolio inquiry')}&body=${encodeURIComponent(body)}`;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (fields.website) return; // Honeypot; suppress automated spam submissions.
    setStatus('submitting'); setFeedback('');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: fields.name.trim(), email: fields.email.trim(), _subject: fields.subject.trim() || 'Portfolio inquiry', message: fields.message.trim(), _captcha: 'true' }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false || data.success === 'false') throw new Error('Delivery not confirmed');
      setStatus('success');
      setFeedback('Thank you! Your message was submitted. I will get back to you as soon as I can.');
      setFields(initial);
    } catch {
      setStatus('error');
      setFeedback('The form could not confirm delivery. Please send your message using the email option below.');
    } finally { clearTimeout(timeout); }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Full name <input name="name" value={fields.name} onChange={update} required maxLength={100} autoComplete="name" placeholder="Your name" /></label>
        <label>Email address <input type="email" name="email" value={fields.email} onChange={update} required maxLength={150} autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <label>Subject <input name="subject" value={fields.subject} onChange={update} maxLength={160} placeholder="Internship opportunity / Let's connect" /></label>
      <label>Message <textarea name="message" value={fields.message} onChange={update} required minLength={10} maxLength={3000} rows={5} placeholder="Tell me a little about what you have in mind..." /></label>
      <div aria-hidden="true" className="honeypot"><label>Leave this empty <input tabIndex={-1} autoComplete="off" name="website" value={fields.website} onChange={update} /></label></div>
      <div className="form-action-row">
        <button className="btn btn-primary" disabled={status === 'submitting'} type="submit">{status === 'submitting' ? 'Sending...' : 'Send message'} <Icon name="send" size={17}/></button>
        <span className="form-hint">Or use <a href={mailto()}>your email app <Icon name="arrowUpRight" size={13}/></a></span>
      </div>
      {feedback && <p role="status" className={`form-feedback ${status}`}>{feedback}{status === 'error' && <a href={mailto()}> Open email app <Icon name="arrowUpRight" size={15}/></a>}</p>}
    </form>
  );
}
