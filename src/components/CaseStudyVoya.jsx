import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';

/* Screens captured from the clickable design comp
   (Trip Planning Mobile App / Voya App.dc.html). */
const screensData = [
  {
    id: 'trips',
    title: 'Trips Home',
    subtitle: 'Up next, and everything after it',
    img: '/voya/trips.png',
    badge: '01 / HOME',
    description:
      'One screen answers "where to next?". The active trip carries its own weather, dates, crew and a single progress line — planning, budget and checklist — so nobody has to open three tabs to learn whether the trip is on track.',
    metrics: [
      { label: 'Up next', val: 'Lisbon' },
      { label: 'Countdown', val: '12 days' },
      { label: 'Crew', val: '4 travellers' },
    ],
    highlights: [
      'Ask Voya AI banner sits above the fold — planning is the primary action, not a buried menu item',
      'Trip card folds weather, dates, traveller count and three progress metrics into one glanceable block',
      '"Jump into Lisbon" shortcuts skip the trip page entirely for the four things people reopen most',
    ],
  },
  {
    id: 'wizard',
    title: 'The AI Planning Wizard',
    subtitle: 'Four steps to a full trip',
    img: '/voya/wizard.png',
    badge: '02 / AI PLANNING',
    description:
      'Planning is the step groups abandon, so it was cut to four inputs: destination, dates, budget per person, and who is coming. Everything after that — itinerary, packing checklist, budget split — is generated, then edited rather than authored from a blank page.',
    metrics: [
      { label: 'Steps', val: '4' },
      { label: 'Inputs', val: 'Where · When · Budget · Crew' },
      { label: 'Output', val: 'Full plan' },
    ],
    highlights: [
      'A four-segment progress bar makes the end of the flow visible from step one',
      'Crew invites pull straight from contacts, so the trip starts shared instead of being shared later',
      'Budget is captured per person up front — the number every later expense screen reconciles against',
    ],
  },
  {
    id: 'overview',
    title: 'Trip Overview',
    subtitle: 'The shared state of one trip',
    img: '/voya/overview.png',
    badge: '03 / OVERVIEW',
    description:
      'The trip hub answers the three questions a group asks repeatedly: who is coming, how packed are we, and how much is left. Each is a card with a number and a progress indicator rather than a list to interpret.',
    metrics: [
      { label: 'Checklist', val: '8/14 packed' },
      { label: 'Budget used', val: '62%' },
      { label: 'Crew', val: '4 people' },
    ],
    highlights: [
      'Checklist and budget sit side by side as rings and bars — proportion reads faster than a fraction',
      'Crew row doubles as the invite affordance, so adding a straggler is never more than one tap away',
      'Itinerary preview carries an AI badge, marking what was generated versus what the group edited',
    ],
  },
  {
    id: 'itinerary',
    title: 'Day-by-day Itinerary',
    subtitle: 'A timeline, not a document',
    img: '/voya/itinerary.png',
    badge: '04 / ITINERARY',
    description:
      'Days are chips, not pages. The current moment is pinned with a NOW marker so the itinerary stays useful mid-trip, when it stops being a plan and becomes a schedule people are actually standing in.',
    metrics: [
      { label: 'View', val: 'Per day' },
      { label: 'State', val: 'Live NOW marker' },
      { label: 'Editing', val: 'Inline' },
    ],
    highlights: [
      'A NOW rail marks the live slot, so the screen is glanceable while walking rather than only while planning',
      'Completed items collapse to a single ✓ line, keeping the remaining day at the top of the screen',
      'Attendance ("4 going") sits on the activity itself — the detail groups argue about most',
    ],
  },
  {
    id: 'map',
    title: 'Trip Map & Photo Piles',
    subtitle: 'Where the trip actually happened',
    img: '/voya/map.png',
    badge: '05 / MAP',
    description:
      'The map is the memory surface. Photos cluster into piles at the place they were taken and the day they belong to, and the same map shows where the crew is right now — so it works both as a live tool and, later, as the record of the trip.',
    metrics: [
      { label: 'Stops', val: '3 on trail' },
      { label: 'Piles', val: 'By place + day' },
      { label: 'Crew', val: 'Live' },
    ],
    highlights: [
      'Photo piles carry a count and a day badge, so the map doubles as a chronological album',
      'The trail line connects stops in order, turning scattered pins into a readable route',
      '"Find your crew" lists live distances with a Locate action — the practical version of "where are you?"',
    ],
  },
  {
    id: 'expenses',
    title: 'Expenses & Settle Up',
    subtitle: 'One running tab per trip',
    img: '/voya/expenses.png',
    badge: '06 / MONEY',
    description:
      'Money is the thing that sours group trips, so the headline is not total spend but what you are owed. Each trip carries its own budget bar and a settled state, so a finished trip visibly closes instead of lingering as an open thread.',
    metrics: [
      { label: 'Year to date', val: '$3,550.50' },
      { label: 'Net position', val: 'Owed $84.20' },
      { label: 'Per trip', val: 'Budget bar' },
    ],
    highlights: [
      'The balance headline leads with the number people open the screen for — who owes whom',
      'Per-trip budget bars reuse the same progress language as the checklist, so the system reads as one',
      'A "settled" badge gives trips a terminal state, which is what actually ends the group chat',
    ],
  },
  {
    id: 'album',
    title: 'Shared Album',
    subtitle: 'Everyone’s camera roll, merged',
    img: '/voya/album.png',
    badge: '07 / ALBUM',
    description:
      'Photos from every phone land in one place, grouped by trip and month, with a visible sync state. The point is that nobody has to be the person who collects everyone’s pictures afterwards.',
    metrics: [
      { label: 'Sync', val: 'All 4 devices' },
      { label: 'Grouping', val: 'Trip · month' },
      { label: 'Lisbon', val: 'Open album' },
    ],
    highlights: [
      'Sync status is stated plainly ("all 4 devices synced · 2 min ago") rather than hidden behind a spinner',
      'Trips group by month once they are past, so the album ages into a travel history',
      'A mixed-size grid keeps hero shots legible without pushing everything else off-screen',
    ],
  },
];

