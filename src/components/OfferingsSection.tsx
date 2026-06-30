import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA, ProgramItem } from '../data/content';

interface OfferingsProps {
  setActiveTab: (tab: string) => void;
}

export const OfferingsSection: React.FC<OfferingsProps> = ({ setActiveTab }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#FFFFFF' }}>WHAT WE</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>OFFER</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.3 }}>
            Professional fitness facilities and services designed for serious training. State-of-the-art equipment, certified trainers, and comprehensive wellness support.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          <AnimatePresence>
            {COMPANY_DATA.facilities.map((program: ProgramItem) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="card-image" style={{ filter: hoveredId === program.id ? 'blur(8px)' : 'blur(0px)', transition: 'filter 0.3s ease' }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{
                      filter: 'contrast(1.1) grayscale(0.2)'
                    }}
                  />
                </div>

                <div className="card-content" style={{ justifyContent: hoveredId === program.id ? 'center' : 'flex-end', alignItems: 'center' }}>
                  <div style={{ display: hoveredId === program.id ? 'none' : 'block', width: '100%' }}>
                    <h3 className="card-title" style={{ textAlign: 'center' }}>
                      {program.title}
                    </h3>
                  </div>
                  {hoveredId === program.id && (
                    <p className="card-subtitle" style={{ textAlign: 'center', opacity: 1, transition: 'opacity 0.3s ease', margin: 0 }}>
                      {program.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
