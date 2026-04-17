import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ProgressBar from './components/ProgressBar';
import Background from './components/Background';
import CaseStudyAlpha from './components/CaseStudyAlpha';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <CustomCursor />
      <ProgressBar />
      <Background />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Experience />
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
    </div>
  );
}

export default App;
