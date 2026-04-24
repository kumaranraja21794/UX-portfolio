import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectItem = ({ title, img, desc, tags, index, role, outcome, link }) => {
  return (
    <div className="project-item-ref">
      <div className="project-visual-ref">
        <motion.img
          src={img}
          alt={title}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
        />
      </div>
      <div className="project-text-ref">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="project-num">Project 0{index + 1}</span>
          <h3>{title}</h3>

          <div className="project-meta-grid">
            <div className="meta-box">
              <label>Role</label>
              <span>{role}</span>
            </div>
            <div className="meta-box">
              <label>Outcome</label>
              <span>{outcome}</span>
            </div>
          </div>

          <p>{desc}</p>

          <div className="project-footer">
            <div className="project-tags">
              {tags.map((tag, i) => (
                <span key={i} className="tag-ref">{tag}</span>
              ))}
            </div>

            <Link to={link || '#'} className="view-btn">
              Explore Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Alpha Arena Platform",
      img: "new-dash.png",
      role: "UX Designer",
      outcome: "65% Faster Comparison",
      desc: "An AI-driven trading competition dashboard. Transformed complex financial datasets into actionable insights through strategic information hierarchy and intuitive data visualization.",
      tags: ["Fintech", "UX Research", "Dashboard"],
      link: "/case-study/alpha-arena"
    },
    {
      title: "EcoPulse App",
      img: "ecopulse_app.png",
      role: "Product Designer",
      outcome: "Seamless UX Flow",
      desc: "Mobile application helping users track their carbon footprint in real-time. Created a gamified experience to encourage sustainable daily habits.",
      tags: ["Mobile UX", "Sustainability", "Swift"]
    },
    {
      title: "Skyline Identity",
      img: "skyline_brand.png",
      role: "Visual Designer",
      outcome: "Award-Winning Brand",
      desc: "Comprehensive rebranding and website design for a luxury architectural firm. Focused on minimalism, high-end typography, and architectural rhythm.",
      tags: ["Branding", "Visual Design", "Web"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects & Case Studies
        </motion.h2>
        <div className="project-list-ref">
          {projects.map((p, i) => (
            <ProjectItem key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
