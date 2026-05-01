import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="craftfolio-header">
      <div className="header-container">
        <a href="#hero" className="logo-brand">
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H8.5L15.5 14V4H19.5V20H15L8 10V20H4V4Z" />
          </svg> */}
          <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.35rem' }}>
            <span style={{ fontWeight: 800, letterSpacing: '-0.04em' }}>ES</span>
            <span style={{ fontWeight: 300, letterSpacing: '0.15em', marginLeft: '1px', color: '#A0A0A0' }}>KAY</span>
          </span>
        </a>
        
        <div className="header-right">
          <button className="btn-icon-outline">
            <Menu size={20} />
          </button>
          <a href="#contact" className="btn-hire-me">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