const designTokens = [
  { name: 'Voya Sky', hex: '#0EA5E9', role: 'Primary action, active tab, live state' },
  { name: 'Deep Harbour', hex: '#075985', role: 'Headings and AI surfaces' },
  { name: 'Paper Blue', hex: '#EFF8FE', role: 'App canvas and card ground' },
  { name: 'Ink', hex: '#0F2A3C', role: 'Body copy and primary labels' },
  { name: 'Coral', hex: '#FF7A5A', role: 'Crew avatars and warm accents' },
];

const problemCards = [
  {
    title: 'Challenge',
    body: 'Group trips are planned in three places at once — a chat thread, someone’s notes app, and a spreadsheet nobody else opens. The plan exists, but no one shares the same copy of it.',
  },
  {
    title: 'Goal',
    body: 'Make one surface the source of truth for the whole crew: the plan, the packing, the money and the photos, all attached to the trip rather than to whoever happened to organise it.',
  },
  {
    title: 'Outcome',
    body: 'A four-step AI draft replaces the blank page, and every screen after it reports shared state — progress, balance, sync — so the trip stays legible to everyone in it.',
  },
];

const CaseStudyVoya = () => {
  const [zoomed, setZoomed] = useState(null);

  return (
    <div className="case-study-page voya-study-page" style={{ '--accent-primary': '#0EA5E9' }}>
      <div className="cs-watermark">VOYA</div>

      {/* Hero — same shape as the other studies */}
      <header className="cs-hero">
        <div className="container">
          <motion.div className="cs-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Case Study — Group Travel App
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              Voya: <br />
              <span>Every trip, one shared sky</span>
            </h1>

            <p className="cs-lead">
              A trip planner for people who travel together. An AI wizard turns four inputs into a
              full itinerary, packing checklist and budget — then the crew shares one live map, one
              album and one running tab for the rest of the trip.
            </p>

            <div className="cs-meta-strip">
              <div className="cs-meta-strip-item">
                <label>Role</label>
                <span>Product Designer &amp; Developer</span>
              </div>
              <div className="cs-meta-strip-divider" />
              <div className="cs-meta-strip-item">
                <label>Focus</label>
                <span>Group Travel &amp; Mobile UX</span>
              </div>
              <div className="cs-meta-strip-divider" />
              <div className="cs-meta-strip-item">
                <label>Built with</label>
                <span>React Native · Expo · Supabase</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cs-impact-cards voya-metrics"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { v: '4 steps', l: 'From blank page to full plan' },
              { v: '5 tabs', l: 'Trips · Expenses · Camera · Album · Profile' },
              { v: '1 tab', l: 'Shared expense ledger per trip' },
              { v: '7 screens', l: 'Designed end to end' },
            ].map((m) => (
              <div className="voya-metric" key={m.l}>
                <div className="voya-metric-v">{m.v}</div>
                <div className="voya-metric-l">{m.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main>
        <div className="container">
          {/* 01 — the problem */}
          <section className="cs-section cs-section-tight">
            <div style={{ marginBottom: '2.5rem' }}>
              <span className="cs-label">01 / THE PROBLEM</span>
              <TextReveal as="h2" mode="word">
                Everyone is on the trip. Nobody has the plan.
              </TextReveal>
            </div>

            <div className="cs-compact-grid">
              {problemCards.map((c, i) => (
                <motion.article
                  className="cs-compact-card"
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                >
                  <span className="cs-compact-eyebrow">{c.title}</span>
                  <p>{c.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* 02 — every screen, in sequence */}
          <section className="cs-section cs-section-tight">
            <div style={{ marginBottom: '2.5rem' }}>
              <span className="cs-label">02 / DESIGN SYSTEM &amp; INTERFACE FLOW</span>
              <TextReveal as="h2" mode="word">
                Seven screens, in the order a traveller meets them
              </TextReveal>
              <p style={{ color: 'var(--cs-soft)', fontSize: '1rem', margin: '0.5rem 0 0' }}>
                Each with its visual structure, the decision behind it, and the interaction that
                carries it.
              </p>
            </div>

            <div className="cs-screens">
              {screensData.map((screen, idx) => (
                <motion.article
                  key={screen.id}
                  className={`cs-screen${idx % 2 ? ' cs-screen--flip' : ''}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cs-screen-visual">
                    <div className="voya-screen-glow" />
                    <button
                      type="button"
                      onClick={() => setZoomed(screen)}
                      aria-label={`Enlarge ${screen.title}`}
                      className="voya-device"
                    >
                      <img src={screen.img} alt={screen.title} loading="lazy" />
                      <span className="voya-zoom" aria-hidden="true">
                        <Maximize2 size={16} />
                      </span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--cs-accent)', letterSpacing: '0.1em' }}>
                        {screen.badge}
                      </span>
                      <span style={{ color: 'rgba(14, 15, 19, 0.30)' }}>|</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cs-soft)' }}>{screen.subtitle}</span>
                    </div>

                    <h3 style={{ margin: 0, fontFamily: 'var(--sp-display)', lineHeight: 1.08 }}>
                      {screen.title}
                    </h3>

                    <p style={{ fontSize: '1rem', color: 'var(--cs-soft)', lineHeight: 1.65, margin: 0 }}>
                      {screen.description}
                    </p>

                    <div className="voya-screen-metrics">
                      {screen.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="voya-sm-l">{m.label}</div>
                          <div className="voya-sm-v">{m.val}</div>
                        </div>
                      ))}
                    </div>

                    <div className="voya-notes">
                      <h4>KEY DESIGN DECISIONS</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {screen.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(14, 15, 19, 0.74)', lineHeight: 1.5 }}>
                            <CheckCircle2 size={18} style={{ color: 'var(--cs-accent)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* 03 — design language */}
          <section className="cs-section cs-section-tight">
            <div style={{ marginBottom: '2.5rem' }}>
              <span className="cs-label">03 / DESIGN LANGUAGE</span>
              <TextReveal as="h2" mode="word">
                Colour tokens &amp; motion
              </TextReveal>
              <p style={{ color: 'var(--cs-soft)', fontSize: '1rem', margin: '0.5rem 0 0' }}>
                One sky-blue accent carries every live and active state, so the interface never has
                to explain what is current.
              </p>
            </div>

            <div className="voya-tokens">
              {designTokens.map((t) => (
                <div className="voya-token" key={t.hex}>
                  <span className="voya-swatch" style={{ background: t.hex }} />
                  <div>
                    <div className="voya-token-name">{t.name}</div>
                    <div className="voya-token-hex">{t.hex}</div>
                    <div className="voya-token-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="cs-closing">
        <div className="container">
          <div className="closing-content">
            <TextReveal mode="char" as="h2">Planning something with a crew?</TextReveal>
            <p>
              Voya is the argument that group software should report shared state, not just
              broadcast messages into a thread.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', marginTop: '2rem' }}>
              <Link to="/" className="btn">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {zoomed && (
        <div
          onClick={() => setZoomed(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(6, 20, 30, 0.92)',
            backdropFilter: 'blur(15px)', zIndex: 99999, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <img
            src={zoomed.img}
            alt={zoomed.title}
            style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '28px', boxShadow: '0 0 60px rgba(14, 165, 233, 0.35)' }}
          />
        </div>
      )}
    </div>
  );
};

export default CaseStudyVoya;
