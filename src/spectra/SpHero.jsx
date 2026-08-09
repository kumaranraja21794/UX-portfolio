import React, { useState } from 'react';
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

export const SpHero = () => {
  const [view, setView] = useState('design');
  const isDesign = view === 'design';

  return (
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
          <div className="sp-panel-head">
            <span className="sp-panel-tag">Aurora · Balance</span>
            <div className="sp-toggle" role="group" aria-label="Switch between design and code view">
              <button
                type="button"
                className={isDesign ? 'sp-on' : undefined}
                aria-pressed={isDesign}
                onClick={() => setView('design')}
              >
                Design
              </button>
              <button
                type="button"
                className={!isDesign ? 'sp-on' : undefined}
                aria-pressed={!isDesign}
                onClick={() => setView('code')}
              >
                Code
              </button>
            </div>
          </div>

          <div className="sp-panel">
            <div className="sp-face">
              <img src="/aurora/portrait.png" alt="Portrait of Sakthi Kumaran V" />
            </div>

            <div className="sp-panel-stage">
              <div className={`sp-view sp-view-media${isDesign ? ' sp-on' : ''}`} aria-hidden={!isDesign}>
                <img className="sp-device" src="/aurora/home_screen.png" alt="Aurora app balance screen" />
              </div>

              <div className={`sp-view sp-view-code${!isDesign ? ' sp-on' : ''}`} aria-hidden={isDesign}>
                <pre>
<span className="sp-c-dim">{'// BalanceCard.jsx — Aurora'}</span>{'\n'}
<span className="sp-c-key">export function</span> <span className="sp-c-attr">BalanceCard</span>{'({ balance, delta }) {'}{'\n'}
{'  '}<span className="sp-c-key">const</span>{' risk = '}<span className="sp-c-attr">useSpendRisk</span>{'(delta)'}{'\n\n'}
{'  '}<span className="sp-c-key">return</span>{' ('}{'\n'}
{'    <'}<span className="sp-c-tag">Card</span>{' '}<span className="sp-c-attr">tone</span>{'={risk.tone}>'}{'\n'}
{'      <'}<span className="sp-c-tag">Label</span>{'>'}<span className="sp-c-str">Available today</span>{'</'}<span className="sp-c-tag">Label</span>{'>'}{'\n'}
{'      <'}<span className="sp-c-tag">Amount</span>{' '}<span className="sp-c-attr">value</span>{'={balance} '}<span className="sp-c-attr">animate</span>{' />'}{'\n'}
{'      <'}<span className="sp-c-tag">Delta</span>{' '}<span className="sp-c-attr">pct</span>{'={delta} '}<span className="sp-c-attr">guard</span>{'={risk.cap} />'}{'\n'}
{'    </'}<span className="sp-c-tag">Card</span>{'>'}{'\n'}
{'  )'}{'\n'}
{'}'}{'\n\n'}
<span className="sp-c-dim">{'// The guardrail that cut unplanned'}</span>{'\n'}
<span className="sp-c-dim">{'// spend by 40%.'}</span>
                </pre>
              </div>
            </div>
          </div>

          <div className="sp-panel-caption">
            <span>One screen · both sides of my brain</span>
            <span className="sp-dotpair" aria-hidden="true">
              <i className="sp-hot" /><i /><i />
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default SpHero;
