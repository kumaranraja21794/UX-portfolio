import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/* Chrome for the case-study routes. The legacy Header paints white
   text and a dark backdrop, which disappears on the light ground. */
export const SpCaseNav = () => (
  <nav className="sp-nav">
    <div className="sp-nav-inner">
      <Link className="sp-brand" to="/">
        <span className="sp-brand-mark" aria-hidden="true" />
        ESKAY
      </Link>

      <Link className="sp-case-back" to="/">
        <ArrowLeft size={15} aria-hidden="true" />
        All work
      </Link>
    </div>
  </nav>
);

export const SpCaseFooter = () => (
  <div className="sp-shell">
    <div className="sp-foot">
      <span>© 2026 Sakthi Kumaran V</span>
      <Link to="/">Back to all work →</Link>
    </div>
  </div>
);

export default SpCaseNav;
