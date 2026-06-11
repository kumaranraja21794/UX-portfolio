import React, { useState, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Layout, Smartphone, Database, Zap } from 'lucide-react';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';

/* ── Floating particles inside each card ── */
const FloatingParticles = ({ count = 6 }) => {
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    })),
    [count]
  );

  return (
    <div className="skill-particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="skill-particle"
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(255, 107, 74, 0.35)',
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -15, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* ── 1. BezierEditor (Visual Design Visualizer) ── */
const BezierEditor = ({ isHovered }) => {
  const [controlPt, setControlPt] = useState({ x: 100, y: 70 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setControlPt({
      x: Math.max(40, Math.min(160, x)),
      y: Math.max(20, Math.min(120, y))
    });
  };

  const handleMouseLeave = () => {
    setControlPt({ x: 100, y: 70 });
  };

  const path = `M 30 70 Q ${controlPt.x} ${controlPt.y} 170 70`;

  return (
    <div 
      className="bezier-viz"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        height: '140px',
        width: '100%',
        borderRadius: '16px',
        background: isHovered ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
        border: isHovered ? '1px dashed rgba(0,0,0,0.1)' : '1px dashed rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="bezier-grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={isHovered ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.05)'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bezier-grid)" />
        
        {/* Draw Bezier Curve */}
        <path
          d={path}
          fill="none"
          stroke={isHovered ? '#8B5CF6' : '#FF6B4A'}
          strokeWidth="3"
          style={{ transition: 'stroke 0.4s' }}
        />

        {/* Draw Control Lines */}
        <line x1="30" y1="70" x2={controlPt.x} y2={controlPt.y} stroke={isHovered ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'} strokeWidth="1" strokeDasharray="3" />
        <line x1="170" y1="70" x2={controlPt.x} y2={controlPt.y} stroke={isHovered ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)'} strokeWidth="1" strokeDasharray="3" />

        {/* Anchor point 1 */}
        <circle cx="30" cy="70" r="5" fill={isHovered ? '#fff' : '#161616'} stroke={isHovered ? '#8B5CF6' : '#FF6B4A'} strokeWidth="2.5" />
        {/* Anchor point 2 */}
        <circle cx="170" cy="70" r="5" fill={isHovered ? '#fff' : '#161616'} stroke={isHovered ? '#8B5CF6' : '#FF6B4A'} strokeWidth="2.5" />

        {/* Control point node */}
        <circle cx={controlPt.x} cy={controlPt.y} r="6" fill={isHovered ? '#8B5CF6' : '#FF6B4A'} style={{ transition: 'fill 0.4s' }} />
      </svg>
      <div style={{ position: 'absolute', bottom: '6px', right: '10px', fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, color: isHovered ? '#000' : '#fff' }}>
        Ctrl: ({Math.round(controlPt.x)}, {Math.round(controlPt.y)})
      </div>
    </div>
  );
};

/* ── 2. UXFlowGraph (UX Architecture Visualizer) ── */
const UXFlowGraph = ({ isHovered }) => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 1, label: 'Search', x: 35, y: 75, stats: '82% Comp' },
    { id: 2, label: 'Detail', x: 100, y: 45, stats: '3.2m Sess' },
    { id: 3, label: 'Cart', x: 165, y: 75, stats: '4.8% Conv' }
  ];

  return (
    <div 
      className="flow-viz"
      style={{
        position: 'relative',
        height: '140px',
        width: '100%',
        borderRadius: '16px',
        background: isHovered ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
        border: isHovered ? '1px dashed rgba(0,0,0,0.1)' : '1px dashed rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* Static Background Paths */}
        <path
          d="M 35 75 Q 100 25 100 45"
          fill="none"
          stroke={isHovered ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}
          strokeWidth="2"
        />
        <path
          d="M 100 45 Q 100 115 165 75"
          fill="none"
          stroke={isHovered ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}
          strokeWidth="2"
        />

        {/* Animated flow path dashes */}
        <path
          d="M 35 75 Q 100 25 100 45"
          fill="none"
          stroke={isHovered ? '#8B5CF6' : '#FF6B4A'}
          strokeWidth="2.5"
          strokeDasharray="6 18"
          className="flow-dash"
        />
        <path
          d="M 100 45 Q 100 115 165 75"
          fill="none"
          stroke={isHovered ? '#8B5CF6' : '#FF6B4A'}
          strokeWidth="2.5"
          strokeDasharray="6 18"
          className="flow-dash"
        />

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g 
              key={node.id} 
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? '9' : '6'}
                fill={isActive ? (isHovered ? '#8B5CF6' : '#FF6B4A') : (isHovered ? '#fff' : '#161616')}
                stroke={isHovered ? '#8B5CF6' : '#FF6B4A'}
                strokeWidth="2"
                style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
              />
              <text
                x={node.x}
                y={node.y - 14}
                textAnchor="middle"
                fontSize="0.6rem"
                fontWeight="700"
                fill={isHovered ? '#0a0a0a' : '#ffffff'}
                style={{ fontFamily: 'Inter, sans-serif', transition: 'fill 0.4s' }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Stats Tooltip Overlay */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: isHovered ? '#0a0a0a' : '#ffffff',
              color: isHovered ? '#ffffff' : '#0a0a0a',
              padding: '3px 8px',
              borderRadius: '8px',
              fontSize: '0.55rem',
              fontWeight: 700,
              fontFamily: 'monospace',
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'background-color 0.4s, color 0.4s'
            }}
          >
            {nodes.find(n => n.id === activeNode)?.stats}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── 3. MobileDeviceSimulator (Mobile UI Visualizer) ── */
const MobileDeviceSimulator = ({ isHovered }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto cycle tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const tabs = ['Home', 'Pay', 'Chart'];

  return (
    <div 
      className="mobile-viz"
      style={{
        position: 'relative',
        height: '140px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        overflow: 'hidden'
      }}
    >
      {/* Phone Silhouette */}
      <div
        style={{
          width: '84px',
          height: '135px',
          borderRadius: '16px',
          border: isHovered ? '2px solid #0a0a0a' : '2px solid rgba(255,255,255,0.2)',
          background: isHovered ? '#ffffff' : '#141414',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.06)' : '0 8px 20px rgba(0,0,0,0.3)'
        }}
      >
        {/* Notch */}
        <div
          style={{
            width: '36px',
            height: '5px',
            background: isHovered ? '#0a0a0a' : 'rgba(255,255,255,0.2)',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            alignSelf: 'center',
            position: 'absolute',
            top: 0,
            zIndex: 10,
            transition: 'background-color 0.4s'
          }}
        />

        {/* Mini Application */}
        <div style={{ flexGrow: 1, padding: '10px 5px 3px 5px', display: 'flex', flexDirection: 'column', gap: '3px', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.4rem', fontWeight: 800, color: isHovered ? '#8B5CF6' : '#FF6B4A', transition: 'color 0.4s' }}>
            <span>BitWise</span>
            <span>$5,410</span>
          </div>

          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '2px', position: 'relative' }}>
            {activeTab === 0 && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ height: '30px', borderRadius: '3px', background: isHovered ? 'rgba(139,92,246,0.08)' : 'rgba(255,107,74,0.08)', display: 'flex', alignItems: 'center', padding: '0 3px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: isHovered ? '#8B5CF6' : '#FF6B4A', transition: 'background-color 0.4s' }} />
                </div>
                <div style={{ height: '6px', borderRadius: '1.5px', background: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }} />
                <div style={{ height: '6px', borderRadius: '1.5px', background: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }} />
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ height: '13px', borderRadius: '2px', background: isHovered ? '#8B5CF6' : '#FF6B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.35rem', fontWeight: 'bold' }}>Buy</div>
                <div style={{ height: '13px', borderRadius: '2px', background: isHovered ? '#f4f4f4' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isHovered ? '#000' : '#fff', fontSize: '0.35rem' }}>Sell</div>
                <div style={{ height: '13px', borderRadius: '2px', background: isHovered ? '#f4f4f4' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isHovered ? '#000' : '#fff', fontSize: '0.35rem' }}>Swap</div>
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ height: '24px', position: 'relative', overflow: 'hidden' }}>
                  {/* Miniature SVG Sparkline */}
                  <svg width="100%" height="100%">
                    <path d="M 0 20 Q 20 5 35 15 T 70 8" fill="none" stroke={isHovered ? '#8B5CF6' : '#FF6B4A'} strokeWidth="1.5" />
                  </svg>
                </div>
                <div style={{ height: '6px', borderRadius: '1.5px', background: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }} />
              </motion.div>
            )}
          </div>

          {/* Bottom Tabs */}
          <div style={{ borderTop: isHovered ? '1px solid #f0f0f0' : '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-around', paddingTop: '2px', fontSize: '0.28rem', fontFamily: 'Inter, sans-serif' }}>
            {tabs.map((tab, i) => (
              <span 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setActiveTab(i); }}
                style={{ 
                  cursor: 'pointer',
                  fontWeight: activeTab === i ? 700 : 400, 
                  color: activeTab === i ? (isHovered ? '#8B5CF6' : '#FF6B4A') : (isHovered ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.35)'),
                  transition: 'color 0.4s'
                }}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── 4. TokenController (Design Systems Visualizer) ── */
const TokenController = ({ isHovered }) => {
  const [accent, setAccent] = useState('#FF6B4A');
  const [radius, setRadius] = useState('8px');

  const colors = [
    { value: '#FF6B4A', label: 'Amber' },
    { value: '#8B5CF6', label: 'Violet' },
    { value: '#10B981', label: 'Emerald' },
    { value: '#EF4444', label: 'Crimson' }
  ];

  const radiuses = [
    { value: '0px', label: 'Sharp' },
    { value: '8px', label: 'Round' },
    { value: '20px', label: 'Pill' }
  ];

  return (
    <div 
      className="token-viz"
      style={{
        position: 'relative',
        height: '140px',
        width: '100%',
        borderRadius: '16px',
        background: isHovered ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
        border: isHovered ? '1px dashed rgba(0,0,0,0.1)' : '1px dashed rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        padding: '0.4rem',
        transition: 'all 0.4s ease',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >
      {/* Mock Component Dynamic Preview */}
      <motion.button
        animate={{ backgroundColor: accent, borderRadius: radius }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        style={{
          border: 'none',
          padding: '5px 12px',
          color: '#ffffff',
          fontSize: '0.6rem',
          fontWeight: 800,
          fontFamily: 'Outfit, sans-serif',
          cursor: 'pointer',
          boxShadow: `0 4px 10px ${accent}30`,
          textTransform: 'uppercase',
          letterSpacing: '0.03em'
        }}
      >
        Sync Design
      </motion.button>

      {/* Button Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '100%', alignItems: 'center' }}>
        {/* Colors Accent Select */}
        <div style={{ display: 'flex', gap: '5px' }}>
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={(e) => { e.stopPropagation(); setAccent(c.value); }}
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: c.value,
                border: accent === c.value ? (isHovered ? '1.5px solid #000000' : '1.5px solid #ffffff') : 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s'
              }}
              title={c.label}
            />
          ))}
        </div>

        {/* Radiuses Tokens Select */}
        <div style={{ display: 'flex', gap: '5px', marginTop: '1px' }}>
          {radiuses.map((r) => (
            <span
              key={r.value}
              onClick={(e) => { e.stopPropagation(); setRadius(r.value); }}
              style={{
                fontSize: '0.5rem',
                fontFamily: 'monospace',
                padding: '1px 5px',
                borderRadius: '3px',
                background: radius === r.value ? (isHovered ? '#8B5CF6' : '#FF6B4A') : (isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'),
                color: radius === r.value ? '#ffffff' : (isHovered ? '#000000' : '#888888'),
                fontWeight: radius === r.value ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: isHovered ? '1px solid rgba(0,0,0,0.03)' : '1px solid transparent'
              }}
            >
              {r.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Skill card with responsive visualizers & hover state ── */
const SkillCard = ({ title, desc, icon: Icon, tags, size, index, visualizer: VisualizerComponent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const glowBg = useMotionTemplate`
    radial-gradient(
      500px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 107, 74, ${isHovered ? '0.04' : '0.10'}),
      transparent 70%
    )
  `;

  return (
    <Magnetic strength={0.04}>
      <motion.div
        className={`skill-card ${size || ''} ${isHovered ? 'is-hovered' : ''}`}
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          type: 'spring',
          stiffness: 80,
          damping: 18,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: 900,
          backgroundColor: isHovered ? '#ffffff' : 'rgba(22, 22, 22, 0.65)',
          color: isHovered ? '#0a0a0a' : '#ffffff',
          borderColor: isHovered ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.06)',
          transition: 'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, transform 0.4s ease',
        }}
      >
        {/* Hover border glow (hidden when card is white) */}
        <motion.div
          className="skill-card-border-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, rgba(255,107,74,0.3), transparent 50%, rgba(255,107,74,0.15))',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Mouse glow */}
        <motion.div
          className="skill-card-glow"
          style={{ background: glowBg }}
        />

        {/* Floating particles */}
        <FloatingParticles count={5} />

        <div className="skill-card-content" style={{ zIndex: 2, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.8rem' }}>
          <div className="skill-card-top" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <motion.div
              className="skill-icon-bg"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 14,
              }}
              style={{
                backgroundColor: isHovered ? 'rgba(255, 107, 74, 0.1)' : 'rgba(255, 107, 74, 0.15)',
                color: '#FF6B4A',
                transition: 'background-color 0.4s, color 0.4s',
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon size={24} strokeWidth={2} />
            </motion.div>
            <h3 className="skill-card-title" style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em', color: isHovered ? '#0a0a0a' : '#ffffff', transition: 'color 0.4s' }}>
              {title}
            </h3>
          </div>

          {/* Embedded Interactive Visualizer */}
          {VisualizerComponent && <VisualizerComponent isHovered={isHovered} />}

          <p className="skill-desc" style={{ fontSize: '0.92rem', lineHeight: 1.6, color: isHovered ? '#444444' : 'rgba(255, 255, 255, 0.45)', margin: 0, fontFamily: 'Inter, sans-serif', flexGrow: 1, transition: 'color 0.4s' }}>
            {desc}
          </p>

          {tags && (
            <div className="skill-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="skill-tag"
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '40px',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    border: '1px solid',
                    borderColor: isHovered ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.08)',
                    color: isHovered ? '#444444' : 'rgba(255, 255, 255, 0.65)',
                    background: isHovered ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.02)',
                    transition: 'all 0.4s',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Magnetic>
  );
};

/* ── Skills section ── */
const Skills = () => {
  const skills = [
    {
      title: 'Visual Design',
      desc: 'Crafting precise, high-fidelity interfaces with absolute attention to grid, color theory, and motion.',
      icon: Layout,
      size: 'large',
      tags: ['Figma', 'Typography', 'Color Theory'],
      visualizer: BezierEditor,
    },
    {
      title: 'UX Architecture',
      desc: 'Structuring complex information into intuitive hierarchies for seamless navigation.',
      icon: Database,
      size: 'medium',
      tags: ['IA', 'User Flows', 'Wireframes'],
      visualizer: UXFlowGraph,
    },
    {
      title: 'Mobile UI',
      desc: 'Expertise in platform-specific guidelines for iOS and Android ecosystems.',
      icon: Smartphone,
      size: 'medium',
      tags: ['iOS', 'Android', 'Responsive'],
      visualizer: MobileDeviceSimulator,
    },
    {
      title: 'Design Systems',
      desc: 'Building scalable, code-ready systems that bridge the gap between design and development.',
      icon: Zap,
      size: 'large',
      tags: ['Components', 'Tokens', 'Documentation'],
      visualizer: TokenController,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header centered">
          <TextReveal
            as="h2"
            mode="word"
            className="section-title"
            stagger={0.06}
            duration={0.7}
          >
            My Specialties
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="section-subtitle"
            style={{ margin: '0 auto', maxWidth: '600px' }}
          >
            Synthesizing complex requirements into elegant, high-performance digital products.
          </motion.p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
