import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA, ProgramItem } from '../data/content';

interface OfferingsProps {
  setActiveTab: (tab: string) => void;
}

export const OfferingsSection: React.FC<OfferingsProps> = ({ setActiveTab }) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredPrograms = filter === 'All' 
    ? COMPANY_DATA.programs 
    : COMPANY_DATA.programs.filter(p => p.category === filter || (filter === 'General' && p.category === 'General'));

  const categories = ['All', 'Men', 'General'];

  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge">PROGRAMS & EXPANSION</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>THE GOAL FOR</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>EXPANSION & DOMINANCE</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            We are rapidly scaling our infrastructure to deliver elite men's fitness experiences. Premium facilities, advanced recovery zones, and specialized training for hardcore results.
          </p>
        </div>

        {/* Strategic Pillars Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {COMPANY_DATA.expansionGoals.map((goal, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px',
                background: '#111111',
                borderTop: `4px solid ${idx === 0 ? 'var(--accent-blue)' : idx === 1 ? '#ffffff' : 'var(--accent-blue)'}`
              }}
            >
              <h4 className="font-header" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '20px', fontWeight: 800 }}>{goal.category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {goal.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#cccccc' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 900, fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="font-header"
              style={{
                padding: '14px 32px',
                fontSize: '0.95rem',
                fontWeight: 800,
                border: filter === cat ? '2px solid var(--accent-blue)' : '2px solid rgba(255,255,255,0.2)',
                background: filter === cat ? 'var(--accent-blue)' : 'transparent',
                color: filter === cat ? '#000000' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                letterSpacing: '1.5px',
                borderRadius: '0px'
              }}
            >
              {cat === 'All' ? 'ALL PROGRAMS' : cat === 'Men' ? "MEN'S GYM" : "FUNCTIONAL & HOLISTIC"}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          <AnimatePresence>
            {filteredPrograms.map((program: ProgramItem) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#111111'
                }}
              >
                {/* Image Container */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      filter: 'contrast(1.1) grayscale(0.2)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--accent-blue)',
                    color: '#000000',
                    padding: '6px 14px',
                    fontFamily: 'var(--font-header)',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    letterSpacing: '1.5px',
                    borderRadius: '0px'
                  }}>
                    {program.badge}
                  </div>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, #111111 0%, transparent 60%)'
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="font-header" style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '16px', fontWeight: 800 }}>
                      {program.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                      {program.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('contact')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#1c1c1c',
                      border: '2px solid rgba(255,255,255,0.15)',
                      padding: '14px 24px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-header)',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      letterSpacing: '1.5px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      borderRadius: '0px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-blue)';
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#1c1c1c';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <span>ENROLL IN PROGRAM →</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
