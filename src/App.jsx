import React, { useEffect, useState, useCallback, useRef } from 'react';
import './designova.css';
import './spectra.css';
import './spectra-case.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import SpChrome from './spectra/SpChrome';
import SpCaseNav, { SpCaseFooter } from './spectra/SpCaseNav';
import CaseStudyAlpha from './components/CaseStudyAlpha';
import CaseStudyBitwise from './components/CaseStudyBitwise';
import CaseStudyAurora from './components/CaseStudyAurora';
import SpHome from './spectra/SpHome';
import SpSplash from './spectra/SpSplash';
import { shouldSkipSplash } from './spectra/splashPreference';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* Case studies keep their legacy markup but wear Spectra chrome.
   The old Header/Background paint white-on-dark, which vanishes
   against the light ground spectra-case.css now gives these pages. */
const CaseStudyLayout = ({ children }) => (
  <div className="sp-page sp-case">
    <SpChrome />
    <SpCaseNav />
    <main>{children}</main>
    <SpCaseFooter />
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(() => !shouldSkipSplash());
  const lenisRef = useRef(null);

  // Smooth scroll. Exposed on window so hash links can defer to it —
  // a native anchor jump fights Lenis's rAF loop and snaps back.
  useEffect(() => {
    if (showSplash) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, [showSplash]);

  useEffect(() => {
    document.body.style.overflow = showSplash ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showSplash]);

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="App">
      <AnimatePresence>
        {showSplash && <SpSplash key="splash" onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SpHome />} />
          <Route path="/case-study/alpha-arena" element={<CaseStudyLayout><CaseStudyAlpha /></CaseStudyLayout>} />
          <Route path="/case-study/bitwise" element={<CaseStudyLayout><CaseStudyBitwise /></CaseStudyLayout>} />
          <Route path="/case-study/aurora-fintech" element={<CaseStudyLayout><CaseStudyAurora /></CaseStudyLayout>} />
        </Routes>
      </motion.div>
    </div>
    </MotionConfig>
  );
}

export default App;
