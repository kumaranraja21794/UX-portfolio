import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  'Dribbble',
  'Facebook',
  'LinkedIn',
  'YouTube',
  'Art Station',
  'Instagram',
  'Vimeo'
];

const MenuOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="menu-overlay"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="menu-header">
            <div className="menu-header-left">
              <span className="follow-me">Follow Me</span>
              <h2>MORE WORK ON</h2>
            </div>
            <button className="menu-close-btn" onClick={onClose}>
              <X size={32} />
            </button>
          </div>

          <div className="menu-items-list">
            {menuItems.map((item, index) => (
              <motion.div 
                className="flip-container"
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.06, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flip-flipper">
                  <div className="flip-front">{item}</div>
                  <div className="flip-back">
                    {item} <span>&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
