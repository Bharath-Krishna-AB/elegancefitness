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
    <section style={{ padding: '120px 10vw', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ width: '100%' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">PROGRAMS & EXPANSION</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '16px'
          }}>
            <span style={{ color: '#fff' }}>THE GOAL FOR</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>EXPANSION & DOMINANCE</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.15rem', color: 'var(--text-muted)', marginTop: '16px' }}>
            We are rapidly scaling our infrastructure to deliver elite men's fitness experiences. Premium facilities, advanced recovery zones, and specialized training for hardcore results.
          </p>
        </div>

        {/* Strategic Pillars Overview (From Page 5 of PDF) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '80px'
        }}>
          {COMPANY_DATA.expansionGoals.map((goal, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                background: 'rgba(17,17,22,0.9)',
                borderTop: `3px solid ${idx === 0 ? 'var(--accent-blue)' : idx === 1 ? '#fff' : idx === 2 ? 'var(--accent-blue)' : '#aaa'}`
              }}
            >
              <h4 className="font-header" style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '16px' }}>{goal.category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {goal.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: '#ccc' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 900 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="font-header"
              style={{
                padding: '10px 28px',
                fontSize: '1rem',
                border: filter === cat ? '2px solid var(--accent-blue)' : '2px solid rgba(255,255,255,0.1)',
                background: filter === cat ? 'var(--accent-blue)' : 'transparent',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '1px'
              }}
            >
              {cat === 'All' ? 'ALL PROGRAMS' : cat === 'Men' ? "MEN'S GYM" : "FUNCTIONAL & HOLISTIC"}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '30px' }}>
          <AnimatePresence>
            {filteredPrograms.map((program: ProgramItem) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative'
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
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--accent-blue)',
                    color: '#000',
                    padding: '4px 12px',
                    fontFamily: 'var(--font-header)',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}>
                    {program.badge}
                  </div>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(17,17,22,0.6)'
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>
                      {program.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {program.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('contact')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '12px 20px',
                      color: '#fff',
                      fontFamily: 'var(--font-header)',
                      fontSize: '1rem',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      e.currentTarget.style.color = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = '#fff';
                    }}
                  >
                    <span>ENROLL IN PROGRAM</span>
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
