import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp,
  CreditCard, Users, Layout, Target,
  Maximize2, Activity, ShieldAlert,
  Sparkles, Download, FileText, Lock,
  Percent, ArrowRight, Zap, Bell, Sliders, Smartphone,
  DollarSign, Check, X, RefreshCw, Layers, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';

const screensData = [
  {
    id: 'home',
    title: 'Home & Wallet Telemetry',
    subtitle: 'Central Hub & UPI Circle Manager',
    img: '/aurora/home_screen.png',
    badge: '01 / DASHBOARD',
    tags: ['UPI Circle', 'Quick Actions', 'Bill Tracker', 'Live Balance'],
    description: 'Centralized financial control center featuring live balance telemetry (₹67,356.70), quick payment matrix, featured UPI Circle family pool setup, and upcoming bill reminders.',
    metrics: [
      { label: 'Account Balance', val: '₹67,356.70' },
      { label: 'UPI Circle Pool', val: 'Active' },
      { label: 'Upcoming Bills', val: '3 Pending' }
    ],
    highlights: [
      'Glanceable account telemetry with one-tap balance reveal and UPI ID copy feature',
      'UPI Circle spotlight card driving 1-tap family spending pool onboarding',
      '82% threshold warning alert pill notifying users before budget limits trigger',
      'Circular quick-action matrix (Scan QR, Pay Anyone, Request Money, Recharge)'
    ]
  },
  {
    id: 'analytics',
    title: 'Spending Telemetry & Analytics',
    subtitle: 'Monthly Overview & Category Insights',
    img: '/aurora/analytics_screen.png',
    badge: '02 / ANALYTICS',
    tags: ['Weekly Chart', 'Category Distribution', 'Budget Alert', 'Transaction Filter'],
    description: 'In-depth financial telemetry screen comparing monthly income (₹1.2L) vs expenses (₹68K) through weekly dual-bar charts, category progress bars, and instant transaction filters.',
    metrics: [
      { label: 'Monthly Income', val: '₹1.2 Lakh' },
      { label: 'Total Expense', val: '₹68,356' },
      { label: 'Top Category', val: 'Food (42%)' }
    ],
    highlights: [
      'Weekly income vs expense dual-bar comparative histogram across 4 weeks',
      'High-precision category breakdown (Food & Drinks 42%, Shopping 28%)',
      'Instant filter chips (All, Shopping, Food, Travel) for instant drilldown',
      'Transaction search & CSV export utility for tax and accounting exports'
    ]
  },
  {
    id: 'limits',
    title: 'Member Allowance & Role Caps',
    subtitle: 'Rohan (Member) Spending Profile',
    img: '/aurora/member_limits.png',
    badge: '03 / ALLOWANCE',
    tags: ['Allowance Cap', 'Monthly Limit', 'Daily Limit', 'Segmented Bar'],
    description: 'Detailed member profile management screen for teen allowance allocation, showing role badge (Member), Monthly Limit (₹5,000), and Daily Limit (₹800) with segmented visual progress trackers.',
    metrics: [
      { label: 'Monthly Cap', val: '₹5,000' },
      { label: 'Daily Cap', val: '₹800' },
      { label: 'Member Age', val: '16 Yrs' }
    ],
    highlights: [
      'Segmented progress indicator bars for quick visual cognitive parsing',
      'Granular monthly limit set to ₹5,000 with 3/5 segments filled',
      'Daily limit set to ₹800 with 4/5 segments filled',
      'Member identity card with verified mobile number and age indicator'
    ]
  },
  {
    id: 'controls',
    title: 'Risk Guardrails & Curfews',
    subtitle: 'Merchant Category & Time Locks',
    img: '/aurora/member_controls.png',
    badge: '04 / SECURITY',
    tags: ['Approval Threshold', 'Category Lock', 'Night Curfew', 'Role Control'],
    description: 'Custom risk management toggle stack allowing parent guardians to enforce approval limits, block high-risk merchant categories (gaming & betting), and toggle night spending curfews.',
    metrics: [
      { label: 'Approval Limit', val: '> ₹500' },
      { label: 'Gaming Block', val: 'ENABLED' },
      { label: 'Night Lock', val: '11PM-6AM' }
    ],
    highlights: [
      'Approval required toggle requiring parent PIN verification for payments > ₹500',
      'Merchant Category Code (MCC 7995) restriction switch blocking betting and casino apps',
      'Night spending curfew toggle restricting transactions between 11 PM and 6 AM',
      'Segmented role permission manager (Owner, Admin, Member)'
    ]
  }
];

