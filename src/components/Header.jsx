import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();

  // Hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    // Show border after scrolling past 100px (hero section)
    setHasScrolled(latest > 100);
    // Hide header when scrolling down past 150px
    if (latest > 150 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Dynamic blur intensity based on scroll position
  const backdropBlur = useTransform(scrollY, [0, 300], [8, 22]);
  const headerBg = useTransform(
    scrollY,
    [0, 200],
    ['rgba(15, 15, 15, 0.4)', 'rgba(15, 15, 15, 0.85)']
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: 1
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px 0',
          pointerEvents: 'none'
        }}
      >
        <div 
          className="header-capsule"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 15, 15, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            padding: '6px 12px',
            width: '90%',
            maxWidth: '550px',
            pointerEvents: 'auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.02)'
          }}
        >
          {/* Left: Menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.08)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{ color: '#FF6B4A', fontSize: '1rem', lineHeight: 1 }}>∴</span> Menu
          </motion.button>

          {/* Center: Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          >
            ESKAY
          </motion.a>

          {/* Right: CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, background: '#FFFFFF', color: '#0F0F0F', borderColor: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 500,
              padding: '6px 18px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              transition: 'background 0.3s, color 0.3s, border-color 0.3s'
            }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
