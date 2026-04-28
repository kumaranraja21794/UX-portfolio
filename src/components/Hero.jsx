import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Sparkles, ChevronRight } from 'lucide-react';
import Magnetic from './Magnetic';
import TiltCard from './TiltCard';
import MeshBackground from './MeshBackground';

const profileLinks = [
  { label: 'Behance', value: 'sakthikumaran3', href: 'https://www.behance.net/sakthikumaran3' },
  { label: 'LinkedIn', value: 'sakthi-kumaran', href: 'https://www.linkedin.com/in/sakthi-kumaran-62645372' },
  { label: 'Email', value: 'kumaranraja21794@yahoo.com', href: 'mailto:kumaranraja21794@yahoo.com' },
];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section id="hero" className="hero-v2" ref={containerRef}>
      <MeshBackground />
      
      <div className="hero-content-v2">
        <motion.div 
          className="hero-inner-v2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ y, opacity }}
        >
          <div className="hero-main-v2">
            <motion.div 
              className="hero-eyebrow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} />
              <span>Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Designing <span className="serif">intelligent</span> <br />
              SaaS experiences
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Sakthi Kumaran is a UI/UX Designer specializing in enterprise products. 
              I blend strategic design thinking with a deep understanding of code 
              to build seamless digital ecosystems.
            </motion.p>

            <div className="hero-actions-v2">
              <Magnetic strength={0.2}>
                <a href="#projects" className="btn-primary-v2">
                  View Selected Works
                  <ChevronRight size={18} />
                </a>
              </Magnetic>
              
              <div className="hero-socials-v2">
                {profileLinks.map((link, i) => (
                  <Magnetic key={link.label} strength={0.1}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="social-link-v2">
                      {link.label}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="hero-visual-v2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="portrait-tilt-v2">
              <div className="portrait-container-v2">
                <img src="/designer_hero.png" alt="Portrait" className="portrait-img-v2" />
                <div className="portrait-overlay-v2" />
              </div>
            </TiltCard>

            <motion.div 
              className="floating-badge-v2"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="badge-inner">
                <strong>5+ Years</strong>
                <span>Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll-v2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;


