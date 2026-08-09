import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp,
  CreditCard, Users, Layout, Target,
  Maximize2, Activity, ShieldAlert,
  Sparkles, Download, FileText, Lock,
  Percent, ArrowRight, Zap, Bell, Sliders, Smartphone,
  DollarSign, Check, X, RefreshCw, Layers, Eye, Clock, AlertTriangle, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';

const screensData = [
  {
    id: 'home',
    title: 'Home & Account Telemetry',
    subtitle: 'Main Dashboard & Action Matrix',
    img: '/aurora/home_screen.png',
    badge: '01 / DASHBOARD',
    tags: ['UPI Circle', 'Quick Actions', 'Bill Tracker', 'Live Balance'],
    description: 'Centralized financial control center featuring glanceable account balance telemetry (₹67,356.70), one-tap UPI ID copy, budget threshold alerts (82% limit reached), action icon matrix, and upcoming bill reminders.',
    metrics: [
      { label: 'Account Balance', val: '₹67,356.70' },
      { label: 'UPI Circle Pool', val: 'Active' },
      { label: 'Upcoming Bills', val: '3 Pending' }
    ],
    highlights: [
      'Glanceable Account Balance with one-tap account switcher and copyable UPI ID (eskay32uniq@hdfcbank)',
      'UPI Circle banner with 1-tap onboarding CTA to pool and control family spending',
      '82% monthly limit warning bar (₹27,060 / ₹5,940 remaining) to prevent unexpected POS rejections',
      'Quick action circular grid (Scan QR, Pay Anyone, Request Money, Bank Transfer, Mobile Recharge)',
      'Upcoming bill reminder card (Airtel Postpaid ₹1,249, Due in 3 days) with instant Pay Now button'
    ]
  },
  {
    id: 'circle',
    title: 'Streling Family UPI Circle',
    subtitle: 'Delegated Allowance Pool & Request Queue',
    img: '/aurora/family_circle.png',
    badge: '02 / UPI CIRCLE',
    tags: ['Family Pool', 'Utilization Ring', 'Approval Queue', 'Member Caps'],
    description: 'Central family allowance hub displaying total circle utilization (₹15,000 of ₹25,000 pool - 60% used gauge), real-time member approval requests ("Rohan requests ₹1,200 - Decathlon"), member status breakdown, and live transaction activity feed.',
    metrics: [
      { label: 'Total Pool Cap', val: '₹25,000' },
      { label: 'Circle Utilization', val: '60% Used' },
      { label: 'Approval Queue', val: '1 Pending' }
    ],
    highlights: [
      'Circular utilization ring visually depicting 60% pool consumption (₹15,000 spent / ₹10,000 remaining)',
      'Real-time approval action card ("Rohan requests ₹1,200 - Decathlon • exceeds daily limit") with 1-tap Accept/Decline',
      'Member hierarchy cards: Meera (Admin - ₹4,500 of ₹10,000) and Rohan (Member - ₹4,250 of ₹5,000)',
      'Live audit stream tracking instant member deposits and merchant payments in real-time'
    ]
  },
  {
    id: 'banking',
    title: 'Savings & Aurora Titanium Card',
    subtitle: 'Account Overview & Asset Telemetry',
    img: '/aurora/account_banking.png',
    badge: '03 / BANKING & CARDS',
    tags: ['Savings A/C', 'Debit Card', 'Loan Telemetry', 'Beneficiaries'],
    description: 'Comprehensive banking and card management portal displaying primary Savings Account balance (₹6,356.70), quick banking actions, Aurora Titanium International Debit Card container, and long-term loan repayment trackers.',
    metrics: [
      { label: 'Savings Balance', val: '₹6,356.70' },
      { label: 'Debit Card Tier', val: 'Aurora Titanium' },
      { label: 'Home Loan EMIs', val: '24/180 Paid' }
    ],
    highlights: [
      'Savings Account telemetry (A/C No. 32218909823) with total available liquidity breakdown',
      'Quick banking navigation pills (Fund Transfer, View Transactions, Manage Beneficiaries, Cheque Book)',
      'Realistic Aurora Titanium Debit Card UI preview with contactless NFC badge and masked card number',
      'Home Loan asset tracker (A/C •••• 9820 - ₹12,60,000) with visual EMI repayment progress (24 of 180 EMIs paid)'
    ]
  },
  {
    id: 'analytics',
    title: 'Spending Telemetry & Analytics',
    subtitle: 'Monthly Overview & Category Insights',
    img: '/aurora/spending_analytics.png',
    badge: '04 / ANALYTICS',
    tags: ['Weekly Chart', 'Category Distribution', 'Budget Alert', 'Transaction Filter'],
    description: 'In-depth financial telemetry screen comparing monthly income (₹1.2L) vs expenses (₹68K) through weekly dual-bar comparative histograms, category progress bars, and instant transaction filter chips.',
    metrics: [
      { label: 'Monthly Income', val: '₹1.2 Lakh' },
      { label: 'Total Expense', val: '₹68,356' },
      { label: 'Top Category', val: 'Food (42%)' }
    ],
    highlights: [
      'Weekly income vs expense dual-bar comparative histogram across 4 weeks',
      'High-precision category breakdown (Food & Drinks 42%, Shopping 28%)',
      'Instant filter chips (All, Shopping, Food, Travel) for rapid transaction audit',
      'Search transactions input bar with instant export download utility'
    ]
  },
  {
    id: 'controls',
    title: 'Member Allowance & Risk Caps',
    subtitle: 'Rohan (Member) Spending Profile',
    img: '/aurora/member_controls.png',
    badge: '05 / RISK CONTROLS',
    tags: ['Allowance Cap', 'Monthly Limit', 'Daily Limit', 'Merchant Lock'],
    description: 'Detailed member profile management screen for teen allowance allocation, showing role badge (Member), Monthly Limit (₹5,000), and Daily Limit (₹800) with segmented visual progress trackers and security toggles.',
    metrics: [
      { label: 'Monthly Cap', val: '₹5,000' },
      { label: 'Daily Cap', val: '₹800' },
      { label: 'Merchant Lock', val: 'Gaming/Betting' }
    ],
    highlights: [
      'Segmented progress indicator bars for quick visual cognitive parsing',
      'Granular monthly limit set to ₹5,000 with 3/5 segments filled',
      'Daily limit set to ₹800 with 4/5 segments filled',
      'Approval required toggle for payments over ₹500',
      'Merchant Category Code (MCC 7995) restriction switch blocking betting and casino platforms',
      'Night spending curfew toggle restricting transactions between 11 PM and 6 AM'
    ]
  }
];

