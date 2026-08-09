import React, { useEffect, useRef } from 'react';

/* Grain overlay + the scroll-filling spectrum rail that anchors the page. */
export const SpChrome = () => {
  const fillRef = useRef(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      el.style.height = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Hash links must go through Lenis. A native anchor jump moves the
  // document while Lenis keeps its own position, and the next rAF
  // tick snaps the page straight back.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <div className="sp-grain" aria-hidden="true" />
      <div className="sp-rail" aria-hidden="true">
        <div className="sp-rail-fill" ref={fillRef} />
      </div>
    </>
  );
};

export default SpChrome;
