import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/projects';

const tiles = [
  {
    mod: 'grad', idx: 'Research → Interface', h: 'Complex data, calm screens',
    p: 'Trading tables, insurance quotes, allowance rules. I find the one number a person came for, and build everything else around it.',
  },
  {
    mod: 'nar', idx: 'Systems', h: 'Tokens first',
    p: 'Colour, type and spacing as variables — so design and code never drift apart.',
  },
  {
    mod: 'mid', idx: 'Build', h: 'React, in production',
    p: 'Next.js, Angular, WordPress. Live products at Oman United Insurance and Shinhan Life Vietnam.',
  },
  {
    mod: 'ink', idx: 'Motion', h: 'Motion with a job',
    p: 'Transitions that explain state changes — never decoration for its own sake.',
  },
  {
    mod: 'wide', idx: 'Outcome', h: 'Measured, not vibes',
    p: "Every case study leads with the number that moved: spend down 40%, workflow 65% faster. If it didn't move, it isn't in the portfolio.",
  },
];

export const SpCraft = () => (
  <>
    <section className="sp-sec sp-shell" id="craft">
      <div className="sp-sec-head">
        <div>
          <div className="sp-sec-label">How I work</div>
          <h2 className="sp-sec-title">Design that survives contact with a codebase</h2>
        </div>
        <p className="sp-sec-note">I hand off fewer specs, because I ship the front end myself.</p>
      </div>

      <div className="sp-bento">
        {tiles.map((t, i) => (
          <motion.div
            className={`sp-tile sp-tile--${t.mod}`}
            key={t.h}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sp-tile-idx">{t.idx}</span>
            <h4>{t.h}</h4>
            <p>{t.p}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="sp-sec sp-shell" id="path">
      <div className="sp-sec-head">
        <div>
          <div className="sp-sec-label">The path here</div>
          <h2 className="sp-sec-title">Ten years, one throughline</h2>
        </div>
        <p className="sp-sec-note">
          Started in engineering, moved into design, never stopped shipping either.
        </p>
      </div>

      <div className="sp-exp">
        {experience.map((e, i) => (
          <motion.div
            className="sp-exp-row"
            key={e.period}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sp-exp-when">{e.period}</span>
            <div>
              <h3 className="sp-exp-role">{e.role}</h3>
              <p className="sp-exp-co">{e.company}</p>
            </div>
            <span className="sp-exp-tag">{e.tag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default SpCraft;
