import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/projects';

export const SpContact = () => (
  <section className="sp-sec sp-shell" id="contact">
    <motion.div
      className="sp-cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="sp-cta-inner">
        <div>
          <p className="sp-cta-sub">Available · Freelance &amp; full-time</p>
          <h2>Got something complicated?</h2>
        </div>
        <a className="sp-cta-btn" href={`mailto:${contact.email}`}>
          Let&apos;s talk <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="sp-cta-links">
        <a className="sp-cta-link" href={`mailto:${contact.email}`}>{contact.email}</a>
        <a className="sp-cta-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </motion.div>

    <div className="sp-foot">
      <span>© 2026 Sakthi Kumaran V</span>
      <span>Chennai, IN · UTC+5:30</span>
    </div>
  </section>
);

export default SpContact;
