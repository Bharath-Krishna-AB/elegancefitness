import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, ProgramItem } from '../data/content';

interface OfferingsProps {
  setActiveTab: (tab: string) => void;
}

export const OfferingsSection: React.FC<OfferingsProps> = ({ setActiveTab }) => {
  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FAFAFC',
      borderTop: '1px solid rgba(11, 15, 25, 0.1)'
    }}>
      {/* Section Header */}
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
            <span>[02] // FLOOR ZONES & SPECIALIZATIONS</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            CURATED <span style={{ color: '#0066FF' }}>PROTOCOLS.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Professional performance zones engineered for complete physical progression. Built with competition-grade hardware and certified coaching support.
        </div>
      </div>

      {/* Specification Matrix Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px'
      }}>
        {COMPANY_DATA.programs.map((program: ProgramItem, index: number) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bento-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(11, 15, 25, 0.1)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            {/* Architectural Image Container */}
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden', borderBottom: '1px solid rgba(11, 15, 25, 0.1)' }}>
              <img
                src={program.image}
                alt={program.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.05) grayscale(0.15)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#0B0F19',
                color: '#FFFFFF',
                padding: '4px 10px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px'
              }}>
                [SPEC 0{index + 1}] // {program.badge}
              </div>
            </div>

            {/* Matrix Content */}
            <div style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              gap: '24px'
            }}>
              <div>
                <h3 className="font-header" style={{ fontSize: '1.5rem', color: '#0B0F19', marginBottom: '12px' }}>
                  {program.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>
                  {program.description}
                </p>
              </div>

              <div style={{
                paddingTop: '20px',
                borderTop: '1px solid rgba(11, 15, 25, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF' }}>ACCESS: MEMBERSHIP INCLUDED</span>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(11, 15, 25, 0.2)',
                    color: '#0B0F19',
                    padding: '8px 16px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0B0F19';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0B0F19';
                  }}
                >
                  ENROLL →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
