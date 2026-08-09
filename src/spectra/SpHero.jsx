import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { n: '8+', l: 'Years shipping' },
  { n: '24', l: 'Products live' },
  { n: '5', l: 'Fintech domains' },
];

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const SpHero = () => (
  <header className="sp-hero sp-shell" id="top">
    <motion.div variants={rise} initial="hidden" animate="show" custom={0}>
      <div className="sp-eyebrow">
        <span className="sp-live" aria-hidden="true" />
        UI/UX Designer &amp; Frontend Developer · Chennai
      </div>
    </motion.div>

    <div className="sp-hero-grid">
      <div className="sp-hero-type">
        <motion.h1 className="sp-headline" variants={rise} initial="hidden" animate="show" custom={1}>
          <span className="sp-ln">Designing</span>
          <span className="sp-ln sp-ln-2 sp-grad-text">&amp; coding</span>
          <span className="sp-ln sp-ln-3 sp-stroke-text">products</span>
        </motion.h1>

        <motion.p className="sp-kicker" variants={rise} initial="hidden" animate="show" custom={2}>
          Eight years turning dense financial data and complex flows into interfaces people
          actually understand — <b>then building them in production.</b>
        </motion.p>

        <motion.div className="sp-actions" variants={rise} initial="hidden" animate="show" custom={3}>
          <a className="sp-btn-solid" href="#work">See the work <span aria-hidden="true">→</span></a>
          <a className="sp-btn-lime" href="#contact">Start a project</a>
        </motion.div>

        <motion.div className="sp-stats" variants={rise} initial="hidden" animate="show" custom={4}>
          {stats.map((s) => (
            <div className="sp-stat" key={s.l}>
              <span className="sp-stat-n">{s.n}</span>
              <span className="sp-stat-l">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="sp-hero-panel"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="sp-panel">
          <div className="sp-panel-stage">
            <img
              className="sp-hero-photo"
              src="/hero-bg-v7.png"
              alt="Sakthi Kumaran V sketching on a tablet, surrounded by floating UI wireframes"
            />
            <span className="sp-panel-badge">
              <i aria-hidden="true" />
              Sakthi Kumaran V
            </span>
          </div>
        </div>

        <div className="sp-panel-caption">
          <span>Chennai, IN · UTC+5:30</span>
          <span>Open to work</span>
        </div>
      </motion.div>
    </div>
  </header>
);

export default SpHero;
