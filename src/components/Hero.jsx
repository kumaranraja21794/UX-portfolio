import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);

  // Smooth scroll handler
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="jinipay-hero">
      
      {/* Background Image with Parallax */}
      <motion.div 
        className="jinipay-bg"
        style={{ 
          y: bgY,
          scale: bgScale,
        }}
      >
        <img 
          src="/dunes_starry_night.png" 
          alt="Starry Dunes Background" 
          className="jinipay-bg-img" 
        />
        <div className="jinipay-bg-overlay-radial"></div>
        <div className="jinipay-bg-overlay-bottom"></div>
      </motion.div>

      {/* Main Centered Content */}
      <div className="jinipay-content">
        
        {/* Title */}
        <motion.h1 
          className="jinipay-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Next-<span className="jinipay-gradient-text">Gen</span>
          <br />
          UI/UX & Frontend
        </motion.h1>

        {/* CTA Button */}
        <motion.a 
          href="#projects"
          className="jinipay-cta-btn"
          onClick={handleScrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileTap={{ scale: 0.98 }}
        >
          View Projects
          <span className="jinipay-cta-arrow">
            <ArrowRight size={16} strokeWidth={2.5} />
          </span>
        </motion.a>

        {/* Center Portrait Card */}
        <motion.div 
          className="jinipay-portrait-card"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleScrollToProjects}
        >
          <img 
            src="/developer_portrait.png" 
            alt="EsKay Portrait" 
          />
        </motion.div>

      </div>

      {/* Bottom Left Floating Item */}
      <motion.div 
        className="jinipay-float-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="jinipay-avatar-pile">
          <div className="jinipay-avatar-circle jinipay-avatar-1" />
          <div className="jinipay-avatar-circle jinipay-avatar-2" />
          <div className="jinipay-avatar-circle jinipay-avatar-3" />
          <div className="jinipay-avatar-circle jinipay-avatar-4" />
        </div>
        <p className="jinipay-float-left-text">
          Relied upon to deliver high-fidelity UI/UX and clean code.
        </p>
      </motion.div>

      {/* Bottom Right Floating Item */}
      <motion.div 
        className="jinipay-float-right"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="jinipay-badge">
          <span>🌍</span> High-Performance Code
        </div>
        <p className="jinipay-float-right-text">
          Crafting robust React & Angular frontends. Fast rendering, responsive layouts, and clean architecture right in your browser.
        </p>
      </motion.div>

      {/* Scroll Down Chevron Button (Bottom Right, slightly above the right badge) */}
      <motion.button 
        className="jinipay-scroll-down"
        onClick={handleScrollToProjects}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown size={20} />
      </motion.button>

    </section>
  );
};

export default Hero;
