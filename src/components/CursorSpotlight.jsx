import React, { useEffect, useRef } from 'react';

// A subtle ambient highlight; the real pointer remains untouched.
export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!spotlight || !finePointer.matches || reducedMotion.matches) return undefined;

    let frame = 0;
    let lastX = -1000;
    let lastY = -1000;
    const paint = () => {
      spotlight.style.setProperty('--pointer-x', `${lastX}px`);
      spotlight.style.setProperty('--pointer-y', `${lastY}px`);
      frame = 0;
    };
    const onMove = (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      lastX = event.clientX;
      lastY = event.clientY;
      spotlight.classList.add('is-active');
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const onExit = () => spotlight.classList.remove('is-active');
    document.addEventListener('pointermove', onMove, { passive: true });
    const onPointerOut = (event) => {
      if (!event.relatedTarget) onExit();
    };
    document.addEventListener('pointerout', onPointerOut);
    window.addEventListener('blur', onExit);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('blur', onExit);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />;
}