const designTokens = [
  { name: 'Aurora Mint', hex: '#00E699', role: 'Primary Accent & Action Calls' },
  { name: 'Void Black', hex: '#07090E', role: 'Background Canvas & Deep Contrast' },
  { name: 'Surface Dark', hex: '#111622', role: 'Bento Card Container & Navigation' },
  { name: 'Warning Amber', hex: '#F59E0B', role: 'Budget Threshold Alerts (80%+)' },
  { name: 'Alert Coral', hex: '#EF4444', role: 'Expense Indicators & High Risk Caps' }
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

  // Simulation test state
  const [simTxnAmount, setSimTxnAmount] = useState(750);
  const [simCategory, setSimCategory] = useState('Shopping');

  const currentScreen = screensData[activeTab];

  // Evaluate simulation result
  const evaluateSimulation = () => {
    if (simCategory === 'Gaming' && blockGaming) {
      return { status: 'REJECTED', reason: 'Blocked by Merchant Category Restriction (Gaming/Betting Policy)', color: '#EF4444' };
    }
    if (simTxnAmount > dailyLimit) {
      return { status: 'REJECTED', reason: `Exceeds Daily Spending Cap (Max ₹${dailyLimit})`, color: '#EF4444' };
    }
    if (simTxnAmount > 500 && approvalReq) {
      return { status: 'PENDING_APPROVAL', reason: 'Requires Parent PIN Authorization (Txn > ₹500)', color: '#F59E0B' };
    }
    return { status: 'APPROVED', reason: 'Transaction Authorized & Dispatched via UPI Circle', color: '#00E699' };
  };

  const simResult = evaluateSimulation();

  return (
    <div className="case-study-page aurora-study-page" style={{ '--accent-primary': '#00E699', background: '#07090E', color: '#fff', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Background Glow Beams */}
      <div style={{ position: 'fixed', top: 0, left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 230, 153, 0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Top Floating Navigation Bar */}
      <div className="container" style={{ position: 'relative', zIndex: 100, paddingTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.6rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', fontWeight: 600, backdropFilter: 'blur(10px)' }}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 230, 153, 0.1)', border: '1px solid rgba(0, 230, 153, 0.25)', padding: '0.4rem 1rem', borderRadius: '30px', color: '#00E699', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E699', display: 'inline-block', boxShadow: '0 0 10px #00E699' }} />
            CASE STUDY // FINTECH ECOSYSTEM
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <header style={{ position: 'relative', zIndex: 10, padding: '4rem 0 3rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ background: 'rgba(0, 230, 153, 0.15)', color: '#00E699', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(0, 230, 153, 0.3)' }}>
                MOBILE UX & FINTECH
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>• 2026 DESIGN SYSTEM</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Aurora Fintech App <br />
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Family UPI Circle & Smart Telemetry
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', maxWidth: '750px', lineHeight: 1.7, margin: '0 0 3rem 0' }}>
              Aurora Fintech App is a dark-void emerald mobile banking solution built to redefine how parents allocate allowances to teenagers via NPCI UPI Circle. It combines real-time budget telemetry, customizable spending guardrails, and category restrictions into an intuitive mobile workflow.
            </p>
          </motion.div>

          {/* Key Metrics Bento Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}
          >
            <div style={{ background: '#111622', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00E699', fontFamily: 'var(--font-heading)' }}>40%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Impulse Teen Spend Reduction</div>
            </div>

            <div style={{ background: '#111622', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>&lt; 15ms</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Edge Guardrail Telemetry Check</div>
            </div>

            <div style={{ background: '#111622', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00E699', fontFamily: 'var(--font-heading)' }}>95%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Parent Peace of Mind Rating</div>
            </div>

            <div style={{ background: '#111622', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>NPCI UPI Circle Compliant</div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Main Section Explorer */}
      <main style={{ position: 'relative', zIndex: 10, padding: '3rem 0 6rem 0' }}>
        <div className="container">

          {/* Section 1: Interactive Device Frame & Screen Explorer */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>01 / VISUAL ARCHITECTURE</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginTop: '0.25rem' }}>
                High-Fidelity Screen Showcase
              </TextReveal>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', margin: '0.5rem 0 0 0' }}>
                Select a tab below to inspect the design rationale and key micro-interactions of each mobile screen.
              </p>
            </div>

            {/* Interactive Screen Tabs Bar */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {screensData.map((screen, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: '0.85rem 1.4rem',
                      borderRadius: '16px',
                      border: isActive ? '1px solid #00E699' : '1px solid rgba(255,255,255,0.08)',
                      background: isActive ? 'rgba(0, 230, 153, 0.12)' : '#111622',
                      color: isActive ? '#00E699' : 'rgba(255,255,255,0.7)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive ? '0 0 25px rgba(0, 230, 153, 0.15)' : 'none'
                    }}
                  >
                    <Smartphone size={16} style={{ color: isActive ? '#00E699' : 'rgba(255,255,255,0.4)' }} />
                    <span>{screen.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Split Screen Grid (Phone Frame + Details Bento) */}
            <div style={{ background: '#0B0F17', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
              
              {/* Phone Mockup Frame */}
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                
                {/* Backdrop Glow behind Phone */}
                <div style={{ position: 'absolute', width: '280px', height: '550px', background: 'radial-gradient(circle, rgba(0, 230, 153, 0.25) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.7 }} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'relative',
                      maxWidth: '310px',
                      width: '100%',
                      borderRadius: '44px',
                      padding: '12px',
                      background: '#1A202C',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.15)',
                      border: '2px solid rgba(0, 230, 153, 0.3)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsZoomed(true)}
                  >
                    {/* Device Screen Frame */}
                    <div style={{ borderRadius: '34px', overflow: 'hidden', position: 'relative', background: '#000', aspectRatio: '9/19.5' }}>
                      
                      <img 
                        src={currentScreen.img} 
                        alt={currentScreen.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                      />

                      {/* Zoom Indicator */}
                      <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)', borderRadius: '50%', padding: '10px', color: '#00E699', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 230, 153, 0.3)' }}>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Details Bento Column */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00E699', letterSpacing: '0.1em' }}>
                      {currentScreen.badge}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{currentScreen.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: 0, fontFamily: 'var(--font-heading)' }}>
                    {currentScreen.title}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>
                    {currentScreen.description}
                  </p>

                  {/* Micro Metrics Strip */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', background: '#111622', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {currentScreen.metrics.map((m, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.2rem' }}>{m.label}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#00E699' }}>{m.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights List */}
                  <div style={{ background: 'rgba(0, 230, 153, 0.03)', borderRadius: '20px', border: '1px solid rgba(0, 230, 153, 0.15)', padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#00E699', margin: '0 0 1rem 0', fontWeight: 800, letterSpacing: '0.05em' }}>
                      KEY DESIGN HIGHLIGHTS
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {currentScreen.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={18} style={{ color: '#00E699', shrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </section>

          {/* Section 2: Live Interactive Allowance & Risk Control Simulator */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>02 / LIVE INTERACTIVE WIDGET</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginTop: '0.25rem' }}>
                Allowance Guardrail Simulator
              </TextReveal>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', margin: '0.5rem 0 0 0' }}>
                Adjust Rohan's member limits and test live transaction authorization rules in real-time.
              </p>
            </div>

            <div style={{ background: '#0B0F17', borderRadius: '32px', border: '1px solid rgba(0, 230, 153, 0.25)', padding: '3rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
              
              {/* Controls Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Rohan Profile Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111622', padding: '1.25rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #00E699 0%, #06B6D4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#000', fontSize: '1.2rem' }}>
                      RN
                    </div>
                    <div>
                      <h4 style={{ margin: 0, color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>Rohan (Teen Member)</h4>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>+91 98765 ****3 • Age 16</span>
                    </div>
                  </div>
                  <span style={{ background: 'rgba(0, 230, 153, 0.15)', color: '#00E699', padding: '0.4rem 0.85rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(0, 230, 153, 0.3)' }}>
                    MEMBER ROLE
                  </span>
                </div>

                {/* Slider: Monthly Limit */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <label style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>Monthly Allowance Cap</label>
                    <span style={{ color: '#00E699', fontWeight: 800, fontSize: '1.1rem' }}>₹{monthlyLimit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="10000" 
                    step="500" 
                    value={monthlyLimit} 
                    onChange={(e) => setMonthlyLimit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00E699', height: '6px', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                    <span>₹1,000</span>
                    <span>₹5,000</span>
                    <span>₹10,000</span>
                  </div>
                </div>

                {/* Slider: Daily Limit */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <label style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>Daily Transaction Cap</label>
                    <span style={{ color: '#00E699', fontWeight: 800, fontSize: '1.1rem' }}>₹{dailyLimit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="2000" 
                    step="100" 
                    value={dailyLimit} 
                    onChange={(e) => setDailyLimit(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00E699', height: '6px', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                    <span>₹100</span>
                    <span>₹800</span>
                    <span>₹2,000</span>
                  </div>
                </div>

                {/* Security Toggles Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#111622', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>Approval Required</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>For payments over ₹500</div>
                    </div>
                    <button 
                      onClick={() => setApprovalReq(!approvalReq)}
                      style={{ background: approvalReq ? '#00E699' : 'rgba(255,255,255,0.1)', color: approvalReq ? '#000' : 'rgba(255,255,255,0.4)', padding: '0.4rem 1rem', borderRadius: '20px', border: 'none', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      {approvalReq ? 'ON' : 'OFF'}
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>Block Gaming & Betting</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>MCC 7995 merchant restriction</div>
                    </div>
                    <button 
                      onClick={() => setBlockGaming(!blockGaming)}
                      style={{ background: blockGaming ? '#00E699' : 'rgba(255,255,255,0.1)', color: blockGaming ? '#000' : 'rgba(255,255,255,0.4)', padding: '0.4rem 1rem', borderRadius: '20px', border: 'none', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      {blockGaming ? 'ON' : 'OFF'}
                    </button>
                  </div>

                </div>

              </div>

              {/* Live Simulation Sandbox Screen */}
              <div style={{ background: '#05070A', borderRadius: '24px', padding: '2.25rem', border: '1px solid rgba(0, 230, 153, 0.3)', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E699', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    <Activity size={16} /> LIVE TRANSACTION TESTER
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(0, 230, 153, 0.1)', color: '#00E699', padding: '0.2rem 0.6rem', borderRadius: '10px' }}>SANDBOX</span>
                </div>

                {/* Test Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Select Test Merchant Category:</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {['Shopping', 'Food', 'Gaming'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSimCategory(cat)}
                          style={{
                            flex: 1,
                            padding: '0.6rem',
                            borderRadius: '10px',
                            border: simCategory === cat ? '1px solid #00E699' : '1px solid rgba(255,255,255,0.1)',
                            background: simCategory === cat ? 'rgba(0, 230, 153, 0.15)' : '#111622',
                            color: simCategory === cat ? '#00E699' : 'rgba(255,255,255,0.6)',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem' }}>
                      <span>Test Transaction Amount:</span>
                      <span style={{ color: '#fff', fontWeight: 700 }}>₹{simTxnAmount}</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="3000" 
                      step="50" 
                      value={simTxnAmount}
                      onChange={(e) => setSimTxnAmount(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#00E699' }}
                    />
                  </div>
                </div>

                {/* Simulation Output Card */}
                <div style={{ background: '#111622', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${simResult.color}50` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700 }}>Gateway Decision</span>
                    <span style={{ background: `${simResult.color}20`, color: simResult.color, padding: '0.25rem 0.65rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 900 }}>
                      {simResult.status}
                    </span>
                  </div>
                  <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>
                    {simResult.reason}
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* Section 3: Design System & Color Tokens */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00E699', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>03 / DESIGN SYSTEM</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginTop: '0.25rem' }}>
                Color Tokens & Design Language
              </TextReveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {designTokens.map((token, idx) => (
                <div 
                  key={idx} 
                  style={{ background: '#111622', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ width: '100%', height: '70px', borderRadius: '12px', background: token.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{token.name}</div>
                    <div style={{ color: '#00E699', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'monospace' }}>{token.hex}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', marginTop: '0.4rem', lineHeight: 1.4 }}>{token.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Specification Documentation Hub */}
          <section style={{ background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.12) 0%, rgba(17, 22, 34, 0.95) 100%)', borderRadius: '32px', border: '1px solid rgba(0, 230, 153, 0.3)', padding: '4rem 3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E699', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  <FileText size={18} /> SPECIFICATION DOCUMENTATION
                </div>
                <h3 style={{ color: '#fff', fontSize: '2.2rem', margin: '0 0 0.75rem 0', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  Aurora Fintech App Reference PDF
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', fontSize: '1rem', margin: 0, lineHeight: 1.65 }}>
                  Download the complete UI component library, NPCI UPI Circle integration workflows, permission matrix, and high-fidelity screen specs.
                </p>
              </div>

              <div>
                <a 
                  href="/aurora/home_screen.png" 
                  download="Aurora_Fintech_App_Reference.png"
                  style={{
                    textDecoration: 'none',
                    background: '#00E699',
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '1rem',
                    padding: '1rem 2rem',
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 30px rgba(0, 230, 153, 0.3)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Download size={20} />
                  <span>Download Specification Assets</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.92)', 
            backdropFilter: 'blur(15px)', 
            zIndex: 99999, 
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
            style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '24px', boxShadow: '0 0 60px rgba(0, 230, 153, 0.4)', border: '2px solid rgba(0, 230, 153, 0.5)' }} 
          />
        </div>
      )}

    </div>
  );
};

export default CaseStudyAurora;
