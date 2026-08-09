import React, { useEffect, useState, useCallback, useRef } from 'react';
import './designova.css';
import './spectra.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Background from './components/Background';
import CaseStudyAlpha from './components/CaseStudyAlpha';
import CaseStudyBitwise from './components/CaseStudyBitwise';
import CaseStudyAurora from './components/CaseStudyAurora';
import SpHome from './spectra/SpHome';
import SpSplash, { shouldSkipSplash } from './spectra/SpSplash';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* Case studies still run on the legacy stylesheet and chrome.
   Keeping them wrapped means the Spectra rebuild can't regress them. */
const CaseStudyLayout = ({ children }) => (
  <>
    <ProgressBar />
    <Background />
    <Header />
    <main>{children}</main>
    <footer className="site-footer">
      <div className="container">
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>
            &copy; 2026 EsKay. Built with React and Precision.
          </p>
        </div>
      </div>
    </footer>
  </>
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