const designTokens = [
  { name: 'Aurora Mint', hex: '#00E699', role: 'Primary Action Accent & Positive Balance' },
  { name: 'Void Black', hex: '#07090E', role: 'Background Canvas & Deep Contrast' },
  { name: 'Surface Dark', hex: '#111622', role: 'Bento Card Container & Navigation' },
  { name: 'Warning Amber', hex: '#F59E0B', role: 'Budget Threshold Alerts (80%+)' },
  { name: 'Alert Coral', hex: '#EF4444', role: 'Expense Indicators & High Risk Caps' }
];

const CaseStudyAurora = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Approval Request Simulation State
  const [requestStatus, setRequestStatus] = useState('PENDING'); // PENDING, APPROVED, DECLINED

  const currentScreen = screensData[activeTab];

  return (
    <div className="case-study-page aurora-study-page" style={{ '--accent-primary': '#00E699', background: '#F2F3EC', color: '#0E0F13', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Background Glow Beams */}
      <div style={{ position: 'fixed', top: 0, left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 230, 153, 0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Top Floating Navigation Bar */}
      <div className="container" style={{ position: 'relative', zIndex: 100, paddingTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(14, 15, 19, 0.64)', textDecoration: 'none', background: 'rgba(14, 15, 19, 0.06)', padding: '0.6rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(14, 15, 19, 0.10)', fontSize: '0.85rem', fontWeight: 600, backdropFilter: 'blur(10px)' }}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 230, 153, 0.1)', border: '1px solid rgba(0, 230, 153, 0.25)', padding: '0.4rem 1rem', borderRadius: '30px', color: '#0B8F6B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E699', display: 'inline-block', boxShadow: '0 0 10px #00E699' }} />
            FEATURED CASE STUDY // FINTECH & UPI CIRCLE
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
              <span style={{ background: 'rgba(0, 230, 153, 0.15)', color: '#0B8F6B', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(0, 230, 153, 0.3)' }}>
                PRODUCT DESIGN & UX RESEARCH
              </span>
              <span style={{ color: 'rgba(14, 15, 19, 0.52)', fontSize: '0.85rem' }}>• 5 COMPREHENSIVE MOBILE SCREENS</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Aurora Fintech App <br />
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(14, 15, 19, 0.60) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Streling Family UPI Circle & Financial Telemetry
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(14, 15, 19, 0.62)', maxWidth: '780px', lineHeight: 1.7, margin: '0 0 3rem 0' }}>
              Aurora Fintech App is a dark-void emerald mobile banking and allowance management platform. Designed around the National Payments Corporation of India (NPCI) UPI Circle specification, it enables parents to pool family funds, grant delegated allowances to teenagers (like Rohan, Age 16), enforce real-time spending caps, and manage bank accounts & debit cards seamlessly.
            </p>
          </motion.div>

          {/* Key Metrics Bento Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}
          >
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B8F6B', fontFamily: 'var(--font-heading)' }}>₹25,000</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)', marginTop: '0.25rem' }}>Max Family Circle Pool Cap</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0E0F13', fontFamily: 'var(--font-heading)' }}>60%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)', marginTop: '0.25rem' }}>Streling Circle Pool Utilization</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B8F6B', fontFamily: 'var(--font-heading)' }}>&lt; 15ms</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)', marginTop: '0.25rem' }}>Real-time Edge Guardrail Check</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0E0F13', fontFamily: 'var(--font-heading)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)', marginTop: '0.25rem' }}>NPCI Delegated UPI Protocol</div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Main Content Body */}
      <main style={{ position: 'relative', zIndex: 10, padding: '3rem 0 6rem 0' }}>
        <div className="container">

          {/* Section 1: Interactive Device Frame & 5 Screen Showcase */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#0B8F6B', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>01 / DESIGN SYSTEM & INTERFACE FLOW</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0E0F13', marginTop: '0.25rem' }}>
                Complete 5-Screen Interface Architecture
              </TextReveal>
              <p style={{ color: 'rgba(14, 15, 19, 0.56)', fontSize: '1rem', margin: '0.5rem 0 0 0' }}>
                Select any of the 5 designed screens below to inspect its visual structure, UX rationale, and micro-interactions.
              </p>
            </div>

            {/* 5 Screen Interactive Tabs Bar */}
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

            {/* Split View Container (3D Mobile Mockup + Deep UX Analysis) */}
            <div style={{ background: '#F2F3EC', borderRadius: '32px', border: '1px solid rgba(14, 15, 19, 0.08)', padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
              
              {/* Phone Mockup Frame */}
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                
                {/* Dynamic Backdrop Glow */}
                <div style={{ position: 'absolute', width: '290px', height: '580px', background: 'radial-gradient(circle, rgba(0, 230, 153, 0.22) 0%, transparent 70%)', filter: 'blur(45px)', opacity: 0.7 }} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'relative',
                      maxWidth: '315px',
                      width: '100%',
                      borderRadius: '44px',
                      padding: '12px',
                      background: '#1A202C',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(14, 15, 19, 0.14)',
                      border: '2px solid rgba(0, 230, 153, 0.3)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsZoomed(true)}
                  >
                    {/* Device Inner Display */}
                    <div style={{ borderRadius: '34px', overflow: 'hidden', position: 'relative', background: '#F2F3EC', aspectRatio: '9/19.5' }}>
                      <img 
                        src={currentScreen.img} 
                        alt={currentScreen.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                      />

                      {/* Lightbox Zoom Badge */}
                      <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)', borderRadius: '50%', padding: '10px', color: '#0B8F6B', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 230, 153, 0.3)' }}>
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
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0B8F6B', letterSpacing: '0.1em' }}>
                      {currentScreen.badge}
                    </span>
                    <span style={{ color: 'rgba(14, 15, 19, 0.60)' }}>|</span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)' }}>{currentScreen.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0E0F13', margin: 0, fontFamily: 'var(--font-heading)' }}>
                    {currentScreen.title}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'rgba(14, 15, 19, 0.62)', lineHeight: 1.65, margin: 0 }}>
                    {currentScreen.description}
                  </p>

                  {/* Micro Metrics Strip */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', background: '#FFFFFF', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(14, 15, 19, 0.06)' }}>
                    {currentScreen.metrics.map((m, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(14, 15, 19, 0.52)', marginBottom: '0.2rem' }}>{m.label}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0B8F6B' }}>{m.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div style={{ background: 'rgba(0, 230, 153, 0.03)', borderRadius: '20px', border: '1px solid rgba(0, 230, 153, 0.15)', padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#0B8F6B', margin: '0 0 1rem 0', fontWeight: 800, letterSpacing: '0.05em' }}>
                      KEY DESIGN DECISIONS & INTERACTION HEURISTICS
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {currentScreen.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(14, 15, 19, 0.74)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={18} style={{ color: '#0B8F6B', shrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </section>

          {/* Section 2: Live Interactive Approval Queue Sandbox */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#0B8F6B', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>02 / INTERACTIVE APPROVAL ENGINE</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0E0F13', marginTop: '0.25rem' }}>
                UPI Circle Real-time Request Sandbox
              </TextReveal>
              <p style={{ color: 'rgba(14, 15, 19, 0.56)', fontSize: '1rem', margin: '0.5rem 0 0 0' }}>
                Simulate how parent owners receive and review live teen spending approval requests on the Streling Family Circle.
              </p>
            </div>

            <div style={{ background: '#F2F3EC', borderRadius: '32px', border: '1px solid rgba(0, 230, 153, 0.25)', padding: '3rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
              
              {/* Request Details Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#B45309', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    ACTION REQUIRED
                  </span>
                  <span style={{ color: 'rgba(14, 15, 19, 0.52)', fontSize: '0.85rem' }}>Daily Cap Exceeded Warning</span>
                </div>

                <div style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(14, 15, 19, 0.08)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #00E699 0%, #06B6D4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#0E0F13' }}>
                        RN
                      </div>
                      <div>
                        <h4 style={{ margin: 0, color: '#0E0F13', fontSize: '1.1rem', fontWeight: 700 }}>Rohan (Member)</h4>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(14, 15, 19, 0.54)' }}>Decathlon • ₹1,200</span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#B45309' }}>₹1,200</div>
                      <span style={{ fontSize: '0.75rem', color: '#DC2626', fontWeight: 600 }}>Exceeds ₹800 Daily Cap</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(14, 15, 19, 0.03)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(14, 15, 19, 0.06)', fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.64)', lineHeight: 1.5 }}>
                    💡 <strong>Guardrail Triggered:</strong> Rohan's attempt to pay Decathlon for sport gear exceeds his assigned ₹800 daily allowance limit. Payment paused pending parent PIN verification.
                  </div>

                  {/* Interactive Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <button
                      onClick={() => setRequestStatus('APPROVED')}
                      style={{
                        flex: 1,
                        padding: '0.85rem',
                        borderRadius: '14px',
                        border: 'none',
                        background: '#00E699',
                        color: '#0E0F13',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Check size={18} />
                      <span>Approve Request</span>
                    </button>

                    <button
                      onClick={() => setRequestStatus('DECLINED')}
                      style={{
                        flex: 1,
                        padding: '0.85rem',
                        borderRadius: '14px',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        background: 'rgba(239, 68, 68, 0.12)',
                        color: '#DC2626',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <X size={18} />
                      <span>Decline Request</span>
                    </button>
                  </div>

                </div>

              </div>

              {/* Live Status Result Display */}
              <div style={{ background: '#05070A', borderRadius: '24px', padding: '2.25rem', border: '1px solid rgba(0, 230, 153, 0.3)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '0.5rem', color: '#0B8F6B', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  <Activity size={16} /> NPCI DELEGATED UPI RESPONSE
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.08)', textAlign: 'center' }}>
                  {requestStatus === 'PENDING' && (
                    <>
                      <Clock size={36} style={{ color: '#B45309', margin: '0 auto 1rem auto' }} />
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#B45309', fontSize: '1.2rem' }}>Awaiting Parent Authorization</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.56)', margin: 0 }}>Click Approve or Decline on the left to simulate live UPI Circle resolution.</p>
                    </>
                  )}

                  {requestStatus === 'APPROVED' && (
                    <>
                      <CheckCircle2 size={36} style={{ color: '#0B8F6B', margin: '0 auto 1rem auto' }} />
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0B8F6B', fontSize: '1.2rem' }}>Transaction Authorized!</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.64)', margin: '0 0 1rem 0' }}>₹1,200 dispatched to Decathlon via Streling Family Circle pool.</p>
                      <button onClick={() => setRequestStatus('PENDING')} style={{ background: 'rgba(14, 15, 19, 0.10)', color: '#0E0F13', border: 'none', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.78rem', cursor: 'pointer' }}>Reset Test</button>
                    </>
                  )}

                  {requestStatus === 'DECLINED' && (
                    <>
                      <X size={36} style={{ color: '#DC2626', margin: '0 auto 1rem auto' }} />
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#DC2626', fontSize: '1.2rem' }}>Request Declined</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(14, 15, 19, 0.64)', margin: '0 0 1rem 0' }}>Transaction rejected. Rohan notified on mobile device.</p>
                      <button onClick={() => setRequestStatus('PENDING')} style={{ background: 'rgba(14, 15, 19, 0.10)', color: '#0E0F13', border: 'none', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.78rem', cursor: 'pointer' }}>Reset Test</button>
                    </>
                  )}
                </div>

              </div>

            </div>
          </section>

          {/* Section 3: Information Architecture & Persona Matrix */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#0B8F6B', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>03 / USER PERSONAS & ROLE SCHEMAS</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0E0F13', marginTop: '0.25rem' }}>
                Role Hierarchy & Permission Model
              </TextReveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              
              {/* Owner Role Card */}
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(0, 230, 153, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(0, 230, 153, 0.15)', color: '#0B8F6B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: '#0E0F13', fontSize: '1.2rem' }}>Circle Owner</h3>
                    <span style={{ fontSize: '0.75rem', color: '#0B8F6B', fontWeight: 700 }}>PRIMARY PARENT / GUARDIAN</span>
                  </div>
                </div>
                <p style={{ color: 'rgba(14, 15, 19, 0.60)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Controls global circle budget (e.g. ₹25,000), approves request queues exceeding daily caps, sets merchant category blocks, and invites secondary admins or members.
                </p>
              </div>

              {/* Admin Role Card */}
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: '#0E7490', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: '#0E0F13', fontSize: '1.2rem' }}>Circle Admin</h3>
                    <span style={{ fontSize: '0.75rem', color: '#0E7490', fontWeight: 700 }}>SPOUSE / SECONDARY PARENT</span>
                  </div>
                </div>
                <p style={{ color: 'rgba(14, 15, 19, 0.60)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Assigned sub-limits (e.g. Meera ₹4,500 of ₹10,000), views live telemetry feed, and holds authorization rights over member requests when Owner is offline.
                </p>
              </div>

              {/* Member Role Card */}
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(14, 15, 19, 0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: '#0E0F13', fontSize: '1.2rem' }}>Circle Member</h3>
                    <span style={{ fontSize: '0.75rem', color: '#B45309', fontWeight: 700 }}>TEENAGER / DEPENDENT</span>
                  </div>
                </div>
                <p style={{ color: 'rgba(14, 15, 19, 0.60)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Delegated digital spending allowance (e.g. Rohan ₹5,000 monthly / ₹800 daily), subject to merchant restrictions (gaming/betting lock) and night curfews.
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Design Tokens & Palette */}
          <section style={{ marginBottom: '6rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#0B8F6B', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em' }}>04 / DESIGN SYSTEM</span>
              <TextReveal as="h2" mode="word" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0E0F13', marginTop: '0.25rem' }}>
                Color Tokens & Design Language
              </TextReveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {designTokens.map((token, idx) => (
                <div 
                  key={idx} 
                  style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(14, 15, 19, 0.08)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ width: '100%', height: '70px', borderRadius: '12px', background: token.hex, border: '1px solid rgba(14, 15, 19, 0.10)' }} />
                  <div>
                    <div style={{ color: '#0E0F13', fontWeight: 800, fontSize: '1rem' }}>{token.name}</div>
                    <div style={{ color: '#0B8F6B', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'monospace' }}>{token.hex}</div>
                    <div style={{ color: 'rgba(14, 15, 19, 0.54)', fontSize: '0.78rem', marginTop: '0.4rem', lineHeight: 1.4 }}>{token.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Specification PDF Hub */}
          <section style={{ background: 'linear-gradient(135deg, rgba(0, 230, 153, 0.12) 0%, rgba(17, 22, 34, 0.95) 100%)', borderRadius: '32px', border: '1px solid rgba(0, 230, 153, 0.3)', padding: '4rem 3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0B8F6B', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  <FileText size={18} /> SPECIFICATION DOCUMENTATION
                </div>
                <h3 style={{ color: '#0E0F13', fontSize: '2.2rem', margin: '0 0 0.75rem 0', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  Aurora Fintech App Reference PDF
                </h3>
                <p style={{ color: 'rgba(14, 15, 19, 0.62)', maxWidth: '600px', fontSize: '1rem', margin: 0, lineHeight: 1.65 }}>
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
                    color: '#0E0F13',
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

      {/* Fullscreen Lightbox Modal */}
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
