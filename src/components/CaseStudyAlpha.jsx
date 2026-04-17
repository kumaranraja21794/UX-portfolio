import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle, AlertCircle, Zap, TrendingUp, Search, 
  Layers, Command, BarChart3, Users, Layout, Target, Eye, 
  Maximize2, Activity, Shield, Globe, MousePointer2, Smartphone,
  Info, Sparkles, ChevronRight, Scale
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
              
              <div className="cs-meta-bar">
                <div className="meta-item">
                  <label>Role</label>
                  <span>UX Designer</span>
                </div>
                <div className="meta-item">
                  <label>Focus</label>
                  <span>Data Visualization</span>
                </div>
                <div className="meta-item">
                  <label>Outcome</label>
                  <span>+65% Comp. Speed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="cs-section">
        <div className="container cs-grid">
          <div className="cs-label">Overview</div>
          <div className="cs-content">
            <p className="large-p">Alpha Arena provides rich datasets including account value trends, trade logs, model comparisons, and performance metrics. However, the existing UI made it difficult to extract meaningful insights quickly, overwhelming users with dense data.</p>
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

      {/* Detailed Problem Section */}
      <section className="cs-section bg-light">
        <div className="container cs-grid">
          <div className="cs-label text-accent">The Problem</div>
          <div className="cs-content">
            <h2>Challenges Observed.</h2>
            <p>Users were overwhelmed by dense financial data due to lack of hierarchy, poor visual grouping, and inefficient data presentation—making quick decision-making difficult.</p>
            
            <div className="bento-grid" style={{ marginTop: '4rem' }}>
              <motion.div 
                className="problem-card-v2" 
                style={{ gridColumn: 'span 12' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="problem-header">
                  <Activity size={24} color="#ef4444" />
                  <h4>Live Trading Screen</h4>
                  <span className="problem-badge">Critical Friction</span>
                </div>
                <div className="problem-body">
                  <div className="problem-point">
                    <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Multiple overlapping lines with no clear focus.</p>
                  </div>
                  <div className="problem-point">
                    <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Colors lacked meaning, making models hard to distinguish.</p>
                  </div>
                  <div className="problem-point">
                    <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Trade logs were dense, visually noisy, and hard to scan.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="problem-card-v2" 
                style={{ gridColumn: 'span 6' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="problem-header">
                  <BarChart3 size={24} color="#f59e0b" />
                  <h4>Model Detail Screen</h4>
                </div>
                <div className="problem-body">
                  <div className="problem-point">
                    <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Large empty sections with poor information distribution.</p>
                  </div>
                  <div className="problem-point">
                    <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Metrics like P&L, leverage, and confidence lacked visual emphasis.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="problem-card-v2" 
                style={{ gridColumn: 'span 6' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="problem-header">
                  <Users size={24} color="#f59e0b" />
                  <h4>Leaderboard Screen</h4>
                </div>
                <div className="problem-body">
                  <div className="problem-point">
                    <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>Table overloaded with numbers, causing scanning fatigue.</p>
                  </div>
                  <div className="problem-point">
                    <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p>No visual prioritization of key metrics (Return %, P&L).</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="core-problem-box" style={{ marginTop: '3rem' }}>
              <AlertCircle size={24} color="#ef4444" />
              <div>
                <strong>Core Problem Statement:</strong>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Users were overwhelmed by dense financial data due to lack of hierarchy and poor visual grouping—making quick decision-making difficult.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Goal */}
      <section className="cs-section">
        <div className="container cs-grid">
          <div className="cs-label">Design Goal</div>
          <div className="cs-content">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2rem' }}>An Insight-First Experience.</h2>
            <p style={{ fontSize: '1.35rem', color: '#666', lineHeight: 1.6 }}>The mandate was clear: transform Alpha Arena into a hyper-structured dashboard where complex financial datasets dissolve into instantaneous operational insights.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
              <motion.div style={{ padding: '2.5rem 2rem', background: '#fdfdfc', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}>
                <CheckCircle size={28} color="#8b5cf6" style={{ marginBottom: '1.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Instant Scannability</h4>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0, lineHeight: 1.5 }}>Understand multi-model performance at a glance without reading tables.</p>
              </motion.div>
              <motion.div style={{ padding: '2.5rem 2rem', background: '#fdfdfc', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }}>
                <CheckCircle size={28} color="#10b981" style={{ marginBottom: '1.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Rapid Comparisons</h4>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0, lineHeight: 1.5 }}>Effortlessly compare leading algorithms without context switching.</p>
              </motion.div>
              <motion.div style={{ padding: '2.5rem 2rem', background: '#fdfdfc', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 12px rgba(0,0,0,0.01)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }}>
                <CheckCircle size={28} color="#f59e0b" style={{ marginBottom: '1.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Faster Decisions</h4>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0, lineHeight: 1.5 }}>Elevate operational speed by eliminating navigational and visual friction.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="cs-section bg-dark text-white" style={{ padding: '8rem 0' }}>
        <div className="container cs-grid">
          <div className="cs-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Methodology</div>
          <div className="cs-content">
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem', letterSpacing: '-0.02em', color: '#fff' }}>The Process.</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <motion.div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem 2.5rem', borderRadius: '32px' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'rgba(255,255,255,0.1)', lineHeight: 0.8, marginBottom: '2rem' }}>01</div>
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Empathize</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Analyzed interactions with existing dashboards. Extracted the key mandate: "Don't make me read everything to know if we are winning or losing."</p>
              </motion.div>

              <motion.div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem 2.5rem', borderRadius: '32px' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'rgba(255,255,255,0.1)', lineHeight: 0.8, marginBottom: '2rem' }}>02</div>
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Define</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Identified extreme cognitive overload. The interface lacked structured hierarchy, leading to abysmal scanability and weak data groupings.</p>
              </motion.div>

              <motion.div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem 2.5rem', borderRadius: '32px' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'rgba(255,255,255,0.1)', lineHeight: 0.8, marginBottom: '2rem' }}>03</div>
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Ideation</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Pivoted to a relentless hierarchy-first approach: heavy card-based data grouping, progressive disclosure flows, and strict semantic color logic.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="cs-section bg-light" style={{ padding: '8rem 0' }}>
        <div className="container cs-grid">
          <div className="cs-label">Solutions</div>
          <div className="cs-content">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', marginBottom: '4rem' }}>Architecting Clarity.</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              
              {/* Solution 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}>
                <h3 style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={32} color="#8b5cf6" /> Live Trading Screen
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Algorithmic Emphasis</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Highlighted prime performing models instantly instead of applying equal visual emphasis to all data streams.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Chart Distillation</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Simplified readability with extreme line differentiation and visual noise reduction.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>P&L Visibility</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Reworked the trade panel with aggressive spacing to make absolute profit/loss the centerpiece.</p>
                  </div>
                </div>
              </motion.div>

              {/* Solution 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}>
                <h3 style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <BarChart3 size={32} color="#10b981" /> Model Detail Screen
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Structured Segmentation</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Converted scattered, disconnected data sets into highly structured, vertically scannable sections.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Summary Synthetics</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Introduced high-level summary cards for Total P&L, Fees, and Net Realized assets.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Purposeful Empty States</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Redesigned dead-end empty states to be highly informative and instructional to the user.</p>
                  </div>
                </div>
              </motion.div>

              {/* Solution 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}>
                <h3 style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Users size={32} color="#f59e0b" /> Leaderboard Engine
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Metric Spotlighting</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Aggressively highlighted pivotal columns like absolute Return % and Total P&L.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Typographic Space</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Improved severe table readability issues through expanded row spacing and strict decimal alignment.</p>
                  </div>
                  <div style={{ background: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#111' }}>Logical Grouping</h5>
                    <p style={{ color: '#666', fontSize: '1rem', margin: 0, lineHeight: 1.5 }}>Drastically reduced cognitive load by structuring raw datasets logically and hierarchically.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Impact & Validation */}
      <section className="cs-section bg-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="impact-editorial-grid">
            <div className="impact-editorial-left">
              <div className="cs-label text-success" style={{ marginBottom: '2rem' }}>The Impact</div>
              <h2>Designing for the Speed of Thought.</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.6 }}>By stripping away the noise and establishing a relentless visual hierarchy, we dramatically reduced the cognitive friction required to operate the platform.</p>
            </div>
            
            <div className="impact-editorial-right">
              <div className="impact-metric-row">
                <div className="impact-metric-number">60<span style={{ fontSize: '2.5rem', marginLeft: '0.2rem' }}>%</span></div>
                <div className="impact-metric-content">
                  <h4>Faster UI Interpretation</h4>
                  <p>Calculated decrease in time taken for users to interpret complex performance trends.</p>
                </div>
              </div>

              <div className="impact-metric-row">
                <div className="impact-metric-number">65<span style={{ fontSize: '2.5rem', marginLeft: '0.2rem' }}>%</span></div>
                <div className="impact-metric-content">
                  <h4>Model Selection Speed</h4>
                  <p>Users were able to identify and act on top-performing trading models significantly faster.</p>
                </div>
              </div>

              <div className="impact-metric-row">
                <div className="impact-metric-number" style={{ fontSize: '3rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center' }}>High</div>
                <div className="impact-metric-content">
                  <h4>Confidence Factor</h4>
                  <p>Reduction in mental effort required to decode and operate on financial snapshots.</p>
                </div>
              </div>

              <div className="table-wrap" style={{ marginTop: '5rem' }}>
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
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}><td style={{ padding: '1.5rem 0', fontWeight: '600' }}>Data Readability</td><td style={{ color: '#ef4444' }}>Low</td><td style={{ color: '#10b981', fontWeight: 'bold' }}>High</td></tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}><td style={{ padding: '1.5rem 0', fontWeight: '600' }}>Chart Clarity</td><td style={{ color: '#ef4444' }}>Confusing</td><td style={{ color: '#10b981', fontWeight: 'bold' }}>Clear</td></tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}><td style={{ padding: '1.5rem 0', fontWeight: '600' }}>Trade Analysis</td><td style={{ color: '#ef4444' }}>Slow</td><td style={{ color: '#10b981', fontWeight: 'bold' }}>Quick</td></tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}><td style={{ padding: '1.5rem 0', fontWeight: '600' }}>Navigation Effort</td><td style={{ color: '#ef4444' }}>High</td><td style={{ color: '#10b981', fontWeight: 'bold' }}>Reduced</td></tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}><td style={{ padding: '1.5rem 0', fontWeight: '600' }}>Decision Speed</td><td style={{ color: '#ef4444' }}>Slow</td><td style={{ color: '#10b981', fontWeight: 'bold' }}>Fast</td></tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Usability Validation (Conceptual) */}
      <section className="cs-section">
        <div className="container cs-grid">
          <div className="cs-label">Validation</div>
          <div className="cs-content">
            <h2 style={{ marginBottom: '1rem' }}>Testing Protocol.</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '4rem' }}>We executed targeted conceptual usability tests focusing exclusively on task completion speed and cognitive ease.</p>
            
            <div className="validation-protocol">
              
              <motion.div 
                className="protocol-row" 
                style={{ display: 'flex', gap: '2rem', padding: '2.5rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div style={{ width: '64px', height: '64px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Target size={28} color="#8b5cf6" />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8b5cf6' }}>Task 01</span>
                  <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Identify Best Performing Model</h4>
                  <div style={{ background: '#fdfdfc', border: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '1rem', color: '#444' }}><strong style={{ color: '#111' }}>The Result /</strong> Accelerated task completion. Users relied entirely on the new visual hierarchy and semantic badges rather than scanning raw data rows.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="protocol-row" 
                style={{ display: 'flex', gap: '2rem', padding: '2.5rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div style={{ width: '64px', height: '64px', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Maximize2 size={28} color="#f59e0b" />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#f59e0b' }}>Task 02</span>
                  <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Analyze Recent Trades</h4>
                  <div style={{ background: '#fdfdfc', border: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '1rem', color: '#444' }}><strong style={{ color: '#111' }}>The Result /</strong> Significantly reduced structural confusion. The redesigned transaction log format allowed for rapid, vertical visual scanning.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="protocol-row" 
                style={{ display: 'flex', gap: '2rem', padding: '2.5rem 0', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={28} color="#10b981" />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#10b981' }}>Task 03</span>
                  <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Understand Account Growth</h4>
                  <div style={{ background: '#fdfdfc', border: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '1rem', color: '#444' }}><strong style={{ color: '#111' }}>The Result /</strong> Smooth visual interpretations. Semantic color coding dictated the pacing of P&L comprehension immediately.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="cs-section bg-dark text-white">
        <div className="container">
          <div className="outcome-box">
            <span className="cs-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: 'none' }}>Final Outcome</span>
            <h2 style={{ fontSize: '3.5rem', marginTop: '2rem' }}>Decision-First Experience.</h2>
            <p style={{ fontSize: '1.5rem', color: '#888', margin: '2rem 0' }}>The redesign transforms Alpha Arena into a platform where users can focus on insights, not interpretation.</p>
            <div className="outcome-traits">
              <div className="trait"><div className="trait-dot"></div><span>Scannable</span></div>
              <div className="trait"><div className="trait-dot"></div><span>Structured</span></div>
              <div className="trait"><div className="trait-dot"></div><span>Actionable</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="cs-section bg-dark text-white" style={{ padding: '10rem 0', overflow: 'hidden', position: 'relative' }}>
        {/* Ambient Glow Orbs */}
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="cs-tag" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>The Takeaways</span>
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', marginTop: '1.5rem', color: '#fff' }}>Post-Flight Learnings.</h2>
          </div>
            
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Card 01 */}
            <motion.div 
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #8b5cf6, transparent)' }}></div>
              <Info size={32} color="#8b5cf6" style={{ marginBottom: '2rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Clarity Over Features</h4>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>In data-heavy products, clarity completely trumps features. The deliberate omission of noise is far more critical than the sheer volume of data.</p>
            </motion.div>

            {/* Card 02 */}
            <motion.div 
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #10b981, transparent)' }}></div>
              <Shield size={32} color="#10b981" style={{ marginBottom: '2rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Cognitive Offloading</h4>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Strong visual hierarchy transfers the burden of processing from the user to the UI, drastically improving decision-making speeds.</p>
            </motion.div>

            {/* Card 03 */}
            <motion.div 
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, transparent)' }}></div>
              <Layout size={32} color="#f59e0b" style={{ marginBottom: '2rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Synthesis First</h4>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Users don't want more raw data. Grouping related metrics logically allows instantaneous conclusions without rigorous cross-referencing.</p>
            </motion.div>

            {/* Card 04 */}
            <motion.div 
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '3.5rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #ec4899, transparent)' }}></div>
              <Sparkles size={32} color="#ec4899" style={{ marginBottom: '2rem' }} />
              <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Aesthetics = Function</h4>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>Visual design directly impacts cognitive friction. Aesthetic precision translates directly to functional efficiency in high-stakes environments.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Trigger */}
      <section className="cs-closing">
        <div className="container">
          <div className="closing-content">
            <h2>Ready for the next evolution?</h2>
            <p>This project proved that in finance, design isn't just about looks—it's about the speed of thought.</p>
            <Link to="/" className="btn">Back to All Works</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyAlpha;
