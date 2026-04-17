import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Layout, Smartphone, Database, Compass } from 'lucide-react';

const SkillCard = ({ title, desc, icon: Icon, size, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
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
              rgba(124, 58, 237, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="skill-icon-bg">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="skill-info">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { title: "Visual Design", desc: "Crafting precise, high-fidelity interfaces with absolute attention to grid, color theory, and motion.", icon: Layout, size: "large" },
    { title: "UX Architecture", desc: "Structuring complex information into intuitive hierarchies for seamless navigation.", icon: Database, size: "medium" },
    { title: "Mobile UI", desc: "Expertise in platform-specific guidelines for iOS and Android ecosystems.", icon: Smartphone, size: "medium" },
    { title: "Product Thinking", desc: "Synthesizing research into clear strategies that drive user engagement and business growth.", icon: Compass, size: "large" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3.5rem', marginBottom: '4rem', letterSpacing: '-0.04em', textAlign: 'center' }}
        >
          My Specialties
        </motion.h2>
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
