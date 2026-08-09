import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { markSplashSeen } from './splashPreference';

export const SpSplash = ({ onComplete }) => {
  useEffect(() => {
    markSplashSeen();
    const t = setTimeout(onComplete, 1500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="sp-splash"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="sp-splash-inner">
        <motion.span
          className="sp-splash-mark"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          ES<span className="sp-grad-text">KAY</span>
        </motion.span>

        <motion.span
          className="sp-splash-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Designer &amp; Frontend Developer
        </motion.span>

        <div className="sp-splash-track">
          <motion.div
            className="sp-splash-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SpSplash;
