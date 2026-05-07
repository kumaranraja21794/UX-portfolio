import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="craftfolio-header">
        <div className="header-container">
          <a href="#hero" className="logo-brand">
            <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.35rem' }}>
              <span style={{ fontWeight: 800, letterSpacing: '-0.04em' }}>ES</span>
              <span style={{ fontWeight: 300, letterSpacing: '0.15em', marginLeft: '1px', color: '#A0A0A0' }}>KAY</span>
            </span>
          </a>
          
          <div className="header-right">
            <button className="btn-icon-outline" onClick={() => setIsMenuOpen(true)}>
              <Menu size={20} />
            </button>
            <a href="#contact" className="btn-hire-me">
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
