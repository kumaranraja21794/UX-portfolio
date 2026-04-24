import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#hero" className="logo">
          Es<span>Kay</span><span className="dot">.</span>
        </a>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Specialties</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
