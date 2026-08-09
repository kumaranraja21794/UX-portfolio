import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const isExternal = (href) => /^https?:\/\//.test(href);

const ProjectCard = ({ p, index }) => {
  const body = (
    <>
      <div className="sp-card-visual">
        {p.shape === 'phone' ? (
          <>
            <div className="sp-card-wash" style={{ background: p.wash }} />
            <img className="sp-phone" src={p.img} alt={`${p.title} interface`} loading="lazy" />
          </>
        ) : (
          <img className="sp-fill-img" src={p.img} alt={`${p.title} interface`} loading="lazy" />
        )}
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
    </>
  );

  return (
    <motion.article
      className={`sp-card sp-card--${p.shape}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {body}
      {isExternal(p.link) ? (
        <a
          className="sp-card-link"
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} — open project`}
        />
      ) : (
        <Link className="sp-card-link" to={p.link} aria-label={`${p.title} — read case study`} />
      )}
    </motion.article>
  );
};

export const SpWork = () => (
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

    <div className="sp-work-grid">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} p={p} index={i} />
      ))}
    </div>
  </section>
);

export default SpWork;
