import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';
import ResumeSections from './components/ResumeSections';
import ProgressBar from './components/ProgressBar';
import Background from './components/Background';
import CaseStudyAlpha from './components/CaseStudyAlpha';
import SplashScreen from './components/SplashScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Lock scroll during splash
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showSplash]);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <ScrollToTop />
        <ProgressBar />
        <Background />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ResumeSections />
                <Skills />
                <Projects />
                <Process />
                <Contact />
              </>
            } />
            <Route path="/case-study/alpha-arena" element={<CaseStudyAlpha />} />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2026 EsKay. Built with React and Precision.</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
