import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, AlertCircle, TrendingUp,
  BarChart3, Users, Layout, Target,
  Maximize2, Activity, Shield,
  Info, Sparkles, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonSlider = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div 
      ref={containerRef}
      className="before-after-slider" 
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={before} alt="Before" className="slider-image" />
      <div 
        className="slider-image after" 
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <img src={after} alt="After" className="slider-image" />
      </div>
      <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
        <div className="handle-circle">
          <Scale size={24} />
        </div>
      </div>
      <div className="label-before">Before</div>
      <div className="label-after">After</div>
    </div>
  );
};

const CaseStudyAlpha = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const comparisonData = {
    dashboard: {
      before: '/old-dash.png',
      after: '/new-dash.png',
      title: 'Main Trading Dashboard',
      desc: 'Transformed a cluttered data-dump into a hierarchy-first strategic dashboard.'
    },
    detail: {
      before: '/old-model.png', // Assuming these exist, otherwise placeholder
      after: '/new-model.png',
      title: 'Model Detail View',
      desc: 'Optimizing information distribution and emphasizing key performance metrics.'
    },
    leaderboard: {
      before: '/old-lead.png',
      after: '/new-lead.png', // Placeholder for actual leaderboard image if separate
      title: 'Leaderboard Analytics',
      desc: 'Reducing cognitive load through visual grouping and metric prioritization.'
    }
  };

  const snapshotCards = [
    {
      title: 'Challenge',
      body: 'The platform surfaced rich trading data, but users had to read too much before they could understand who was winning and why.',
    },
    {
      title: 'Goal',
      body: 'Create an insight-first experience that improves scanability, speeds up comparison, and reduces cognitive load.',
    },
    {
      title: 'Outcome',
      body: 'The redesign improved interpretation speed, accelerated model selection, and made core signals much easier to act on.',
    },
  ];

  const challengeSolutionCards = [
    {
      icon: Activity,
      color: '#8b5cf6',
      title: 'Live Trading Screen',
      challenges: [
        'Overlapping trend lines created noise.',
        'Trade logs were dense and hard to scan.',
      ],
      solutions: [
        'Highlighted top-performing models first.',
        'Reduced chart noise and prioritized P&L visibility.',
      ],
    },
    {
      icon: BarChart3,
      color: '#10b981',
      title: 'Model Detail Screen',
      challenges: [
        'Large empty areas weakened information hierarchy.',
        'Key metrics lacked emphasis.',
      ],
      solutions: [
        'Restructured data into vertically scannable sections.',
        'Added summary cards for the most critical financial signals.',
      ],
    },
    {
      icon: Users,
      color: '#f59e0b',
      title: 'Leaderboard Screen',
      challenges: [
        'Metric-heavy tables caused scanning fatigue.',
        'Important KPIs were buried in raw numbers.',
      ],
      solutions: [
        'Spotlighted core metrics such as Return % and Total P&L.',
        'Improved spacing, grouping, and number alignment.',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      body: 'Reviewed the existing dashboard to pinpoint where users were forced to read instead of scan.',
    },
    {
      number: '02',
      title: 'Prioritize',
      body: 'Defined a hierarchy-first system so the most important signals surfaced immediately.',
    },
    {
      number: '03',
      title: 'Refine',
      body: 'Used grouped cards, semantic color, and clearer layouts to reduce friction across key screens.',
    },
  ];

  const validationTasks = [
    {
      icon: Target,
      color: '#8b5cf6',
      task: 'Identify Best Performing Model',
      result: 'Users relied on visual hierarchy and badges instead of scanning raw rows.',
    },
    {
      icon: Maximize2,
      color: '#f59e0b',
      task: 'Analyze Recent Trades',
      result: 'The redesigned log format made vertical scanning noticeably faster and easier.',
    },
    {
      icon: TrendingUp,
      color: '#10b981',
      task: 'Understand Account Growth',
      result: 'Semantic color and cleaner chart structure improved interpretation speed.',
    },
  ];

  const impactMetrics = [
    {
      value: '60%',
      title: 'Faster UI Interpretation',
      body: 'Reduced the time needed to read complex performance views.',
    },
    {
      value: '65%',
      title: 'Faster Model Selection',
      body: 'Helped users identify top-performing trading models much quicker.',
    },
    {
      value: 'High',
      title: 'Confidence Factor',
      body: 'Lowered the mental effort required to decode financial snapshots.',
    },
  ];

  const improvementRows = [
    ['Data Readability', 'Low', 'High'],
    ['Chart Clarity', 'Confusing', 'Clear'],
    ['Trade Analysis', 'Slow', 'Quick'],
    ['Navigation Effort', 'High', 'Reduced'],
    ['Decision Speed', 'Slow', 'Fast'],
  ];

  const learningCards = [
    {
      icon: Info,
      color: '#8b5cf6',
      title: 'Clarity Over Features',
      body: 'In data-heavy products, removing noise creates more value than adding more surface area.',
    },
    {
      icon: Shield,
      color: '#10b981',
      title: 'Cognitive Offloading',
      body: 'Strong hierarchy lets the interface do more of the processing work for the user.',
    },
    {
      icon: Layout,
      color: '#f59e0b',
      title: 'Synthesis First',
      body: 'Users need grouped meaning, not scattered raw metrics.',
    },
  ];

  return (
    <div className="case-study-page">
      <div className="cs-watermark">ARENA</div>
      
      {/* Back Button */}
      <div className="container" style={{ position: 'relative', zIndex: 100 }}>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Header */}
      <header className="cs-hero">
        <div className="container">
          <motion.div 
            className="cs-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Case Study — AI Trading Platform
          </motion.div>
          
          <div className="cs-hero-grid">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Alpha Arena: <br />
              <span>Decoding the Complexity of AI Trading</span>
            </motion.h1>
            
            <motion.div 
              className="cs-lead-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="cs-lead">
                Alpha Arena is an AI trading competition platform where multiple models execute trades and compete based on performance. I led the UX transformation to turn dense financial data into an insight-first dashboard.
              </p>

              <div className="cs-meta-strip">
                <div className="cs-meta-strip-item">
                  <label>Role</label>
                  <span>UX Designer</span>
                </div>
                <div className="cs-meta-strip-divider" />
                <div className="cs-meta-strip-item">
                  <label>Focus</label>
                  <span>Data Visualization</span>
                </div>
                <div className="cs-meta-strip-divider" />
                <div className="cs-meta-strip-item">
                  <label>Outcome</label>
                  <span>+65% Comp. Speed</span>
                </div>
                <div className="cs-meta-strip-divider" />
                <div className="cs-meta-strip-item cs-meta-strip-cta">
                  <a
                    href="https://www.figma.com/proto/7N19TYywTBVaZj4IA4jhmx/Sakthi-Kumaran-s-team-library?page-id=418%3A2&node-id=1004-1163&p=f&viewport=233%2C-2344%2C0.32&t=RpaANh85uJ9l3jx9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1004%3A1163&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-figma-btn"
                  >
                    <svg width="15" height="15" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                      <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                      <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                      <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                      <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                    </svg>
                    View Prototype
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Snapshot Section */}
      <section className="cs-section cs-section-tight">
        <div className="container cs-grid">
          <div className="cs-label">Snapshot</div>
          <div className="cs-content">
            <h2>From dense trading data to faster decisions.</h2>
            <p className="large-p">Alpha Arena provides account value trends, trade logs, model comparisons, and performance metrics. The redesign focused on reducing cognitive load so users could interpret the platform faster and act with more confidence.</p>

            <div className="cs-compact-grid" style={{ marginTop: '2.5rem' }}>
              {snapshotCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="cs-compact-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="cs-compact-eyebrow">{card.title}</span>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Comparison Slider */}
      <section className="cs-section bg-dark text-white">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="cs-tag" style={{ color: '#8b5cf6', borderColor: '#8b5cf6' }}>Interactive Comparison</span>
            <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>The Evolution of Arena.</h2>
            <p style={{ maxWidth: '700px', margin: '2rem auto', opacity: 0.7 }}>Interact with the slider below to see how we transformed the interface from a data-heavy technical view into a modern, decision-first experience.</p>
          </div>

          <div className="comparison-container">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem', padding: '0 1rem' }}>
              <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', padding: '0.4rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', overflowX: 'auto', WebkitOverflowScrolling: 'touch', maxWidth: '100%' }}>
                {Object.keys(comparisonData).map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      position: 'relative',
                      background: 'transparent',
                      border: 'none',
                      padding: '1rem 2rem',
                      color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.4)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      zIndex: 1,
                      transition: 'color 0.3s ease',
                      outline: 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(139, 92, 246, 0.2)',
                          boxShadow: 'inset 0 0 0 1px rgba(139, 92, 246, 0.4)',
                          borderRadius: '100px',
                          zIndex: -1
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {comparisonData[tab].title}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              key={activeTab}
              className="slider-wrapper"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ComparisonSlider 
                before={comparisonData[activeTab].before} 
                after={comparisonData[activeTab].after} 
              />
            </motion.div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#8b5cf6' }}>{comparisonData[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="cs-section bg-light">
        <div className="container cs-grid">
          <div className="cs-label text-accent">Challenge + Solution</div>
          <div className="cs-content">
            <h2>Challenge the noise. Surface the signal.</h2>
            <p>Instead of splitting the story across separate problem and goal sections, the redesign now reads as a direct before-to-after narrative across the three core product surfaces.</p>

            <div className="cs-compact-grid cs-solution-grid" style={{ marginTop: '2.5rem' }}>
              {challengeSolutionCards.map(({ icon: Icon, color, title, challenges, solutions }, index) => (
                <motion.article
                  key={title}
                  className="cs-solution-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="cs-solution-head">
                    <span className="cs-solution-icon" style={{ color }}>
                      <Icon size={22} />
                    </span>
                    <h3>{title}</h3>
                  </div>

                  <div className="cs-solution-columns">
                    <div>
                      <span className="cs-compact-eyebrow">Challenges</span>
                      <ul className="cs-mini-list">
                        {challenges.map((item) => (
                          <li key={item}>
                            <AlertCircle size={16} color={color} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="cs-compact-eyebrow">Redesign Moves</span>
                      <ul className="cs-mini-list">
                        {solutions.map((item) => (
                          <li key={item}>
                            <CheckCircle size={16} color={color} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach + Validation */}
      <section className="cs-section bg-dark text-white cs-section-compact-dark">
        <div className="container cs-grid">
          <div className="cs-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Methodology</div>
          <div className="cs-content">
            <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', letterSpacing: '-0.02em', color: '#fff' }}>Compact process, faster story.</h2>

            <div className="cs-compact-grid cs-process-grid">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  className="cs-process-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="cs-process-number">{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="cs-validation-inline">
              <div>
                <span className="cs-compact-eyebrow">Validation</span>
                <h3>Tested against real user tasks.</h3>
                <p>Rather than giving validation its own long section, the task outcomes now sit directly under the process so the story moves faster.</p>
              </div>

              <div className="cs-validation-list">
                {validationTasks.map(({ icon: Icon, color, task, result }, index) => (
                  <motion.article
                    key={task}
                    className="cs-validation-row"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="cs-validation-icon-col">
                      <span className="cs-solution-icon" style={{ color }}>
                        <Icon size={20} />
                      </span>
                    </div>

                    <div className="cs-validation-copy">
                      <span className="cs-compact-eyebrow">Task 0{index + 1}</span>
                      <h4>{task}</h4>
                      <p>{result}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="cs-section bg-light cs-section-tight">
        <div className="container">
          <div className="impact-editorial-grid">
            <div className="impact-editorial-left">
              <div className="cs-label text-success" style={{ marginBottom: '2rem' }}>The Impact</div>
              <h2>Designing for the Speed of Thought.</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>By stripping away the noise and establishing a relentless visual hierarchy, we dramatically reduced the cognitive friction required to operate the platform.</p>
              <div className="outcome-traits" style={{ marginTop: '2rem' }}>
                <div className="trait"><div className="trait-dot"></div><span>Scannable</span></div>
                <div className="trait"><div className="trait-dot"></div><span>Structured</span></div>
                <div className="trait"><div className="trait-dot"></div><span>Actionable</span></div>
              </div>
            </div>
            
            <div className="impact-editorial-right">
              <div className="cs-impact-cards">
                {impactMetrics.map((metric) => (
                  <div key={metric.title} className="cs-impact-card">
                    <div className="impact-metric-number">{metric.value}</div>
                    <div className="impact-metric-content">
                      <h4>{metric.title}</h4>
                      <p>{metric.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="table-wrap" style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#aaa' }}>Usability Improvements</h3>
                <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #000', textAlign: 'left' }}>
                      <th style={{ padding: '1rem 0' }}>Aspect</th>
                      <th style={{ padding: '1rem 0' }}>Before</th>
                      <th style={{ padding: '1rem 0' }}>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {improvementRows.map(([aspect, before, after]) => (
                      <tr key={aspect} style={{ borderBottom: '1px solid #eaeaea' }}>
                        <td style={{ padding: '1.1rem 0', fontWeight: '600' }}>{aspect}</td>
                        <td style={{ color: '#ef4444' }}>{before}</td>
                        <td style={{ color: '#10b981', fontWeight: 'bold' }}>{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="cs-section bg-dark text-white" style={{ padding: '6.5rem 0', overflow: 'hidden', position: 'relative' }}>
        {/* Ambient Glow Orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="cs-tag" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>The Takeaways</span>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', marginTop: '1.5rem', color: '#fff' }}>Post-Flight Learnings.</h2>
          </div>
            
          <div className="cs-compact-grid">
            {learningCards.map(({ icon: Icon, color, title, body }, index) => (
              <motion.article
                key={title}
                className="cs-learning-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="cs-learning-stripe" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <Icon size={28} color={color} style={{ marginBottom: '1.25rem' }} />
                <h4>{title}</h4>
                <p>{body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Trigger */}
      <section className="cs-closing">
        <div className="container">
          <div className="closing-content">
            <h2>Ready for the next evolution?</h2>
            <p>This project proved that in finance, design isn't just about looks—it's about the speed of thought.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/" className="btn">Back to All Works</Link>
              <a
                href="https://www.figma.com/proto/7N19TYywTBVaZj4IA4jhmx/Sakthi-Kumaran-s-team-library?page-id=418%3A2&node-id=1004-1163&p=f&viewport=233%2C-2344%2C0.32&t=RpaANh85uJ9l3jx9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1004%3A1163&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-figma"
              >
                <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                </svg>
                View in Figma
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyAlpha;
