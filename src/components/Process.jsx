import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ title, desc, num, index }) => (
  <div 
    className="process-step-container" 
    style={{ 
      position: 'sticky', 
      top: '15vh', 
      height: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      zIndex: index 
    }}
  >
    <motion.div
      className="process-step"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: '#fff',
        padding: '4rem',
        borderRadius: '40px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '800px',
        border: '1px solid rgba(0,0,0,0.02)',
        marginTop: `${index * 30}px`
      }}
    >
      <span className="step-num" style={{ 
        display: 'inline-flex', 
        width: '32px', 
        height: '32px', 
        background: 'var(--accent-primary)', 
        color: '#fff', 
        borderRadius: '50%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '0.8rem', 
        fontWeight: '800',
        marginBottom: '2rem'
      }}>{num}</span>
      <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>{title}</h3>
      <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
  </div>
);

const Process = () => {
  const steps = [
    { num: "01", title: "Discover", desc: "Immersion into the problem space through user interviews, audits, and competitive research." },
    { num: "02", title: "Define", desc: "Synthesis of research into personas, journey maps, and clear product requirements." },
    { num: "03", title: "Design", desc: "Iterative wireframing and high-fidelity prototyping with a focus on core user loops." },
    { num: "04", title: "Deliver", desc: "Polished UI assets, documentation, and handoff to the engineering teams." }
  ];

  return (
    <section id="process" className="process" style={{ paddingBottom: '30vh', background: '#fafafa' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '1.1rem', fontWeight: '800', textAlign: 'center', marginBottom: '10vh', letterSpacing: '0.4em', color: 'var(--accent-primary)' }}
        >
          DESIGN METHODOLOGY
        </motion.h2>
        <div className="process-list" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {steps.map((step, i) => (
            <ProcessStep key={i} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
