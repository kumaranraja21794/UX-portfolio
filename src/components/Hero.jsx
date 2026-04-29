import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const profileLinks = [
  {
    label: 'Phone',
    value: '+91 97908 86675',
    href: 'tel:+919790886675',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'kumaranraja21794@yahoo.com',
    href: 'mailto:kumaranraja21794@yahoo.com',
    icon: Mail,
  },
  {
    label: 'Behance',
    value: 'behance.net/sakthikumaran3',
    href: 'https://www.behance.net/sakthikumaran3',
    icon: ArrowUpRight,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sakthi-kumaran-62645372',
    href: 'https://www.linkedin.com/in/sakthi-kumaran-62645372',
    icon: ArrowUpRight,
  },
];

const Hero = () => {
  const containerRef = useRef(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const portraitX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const portraitY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  return (
    <section 
      id="hero" 
      className="hero" 
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="hero-glow" />
      
      <div className="hero-grid">
        <div className="hero-left">
          <motion.div 
            className="hero-tagline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            UI/UX Designer | Design-to-Code Specialist
          </motion.div>

          <div className="hero-heading">
            <motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', marginRight: '0.2em' }}
              >
                Sakthi
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', marginRight: '0.2em' }}
              >
                Kumaran
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', marginRight: '0.2em' }}
              >
                V
              </motion.span>
             
            </motion.h1>
          </div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            UI/UX Designer with 5+ years building enterprise SaaS interfaces and a strong design-to-code workflow. I pair design craft with HTML, CSS, Angular, and AI-assisted tooling to ship faster, reduce handoff friction, and keep systems consistent at scale.
          </motion.p>

          <div className="hero-actions">
            <motion.div
              className="hero-profile-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="hero-stat-row">
                <div>
                  <strong>5+ years</strong>
                  <span>Enterprise SaaS design</span>
                </div>
                <div>
                  <strong>20+ screens</strong>
                  <span>Delivered per quarter</span>
                </div>
                <div>
                  <strong>50% faster</strong>
                  <span>Concept to prototype cycles</span>
                </div>
              </div>

              <div className="hero-link-list">
                {profileLinks.map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer">
                    <span className="hero-link-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero-right">
          <motion.div 
            className="hero-portrait-wrapper"
            style={{ x: portraitX, y: portraitY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <img 
              src="/designer_hero.png" 
              alt="Sakthi Kumaran portrait" 
              className="hero-portrait"
            />
            <div className="hero-portrait-overlay" />
          </motion.div>

          {/* Dynamic Badges */}
          <motion.div 
            className="badge-pill"
            style={{ position: 'absolute', top: '15%', right: '-5%', zIndex: 10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="meta-dot"></span>
            Enterprise SaaS UI/UX
          </motion.div>

          <motion.div 
            className="intro-snippet"
            style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '220px', zIndex: 10 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Designing intuitive enterprise products with a focus on usability, collaboration, and seamless execution.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
