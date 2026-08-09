import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const isExternal = (href) => /^https?:\/\//.test(href);

const FEATURED_COUNT = 2;

/* Every shot sits in the same frame regardless of its native aspect:
   wide mockups cover it, phone screens float on the project's wash. */
const Visual = ({ p }) =>
  p.shape === 'phone' ? (
    <>
      <div className="sp-card-wash" style={{ background: p.wash }} />
      <img className="sp-phone" src={p.img} alt={`${p.title} interface`} loading="lazy" />
    </>
  ) : (
    <img className="sp-fill-img" src={p.img} alt={`${p.title} interface`} loading="lazy" />
  );

const CardLink = ({ p, label }) =>
  isExternal(p.link) ? (
    <a
      className="sp-card-link"
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title} — ${label}`}
    />
  ) : (
    <Link className="sp-card-link" to={p.link} aria-label={`${p.title} — ${label}`} />
  );

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Featured = ({ p, index }) => (
  <motion.article
    className={`sp-feat sp-feat--${p.shape}${index % 2 ? ' sp-feat--flip' : ''}`}
    variants={rise}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
  >
    <div className="sp-feat-visual">
      <Visual p={p} />
    </div>

    <div className="sp-feat-body">
      <div className="sp-card-meta">
        <span className="sp-chip">{p.year}</span>
        <span>{p.domain}</span>
      </div>
      <h3 className="sp-feat-title">{p.title}</h3>
      <p className="sp-feat-desc">{p.desc}</p>

      <div className="sp-feat-tags">
        {p.tags.map((t) => (
          <span className="sp-feat-tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="sp-card-foot">
        <span className="sp-card-impact" style={{ color: p.impactColor }}>{p.impact}</span>
        <span className="sp-card-go" aria-hidden="true">→</span>
      </div>
    </div>

    <CardLink p={p} label="read case study" />
  </motion.article>
);

const IndexCard = ({ p, index }) => (
  <motion.article
    className={`sp-card sp-card--${p.shape}`}
    variants={rise}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: (index % 3) * 0.06 }}
  >
    <div className="sp-card-visual">
      <Visual p={p} />
    </div>

    <div className="sp-card-body">
      <div className="sp-card-meta">
        <span className="sp-chip">{p.year}</span>
        <span>{p.domain}</span>
      </div>
      <h3 className="sp-card-title">{p.title}</h3>
      <p className="sp-card-desc">{p.desc}</p>
      <div className="sp-card-foot">
        <span className="sp-card-impact" style={{ color: p.impactColor }}>{p.impact}</span>
        <span className="sp-card-go" aria-hidden="true">→</span>
      </div>
    </div>

    <CardLink p={p} label="open project" />
  </motion.article>
);

export const SpWork = () => {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <section className="sp-sec sp-shell" id="work">
      <div className="sp-sec-head">
        <div>
          <div className="sp-sec-label">Selected work</div>
          <h2 className="sp-sec-title">Money, markets &amp; the messy middle</h2>
        </div>
        <p className="sp-sec-note">
          Eight shipped products. Each one started as a spreadsheet nobody could read.
        </p>
      </div>

      <div className="sp-featured">
        {featured.map((p, i) => (
          <Featured key={p.id} p={p} index={i} />
        ))}
      </div>

      <div className="sp-work-grid">
        {rest.map((p, i) => (
          <IndexCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SpWork;
