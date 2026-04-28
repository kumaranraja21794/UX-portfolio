import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'project'
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });
  
  const followerX = useSpring(0, { damping: 25, stiffness: 150 });
  const followerY = useSpring(0, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      if (e.target && e.target.closest) {
        if (e.target.closest('.featured-project')) {
          setCursorType('project');
        } else if (e.target.closest('a, button, .exp-item, .skill-card, .hero-link-item, .stat-card')) {
          setCursorType('hover');
        } else {
          setCursorType('default');
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, []);

  return (
    <>
      <motion.div
        id="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        id="cursor-follower"
        animate={{
          width: cursorType === 'project' ? 100 : cursorType === 'hover' ? 80 : 40,
          height: cursorType === 'project' ? 100 : cursorType === 'hover' ? 80 : 40,
          backgroundColor: cursorType === 'project' ? 'var(--accent-primary)' : cursorType === 'hover' ? 'rgba(0,0,0,0.05)' : 'transparent',
          borderWidth: cursorType === 'project' ? 0 : 1,
          borderColor: cursorType === 'hover' ? 'var(--accent-primary)' : 'rgba(0,0,0,0.2)',
        }}
        style={{
          x: followerX,
          y: followerY,
        }}
      >
        {cursorType === 'project' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ color: '#fff', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em' }}
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
