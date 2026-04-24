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
    context: 'Designated as Product Support Engineer',
    highlights: [
      'Built AI-assisted design workflows with Google Stitch for enterprise dashboard ideation, reducing concept-to-prototype time from 3 days to 4 hours.',
      'Delivered 20+ production-ready screens per quarter with fewer than 5% revision requests from engineering by owning the full design-to-handoff pipeline.',
      'Removed a recurring 2-week development bottleneck by writing production HTML/CSS for 8 core UI modules directly.',
    ],
  },
  {
    role: 'UI Designer',
    company: '3i Infotech Ltd., Chennai',
    period: 'Mar 2019 - Mar 2021',
    highlights: [
      'Designed 4 end-to-end financial enterprise modules used by 500+ daily users across 6 client organizations.',
      'Kept the interface visually consistent across 4 connected financial products through shared patterns and reusable UI decisions.',
      'Worked with 3 product teams in parallel and made developer handoffs clearer, faster, and easier to implement.',
      'Established a shared component library before the formal design-system phase, cutting new screen production time by more than 30%.',
    ],
  },
  {
    role: 'Trainee Engineer - Development',
    company: 'IVTL Infoview Technologies Pvt. Ltd., Chennai',
    period: 'Sep 2016 - Aug 2017',
    highlights: [
      'Developed Java and SQL modules, building the engineering foundation that now helps bridge design and frontend implementation without translation loss.',
    ],
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
      <section id="career-highlights" className="resume-career">
        <div className="container">
          <motion.div className="resume-section-head" {...fadeUp} transition={{ duration: 0.7 }}>
            <h2>Career Journey</h2>
            <p>Designing intuitive enterprise products with a focus on usability, collaboration, and seamless execution.</p>
          </motion.div>

          <div className="resume-career-list">
            {experienceItems.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                className="resume-role-card"
                {...fadeUp}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <div className="resume-role-meta">
                  <span className="resume-role-period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  {item.context ? <span className="resume-role-context">{item.context}</span> : null}
                </div>

                <ul className="resume-role-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </motion.article>
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
