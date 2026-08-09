import React from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Craft', href: '#craft' },
  { label: 'Path', href: '#path' },
  { label: 'Contact', href: '#contact' },
];

export const SpHeader = () => (
  <nav className="sp-nav">
    <div className="sp-nav-inner">
      <a className="sp-brand" href="#top" aria-label="ESKAY — home">
        <span className="sp-brand-mark" aria-hidden="true" />
        ESKAY
      </a>

      <div className="sp-nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <a className="sp-nav-cta" href="#contact">
        <span className="sp-pip" aria-hidden="true" />
        <span className="sp-cta-long">Available for work</span>
        <span className="sp-cta-short">Hire me</span>
      </a>
    </div>
  </nav>
);

export default SpHeader;
