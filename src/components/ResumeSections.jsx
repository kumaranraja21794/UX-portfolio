import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Code2,
  Sparkles,
  SwatchBook,
} from 'lucide-react';

const experienceItems = [
  {
    role: 'UI Designer',
    company: 'Azentio Software Pvt. Ltd., Chennai',
    period: 'Mar 2021 - Present',
  },
  {
    role: 'UI Designer',
    company: '3i Infotech Ltd., Chennai',
    period: 'Mar 2019 - Mar 2021',
  },
  {
    role: 'Trainee Engineer - Development',
    company: 'IVTL Infoview Technologies Pvt. Ltd., Chennai',
    period: 'Sep 2016 - Aug 2017',
  },
];

const toolkitItems = [
  {
    title: 'AI Design Toolkit',
    icon: Sparkles,
    items: ['Figma AI', 'Make', 'Google Stitch', 'Framer AI', 'v0 by Vercel'],
  },
  {
    title: 'Core Design',
    icon: SwatchBook,
    items: ['Advanced Figma', 'Variables & tokens', 'Design systems', 'Component architecture', 'Responsive design', 'WCAG accessibility'],
  },
  {
    title: 'Design to Code',
    icon: Code2,
    items: ['HTML5', 'CSS3', 'Angular', 'Production-ready UI implementation', 'Developer-friendly handoff'],
  },
  {
    title: 'Process',
    icon: BriefcaseBusiness,
    items: ['Interaction design', 'Wireframing', 'Prototyping', 'Developer handoff', 'Usability heuristics', 'A/B test interpretation'],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const ResumeSections = () => {
  return (
    <>
      <section id="career-highlights" className="resume-career-dark">
        <div className="container">
          <motion.div className="resume-section-head" {...fadeUp} transition={{ duration: 0.7 }}>
            <span>Career Journey</span>
            <h2>Experience</h2>
            <p>Designing intuitive enterprise products with a focus on usability, collaboration, and seamless execution.</p>
          </motion.div>

          <div className="journey-timeline">
            {experienceItems.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                className="journey-item"
                {...fadeUp}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Left Column: Company & Period */}
                <div className="journey-left">
                  <h3 className="journey-company">{item.company}</h3>
                  <p className="journey-period">{item.period}</p>
                </div>

                {/* Center: Timeline Line & Dot */}
                <div className="journey-center">
                  <div className="journey-line"></div>
                  <div className={`journey-dot ${index === 1 ? 'dot-gray' : ''}`}>
                    <div className="dot-inner"></div>
                  </div>
                </div>

                {/* Right Column: Role */}
                <div className="journey-right">
                  <h3 className="journey-role">{item.role}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="toolkit" className="resume-toolkit">
        <div className="container">
          <motion.div className="resume-section-head" {...fadeUp} transition={{ duration: 0.7 }}>
            <span>Skills & AI Toolkit</span>
            <h2>Skills & Expertise</h2>
            <p>A balance of interface design, systems thinking, frontend fluency, and AI-assisted workflow acceleration.</p>
          </motion.div>

          <div className="resume-toolkit-grid">
            {toolkitItems.map(({ title, icon: Icon, items }, index) => (
              <motion.article
                key={title}
                className="resume-card resume-toolkit-card"
                {...fadeUp}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <div className="resume-card-icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <div className="resume-pill-wrap">
                  {items.map((entry) => (
                    <span key={entry} className="resume-pill">
                      {entry}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ResumeSections;
