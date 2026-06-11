import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [isClicked, setIsClicked] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const followerX = useSpring(-100, { damping: 30, stiffness: 400 });
  const followerY = useSpring(-100, { damping: 30, stiffness: 400 });

  const moveCursor = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    followerX.set(e.clientX);
    followerY.set(e.clientY);
  }, [mouseX, mouseY, followerX, followerY]);

  const handleHoverStart = useCallback((e) => {
    const target = e.target;
    if (target && target.closest) {
      if (target.closest('.project-item-ref, .featured-project, .project-visual-ref')) {
        setCursorType('project');
      } else if (target.closest('.contact-section, .contact-email-link')) {
        setCursorType('contact');
      } else if (target.closest('a, button, [role="button"], .exp-item, .skill-card, .view-btn, .nav-link, .menu-item, .magnetic-wrap')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicked(true), []);
  const handleMouseUp = useCallback(() => setIsClicked(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [moveCursor, handleHoverStart, handleMouseDown, handleMouseUp]);

  const getFollowerSize = () => {
    switch (cursorType) {
      case 'project': return 90;
      case 'contact': return 100;
      case 'hover': return 50;
      default: return 30;
    }
  };

  const getFollowerLabel = () => {
    switch (cursorType) {
      case 'project': return 'VIEW';
      case 'contact': return 'SAY HI';
      default: return null;
    }
  };

  return (
    <>
      {/* Precision Point */}
      <motion.div
        id="custom-cursor"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicked ? 0.5 : 1,
          opacity: 1,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#FF6B4A',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Aesthetic Follower */}
      <motion.div
        id="cursor-follower"
        animate={{
          width: getFollowerSize(),
          height: getFollowerSize(),
          backgroundColor: cursorType !== 'default' ? 'rgba(255, 107, 74, 0.06)' : 'transparent',
          borderWidth: cursorType === 'default' ? 1 : 2,
          borderColor: cursorType !== 'default' ? 'rgba(255, 107, 74, 0.5)' : 'rgba(255,255,255,0.15)',
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: followerX,
          y: followerY,
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          borderStyle: 'solid',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'difference',
          backdropFilter: cursorType !== 'default' ? 'blur(2px)' : 'none',
        }}
      >
        <AnimatePresence mode="wait">
          {getFollowerLabel() && (
            <motion.span 
              key={cursorType}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ 
                color: '#FFF', 
                fontSize: '0.55rem', 
                fontWeight: '700', 
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {getFollowerLabel()}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
