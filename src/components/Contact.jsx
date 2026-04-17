import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <h2>Let's build something <br />
            <span style={{ color: 'var(--accent-secondary)' }}>extraordinary.</span>
          </h2>
          <p>Currently available for freelance opportunities and long-term collaborations.</p>
          <div className="social-links">
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href="#"><User /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href="#"><Globe /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href="#"><Code /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href="#"><Mail /></motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
