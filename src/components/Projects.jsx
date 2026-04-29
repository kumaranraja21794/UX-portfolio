import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';
import TiltCard from './TiltCard';

const ProjectItem = ({ title, img, desc, tags, index, role, outcome, link }) => {
  return (
    <motion.div 
      className="project-item-ref"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="project-grid">
        <div className="project-visual-column">
          <TiltCard className="project-visual-ref">
            <img
              src={img}
              alt={title}
              className="project-image"
            />
          </TiltCard>
        </div>
        
        <div className="project-content-column">
          <div className="project-text-ref">
            <span className="project-num">0{index + 1}</span>
            <h3 className="project-title">{title}</h3>

            <div className="project-meta-pills">
              <span className="meta-pill"><strong>Role:</strong> {role}</span>
              <span className="meta-pill"><strong>Impact:</strong> {outcome}</span>
            </div>

            <p className="project-description">{desc}</p>

            <div className="project-tags-row">
              {tags.map((tag, i) => (
                <span key={i} className="tag-ref">{tag}</span>
              ))}
            </div>

            <div className="project-cta-wrap">
              <Magnetic strength={0.2}>
                <Link to={link || '#'} className="project-explore-btn">
                  <span>Explore Project</span>
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Alpha Arena Platform",
      img: "new-dash.png",
      role: "UX Designer",
      outcome: "65% Faster Workflow",
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
      <div className="container">
        <div className="projects-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="projects-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of selected works focusing on usability, aesthetics, and user-centric problem solving.
          </motion.p>
        </div>

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

