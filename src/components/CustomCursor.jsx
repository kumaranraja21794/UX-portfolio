import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'project'
  const [isClicked, setIsClicked] = useState(false);
  
  // Use raw motion values for the main dot for 0 latency / perfect precision
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smoothed follower values with high stiffness for responsiveness
  const followerX = useSpring(-100, { damping: 40, stiffness: 600 });
  const followerY = useSpring(-100, { damping: 40, stiffness: 600 });

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
      } else if (target.closest('a, button, [role="button"], .exp-item, .skill-card, .view-btn, .nav-link')) {
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

  return (
    <>
      {/* Precision Point - The actual pointer */}
      <motion.div
        id="custom-cursor"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicked ? 0.5 : 1,
          opacity: 1,
        }}
      />
      
      {/* Aesthetic Follower - Provides context and feedback */}
      <motion.div
        id="cursor-follower"
        animate={{
          width: cursorType === 'project' ? 80 : cursorType === 'hover' ? 50 : 30,
          height: cursorType === 'project' ? 80 : cursorType === 'hover' ? 50 : 30,
          backgroundColor: cursorType === 'project' ? 'rgba(0,0,0,0.03)' : cursorType === 'hover' ? 'rgba(0,0,0,0.02)' : 'transparent',
          borderWidth: cursorType === 'default' ? 1 : 2,
          borderColor: (cursorType === 'project' || cursorType === 'hover') ? 'var(--text-primary)' : 'rgba(0,0,0,0.1)',
          scale: isClicked ? 0.8 : 1,
        }}
        style={{
          x: followerX,
          y: followerY,
        }}
      >
        <AnimatePresence mode="wait">
          {cursorType === 'project' && (
            <motion.span 
              key="view-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ 
                color: 'var(--text-primary)', 
                fontSize: '0.6rem', 
                fontWeight: '900', 
                letterSpacing: '0.1em',
                textTransform: 'uppercase' 
              }}
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
