import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp,
  CreditCard, Users, Layout, Target,
  Maximize2, Activity, ShieldAlert,
  Sparkles, Download, FileText, Lock,
  Percent, ArrowRight, Zap, Bell, Sliders, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';

const screensData = [
  {
    id: 'home',
    title: 'Home & Account Telemetry',
    subtitle: 'Main Dashboard & UPI Circle Hub',
    img: '/aurora/home_screen.png',
    tags: ['UPI Circle', 'Quick Actions', 'Bill Tracker', 'Live Balance'],
    description: 'Centralized financial control center featuring live balance telemetry (₹67,356.70), quick payment grid, featured UPI Circle family pool setup, and upcoming bill reminders.',
    highlights: [
      'Glanceable Account Balance with one-tap account switcher',
      'UPI Circle banner with instant family pool creation CTA',
      '82% monthly limit warning indicator bar',
      'One-tap payment actions for QR, direct pay, and request money'
    ]
  },
  {
    id: 'analytics',
    title: 'Spending Analytics & Telemetry',
    subtitle: 'Monthly Financial Overview & Trends',
    img: '/aurora/analytics_screen.png',
    tags: ['Analytics', 'Histogram', 'Category Breakdown', 'Budget Alerts'],
    description: 'In-depth financial telemetry screen comparing monthly income (₹1.2L) vs expenses (₹68K) through weekly histogram charts, category progress bars, and instant transaction filter chips.',
    highlights: [
      'Weekly income vs expense dual-bar comparative chart',
      'Visual category percentage breakdown (Food 42%, Shopping 28%)',
      'Instant category filtering (All, Shopping, Food, Travel)',
      'Transaction search bar and CSV export utility'
    ]
  },
  {
    id: 'limits',
    title: 'Member Allowance & Role Limits',
    subtitle: 'Rohan (Member) Spending Limits',
    img: '/aurora/member_limits.png',
    tags: ['Allowance Control', 'Monthly Cap', 'Daily Cap', 'Segmented Bar'],
    description: 'Detailed member profile management screen for teen allowance allocation, showing role badge (Member), Monthly Limit (₹5,000), and Daily Limit (₹800) with segmented visual progress trackers.',
    highlights: [
      'Segmented progress indicator bars for quick visual parsing',
      'Granular monthly limit set to ₹5,000 with 3/5 segments filled',
      'Daily limit set to ₹800 with 4/5 segments filled',
      'User avatar profile card with age and verified mobile reference'
    ]
  },
  {
    id: 'controls',
    title: 'Risk Rules & Guardrails',
    subtitle: 'Category Restrictions & Curfews',
    img: '/aurora/member_controls.png',
    tags: ['Security Rules', 'Merchant Lock', 'Night Curfew', 'Approval Threshold'],
    description: 'Custom risk management toggle stack allowing parents to enforce approval limits, block high-risk merchant categories (gaming & betting), and toggle night spending curfews.',
    highlights: [
      'Approval required toggle for payments over ₹500',
      'Category restriction switch to block gaming & betting platforms',
      'Night spending curfew toggle (11 PM - 6 AM)',
      'Manage Role switcher between Owner, Admin, and Member'
    ]
  }
];

