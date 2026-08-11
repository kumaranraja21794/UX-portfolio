import React, { useEffect, useRef } from 'react';

/* Scroll progress. Lives inside .sp-nav and is positioned against it,
   so it always sits flush under the header without anyone having to
   hardcode the header's height. */
export const SpProgress = () => {
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
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
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

  return (
    <div className="sp-progress" aria-hidden="true">
      <div className="sp-progress-fill" ref={fillRef} />
    </div>
  );
};

/* Page-level overlays and behaviour that aren't tied to the header. */
export const SpChrome = () => {
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

  return <div className="sp-grain" aria-hidden="true" />;
};

export default SpChrome;
