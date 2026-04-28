import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Layout, Smartphone, Database, Compass, Zap } from 'lucide-react';
import Magnetic from './Magnetic';

const SkillCard = ({ title, desc, icon: Icon, size, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Magnetic strength={0.05}>
      <motion.div
        className={`skill-card ${size || ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="skill-card-glow"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 0, 0, 0.04),
                transparent 80%
              )
            `,
          }}
        />
        <div className="skill-icon-bg">
          <Icon size={24} strokeWidth={2} />
        </div>
        <div className="skill-info">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </motion.div>
    </Magnetic>
  );
};

const Skills = () => {
  const skills = [
    { title: "Visual Design", desc: "Crafting precise, high-fidelity interfaces with absolute attention to grid, color theory, and motion.", icon: Layout, size: "large" },
    { title: "UX Architecture", desc: "Structuring complex information into intuitive hierarchies for seamless navigation.", icon: Database, size: "medium" },
    { title: "Mobile UI", desc: "Expertise in platform-specific guidelines for iOS and Android ecosystems.", icon: Smartphone, size: "medium" },
    { title: "Design Systems", desc: "Building scalable, code-ready systems that bridge the gap between design and development.", icon: Zap, size: "large" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header centered">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My Specialties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Synthesizing complex requirements into elegant, high-performance digital products.
          </motion.p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

