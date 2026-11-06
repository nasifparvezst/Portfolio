import React, { useEffect, useRef, useState } from 'react';

// Runs once when visible, with a static accessible value for screen readers.
export default function AnimatedCount({ value, digits = 2 }) {
  const elementRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    const finalValue = Number(value);
    if (!element || !Number.isFinite(finalValue)) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setDisplayValue(finalValue);
      return undefined;
    }

    let frame = 0;
    let started = false;
    const animate = () => {
      let startTime;
      const duration = 1100;
      const tick = (timestamp) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(finalValue * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      if (!started && entries.some(entry => entry.isIntersecting)) {
        started = true;
        animate();
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  const format = (number) => String(number).padStart(digits, '0');
  return <span className="animated-count" ref={elementRef}>
    <span className="sr-only">{format(value)}</span>
    <span aria-hidden="true">{format(displayValue)}</span>
  </span>;
}