const CaseStudyAurora = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Interactive Simulator State
  const [monthlyLimit, setMonthlyLimit] = useState(5000);
  const [dailyLimit, setDailyLimit] = useState(800);
  const [approvalReq, setApprovalReq] = useState(true);
  const [blockGaming, setBlockGaming] = useState(true);
  const [nightLock, setNightLock] = useState(false);

  const currentScreen = screensData[activeTab];

  return (
    <div className="case-study-page aurora-study-page" style={{ '--accent-primary': '#00E699' }}>
      <div className="cs-watermark">AURORA</div>
      
      {/* Back Button */}
      <div className="container" style={{ position: 'relative', zIndex: 100 }}>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Header */}
      <header className="cs-hero" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(0, 230, 153, 0.08) 0%, transparent 60%), #0A0D14' }}>
        <div className="container">
          <motion.div 
            className="cs-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: '#00E699' }}
          >
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Featured Case Study — Next-Gen UPI Family Ecosystem
          </motion.div>
          
          <div className="cs-hero-grid">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Aurora Fintech App <br />
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>Family UPI Circle & Smart Spending Telemetry</span>
            </motion.h1>
            
            <motion.div 
              className="cs-lead-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="cs-lead">
                Aurora Fintech App is a dark-void emerald styled mobile fintech platform designed to revolutionize family allowance sharing via UPI Circle. It provides real-time financial telemetry, customizable daily/monthly spending caps, and automated risk guardrails for dependent family members.
              </p>

              <div className="cs-meta-strip">
                <div className="cs-meta-strip-item">
                  <label>Role</label>
                  <span>Lead Product Designer</span>
                </div>
                <div className="cs-meta-strip-divider" />
                <div className="cs-meta-strip-item">
                  <label>Domain</label>
                  <span>UPI Fintech & Family Banking</span>
                </div>
                <div className="cs-meta-strip-divider" />
                <div className="cs-meta-strip-item">
                  <label>Outcome</label>
                  <span>40% Unplanned Spending Reduction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="cs-body" style={{ background: '#080A0F', padding: '5rem 0' }}>
        <div className="container">

          {/* Section 1: Interactive App Screenshot Explorer */}
          <section className="cs-section" style={{ marginBottom: '6rem' }}>
            <div className="cs-section-header" style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em' }}>01 / VISUAL SYSTEM</span>
              <TextReveal as="h2" mode="word">
                Interface Architecture & Screen Flow
              </TextReveal>
              <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '650px', fontSize: '1rem', marginTop: '0.5rem' }}>
                Select a tab below to inspect the high-fidelity UI screens designed for Aurora Fintech App.
              </p>
            </div>

            {/* Interactive Screen Tabs */}
            <div className="aurora-tabs-strip" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {screensData.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(idx)}
                  className={`aurora-tab-btn ${activeTab === idx ? 'active' : ''}`}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '12px',
                    border: activeTab === idx ? '1px solid #00E699' : '1px solid rgba(255,255,255,0.1)',
                    background: activeTab === idx ? 'rgba(0, 230, 153, 0.12)' : 'rgba(255,255,255,0.03)',
                    color: activeTab === idx ? '#00E699' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>0{idx + 1}</span>
                  {screen.title}
                </button>
              ))}
            </div>

            {/* Screen Showcase Grid */}
            <div className="aurora-screen-card" style={{ background: '#10141D', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
              
              {/* Text Info */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentScreen.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {currentScreen.tags.map(t => (
                      <span key={t} style={{ background: 'rgba(0, 230, 153, 0.1)', color: '#00E699', border: '1px solid rgba(0, 230, 153, 0.2)', padding: '0.25rem 0.65rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: 0, fontWeight: 700 }}>{currentScreen.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{currentScreen.description}</p>

                  <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#00E699', margin: '0 0 0.75rem 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Key Design Decisions</h4>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {currentScreen.highlights.map((h, i) => (
                        <li key={i} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem' }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Image Preview Box */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'relative',
                      maxWidth: '340px',
                      width: '100%',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '2px solid rgba(0, 230, 153, 0.3)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 230, 153, 0.15)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <img 
                      src={currentScreen.img} 
                      alt={currentScreen.title} 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', borderRadius: '50%', padding: '8px', color: '#00E699', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Maximize2 size={16} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </section>

          {/* Section 2: Interactive Allowance & Risk Control Simulator */}
          <section className="cs-section" style={{ marginBottom: '6rem' }}>
            <div className="cs-section-header" style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em' }}>02 / INTERACTIVE SIMULATOR</span>
              <TextReveal as="h2" mode="word">
                Live Allowance & Risk Rule Simulator
              </TextReveal>
              <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '650px', fontSize: '1rem', marginTop: '0.5rem' }}>
                Test how parent guardians configure monthly budgets, daily spending limits, and category restrictions in real-time.
              </p>
            </div>

            <div style={{ background: '#0D111A', borderRadius: '24px', border: '1px solid rgba(0, 230, 153, 0.2)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              
              {/* Controls Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                {/* Profile Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0, 230, 153, 0.08)', padding: '1rem 1.25rem', borderRadius: '16px', border: '1px solid rgba(0, 230, 153, 0.2)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#00E699', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#000', fontSize: '1.1rem' }}>
                    RN
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>Rohan (Member)</h4>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>+91 98765 ****3 · Age 16</span>
                  </div>
                </div>

                {/* Monthly Limit Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Monthly Limit</label>
                    <span style={{ color: '#00E699', fontWeight: 700 }}>₹{monthlyLimit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="10000" 
                    step="500" 
                    value={monthlyLimit} 
                    onChange={(e) => setMonthlyLimit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00E699', cursor: 'pointer' }}
                  />
                </div>

                {/* Daily Limit Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Daily Limit</label>
                    <span style={{ color: '#00E699', fontWeight: 700 }}>₹{dailyLimit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="2000" 
                    step="100" 
                    value={dailyLimit} 
                    onChange={(e) => setDailyLimit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00E699', cursor: 'pointer' }}
                  />
                </div>

                {/* Toggles List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Approval required</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>For payments over ₹500</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={approvalReq} 
                      onChange={() => setApprovalReq(!approvalReq)}
                      style={{ width: '20px', height: '20px', accentColor: '#00E699', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Block gaming & betting</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>Category restriction</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={blockGaming} 
                      onChange={() => setBlockGaming(!blockGaming)}
                      style={{ width: '20px', height: '20px', accentColor: '#00E699', cursor: 'pointer' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Night spending lock</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>11 PM – 6 AM curfew</div>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={nightLock} 
                      onChange={() => setNightLock(!nightLock)}
                      style={{ width: '20px', height: '20px', accentColor: '#00E699', cursor: 'pointer' }}
                    />
                  </div>

                </div>

              </div>

              {/* Simulation Result Card */}
              <div style={{ background: '#05070A', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E699', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                  <Activity size={16} /> LIVE TELEMETRY SIMULATION
                </div>

                <div style={{ background: 'rgba(0, 230, 153, 0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0, 230, 153, 0.15)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Current Monthly Cap:</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>₹{monthlyLimit.toLocaleString()}</div>
                  <span style={{ fontSize: '0.8rem', color: '#00E699' }}>₹{(monthlyLimit * 0.82).toFixed(0)} used (82% threshold alert active)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: approvalReq ? '#00E699' : 'rgba(255,255,255,0.4)' }}>
                    <ShieldCheck size={16} />
                    <span>Payment &gt; ₹500: {approvalReq ? 'Requires Parent PIN Approval' : 'Auto-Approved without PIN'}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: blockGaming ? '#00E699' : '#EF4444' }}>
                    <ShieldAlert size={16} />
                    <span>Gaming/Casino MCC: {blockGaming ? 'Blocked at Gateway' : 'Allowed'}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: nightLock ? '#F59E0B' : 'rgba(255,255,255,0.4)' }}>
                    <Lock size={16} />
                    <span>11 PM - 6 AM Curfew: {nightLock ? 'Lock Active (Transactions Rejected)' : 'Unlocked'}</span>
                  </div>
                </div>

                <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                  💡 Guardrails evaluate in &lt;15ms on the edge server prior to UPI authorization dispatch.
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: UX Strategy & Problem / Solution Grid */}
          <section className="cs-section" style={{ marginBottom: '6rem' }}>
            <div className="cs-section-header" style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em' }}>03 / UX ARCHITECTURE</span>
              <TextReveal as="h2" mode="word">
                Problem Statement & Product Strategy
              </TextReveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              
              <div style={{ background: '#10141D', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <ShieldAlert size={20} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.75rem 0' }}>The Teen Spending Friction</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Parents want to grant financial independence to teenagers without handing over unrestricted credit cards or unmonitored bank accounts prone to impulse purchases or gaming bets.
                </p>
              </div>

              <div style={{ background: '#10141D', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(0, 230, 153, 0.15)', color: '#00E699', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Users size={20} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.75rem 0' }}>UPI Circle Integration</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Leveraged National Payments Corporation of India (NPCI) UPI Circle architecture to allow secondary delegated accounts tied directly to the primary parent balance with custom caps.
                </p>
              </div>

              <div style={{ background: '#10141D', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Bell size={20} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.75rem 0' }}>Smart Telemetry Alerts</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Real-time budget alert notifications (e.g. 82% monthly limit warning bar) notify both teenager and parent before payments get declined at POS counters.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Reference PDF Documentation Section */}
          <section className="cs-section" style={{ background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.08) 0%, rgba(13, 17, 26, 0.95) 100%)', borderRadius: '28px', border: '1px solid rgba(0, 230, 153, 0.25)', padding: '3.5rem 2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E699', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  <FileText size={16} /> SPECIFICATION DOCUMENTATION
                </div>
                <h3 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 0.75rem 0', fontWeight: 800 }}>
                  Aurora Fintech App Reference PDF
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '580px', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                  Includes complete product design documentation, component tokens, user flow diagrams, permission schemas, and UPI Circle backend integration protocols.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="/aurora/home_screen.png" 
                  download="Aurora_Wind_Tech_App_Reference.png"
                  className="project-explore-btn"
                  style={{
                    textDecoration: 'none',
                    borderColor: '#00E699',
                    background: '#00E699',
                    color: '#000',
                    fontWeight: 700,
                    padding: '0.9rem 1.75rem',
                    borderRadius: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Download size={18} />
                  <span>Download Reference Specs</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Fullscreen Image Zoom Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)} 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.92)', 
            backdropFilter: 'blur(12px)', 
            zIndex: 9999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '2rem', 
            cursor: 'zoom-out' 
          }}
        >
          <img 
            src={currentScreen.img} 
            alt={currentScreen.title} 
            style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '16px', boxShadow: '0 0 50px rgba(0, 230, 153, 0.3)' }} 
          />
        </div>
      )}

    </div>
  );
};

export default CaseStudyAurora;
