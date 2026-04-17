import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const portraitX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const portraitY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const words = ["Independent", "Product", "Designer"];

  return (
    <section 
      id="hero" 
      className="hero" 
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="hero-glow" />
      
      <div className="hero-grid">
        <div className="hero-left">
          <motion.div 
            className="hero-tagline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital Artisan & UX Strategist
          </motion.div>

          <div className="hero-heading">
            <motion.h1>
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'inline-block', marginRight: '0.2em' }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                className="serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                & Design Partner
              </motion.span>
            </motion.h1>
          </div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I help early-stage startups and global brands build Scalable Design Systems and High-Fidelity Interactive Prototypes.
          </motion.p>

          <div className="hero-actions">
            <motion.div
              style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="#contact" 
                className="cta-ref"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </motion.a>

              <div className="social-proof-ref" style={{ position: 'relative', bottom: 'auto', left: 'auto' }}>
                <div className="avatar-group">
                  <img src="https://i.pravatar.cc/100?u=4" alt="Social" />
                  <img src="https://i.pravatar.cc/100?u=5" alt="Social" />
                  <img src="https://i.pravatar.cc/100?u=6" alt="Social" />
                </div>
                <p>Loved by <b>50+ founders</b> from YC & Techstars groups.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero-right">
          <motion.div 
            className="hero-portrait-wrapper"
            style={{ x: portraitX, y: portraitY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <img 
              src="/designer_hero.png" 
              alt="EsKay Portrait" 
              className="hero-portrait"
            />
            <div className="hero-portrait-overlay" />
          </motion.div>

          {/* Dynamic Badges */}
          <motion.div 
            className="badge-pill"
            style={{ position: 'absolute', top: '15%', right: '-5%', zIndex: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="meta-dot"></span>
            Available for Q3 '24
          </motion.div>

          <motion.div 
            className="intro-snippet"
            style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '220px', zIndex: 10 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Currently obsessing over spatial interactions & minimal typography.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

