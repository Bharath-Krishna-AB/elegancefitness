import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA, ProgramItem } from '../data/content';

interface OfferingsProps {
  setActiveTab: (tab: string) => void;
}

export const OfferingsSection: React.FC<OfferingsProps> = ({ setActiveTab }) => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge">FACILITIES & SERVICES</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>WHAT WE</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>OFFER</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Professional fitness facilities and services designed for serious training. State-of-the-art equipment, certified trainers, and comprehensive wellness support.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          <AnimatePresence>
            {COMPANY_DATA.programs.map((program: ProgramItem) => (
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
                    <span>LEARN MORE →</span>
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
