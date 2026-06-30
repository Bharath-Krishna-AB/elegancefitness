import React from 'react';
import { motion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#0B0F19',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '32px',
        alignItems: 'center'
      }}>
        {/* Left Specification Column */}
        <div style={{ gridColumn: 'span 4' }} className="manifesto-left">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', marginBottom: '16px' }}>
            [07] // MANIFESTO & MISSION
          </div>
          <h2 className="font-header" style={{ fontSize: '2.5rem', lineHeight: 1.1, margin: 0 }}>
            ABSOLUTE <span style={{ color: '#0066FF' }}>STANDARDS.</span>
          </h2>
          <div style={{
            marginTop: '32px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            fontSize: '0.85rem',
            color: '#CBD5E1',
            lineHeight: 1.6
          }}>
            We reject mediocrity and short-term trends. Our environment is constructed strictly for measurable physical rigor, psychological resilience, and long-term athletic dominance.
          </div>
        </div>

        {/* Right Monumental Statement Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            gridColumn: 'span 8',
            padding: '48px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px'
          }}
          className="manifesto-right"
        >
          <p style={{
            fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
            fontFamily: 'var(--font-header)',
            lineHeight: 1.3,
            fontWeight: 700,
            color: '#FFFFFF',
            margin: 0
          }}>
            "To provide an elite architectural environment where dedicated individuals train hard and achieve absolute dominance with certified coaching and competition-grade hardware."
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#0066FF', display: 'block' }}>PILLAR 01</span>
              <strong style={{ fontSize: '0.9rem' }}>Uncompromised Rigor</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#0066FF', display: 'block' }}>PILLAR 02</span>
              <strong style={{ fontSize: '0.9rem' }}>Competition Rigs</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#0066FF', display: 'block' }}>PILLAR 03</span>
              <strong style={{ fontSize: '0.9rem' }}>Verified Progress</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .manifesto-left, .manifesto-right { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};
