import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid rgba(11, 15, 25, 0.1)'
    }}>
      {/* Top Section Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '64px',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div>
          <div className="section-index" style={{ marginBottom: '16px' }}>
            <span>[01] // THE PHILOSOPHY</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            maxWidth: '800px',
            margin: 0
          }}>
            ENGINEERED FOR <span style={{ color: '#0066FF' }}>EXCELLENCE.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '400px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          {COMPANY_DATA.subTagline} Built on uncompromised structural quality since {COMPANY_DATA.established}.
        </div>
      </div>

      {/* Bento Grid Architecture */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px'
      }}>
        {/* Large Main Editorial Block (Spans 8 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            gridColumn: 'span 12',
            padding: '48px',
            backgroundColor: '#FAFAFC',
            border: '1px solid rgba(11, 15, 25, 0.1)',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="bento-col-8"
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', display: 'block', marginBottom: '24px' }}>
              [CORE MISSION STATEMENT]
            </span>
            <p style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
              color: '#0B0F19',
              lineHeight: 1.4,
              fontWeight: 700,
              maxWidth: '900px',
              marginBottom: '32px'
            }}>
              {COMPANY_DATA.about}
            </p>
          </div>

          <div style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(11, 15, 25, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>PHILOSOPHY</span>
              <p style={{ fontSize: '0.95rem', color: '#0B0F19', fontWeight: 600 }}>{COMPANY_DATA.philosophy}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>FACILITIES</span>
              <p style={{ fontSize: '0.95rem', color: '#0B0F19', fontWeight: 600 }}>{COMPANY_DATA.facilitiesDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* Feature Matrix Box (Spans 4 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            gridColumn: 'span 12',
            padding: '48px',
            backgroundColor: '#0B0F19',
            color: '#FFFFFF',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="bento-col-4"
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', display: 'block', marginBottom: '24px' }}>
              [VERIFIED PROTOCOLS]
            </span>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-header)', lineHeight: 1, marginBottom: '24px' }}>
              100%
            </div>
            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', marginBottom: '32px' }}>
              Uncompromising dedication to athletic progression and community leadership.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              "Certified Elite Coaching",
              "Olympic Weightlifting Rigs",
              "Specialized Conditioning",
              "Sauna Recovery Suite"
            ].map((point, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <span style={{ color: '#0066FF' }}>[0{idx + 1}]</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 1024px) {
          .bento-col-8 { grid-column: span 8 !important; }
          .bento-col-4 { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
