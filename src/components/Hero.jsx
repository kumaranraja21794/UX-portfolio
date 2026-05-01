import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="designova-hero" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#0F0F0F' }}>
      
      {/* 1. The neon cursive text behind the subject */}
      <motion.div 
        className="neon-cursive-bg"
        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Sakthi Kumaran
      </motion.div>

      {/* 2. The subject image in front, using lighten to blend dark background */}
      <div className="hero-subject-wrapper" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <img src="/hero-bg.png" alt="Hero Background" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center', mixBlendMode: 'lighten' }} />
        <div className="hero-gradient-overlay" style={{ zIndex: 3, pointerEvents: 'none' }}></div>
      </div>
      
      {/* 3. The front typography */}
      <div className="hero-content" style={{ zIndex: 10, textAlign: 'center', marginTop: '15vh', position: 'relative', width: '100%' }}>
        <div className="hero-text-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', maxWidth: '800px' }}>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
              fontFamily: '"Inter", sans-serif', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              fontWeight: 300, 
              color: '#FFF', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              lineHeight: '1.2',
              marginBottom: '2rem'
            }}
          >
            Freelance <br/>
            <strong style={{ fontWeight: 700 }}>UI Designer</strong>
          </motion.h2>
          
          <motion.div className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ justifyContent: 'center' }}
          >
            <a href="#work" className="btn-primary-orange">
              Hire Me <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
