import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const HoursLocation: React.FC = () => {
  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FFFFFF',
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
            <span>[09] // FACILITY ACCESS & TIMING SPECIFICATION</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            HOURS & <span style={{ color: '#0066FF' }}>LOCATION.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Direct operational schedules and physical coordination details for our primary athletic training complex.
        </div>
      </div>

      {/* Specification Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px'
      }}>
        {/* Hours Schedule Column (Spans 6 cols on desktop) */}
        <div style={{
          gridColumn: 'span 12',
          padding: '40px',
          backgroundColor: '#FAFAFC',
          border: '1px solid rgba(11, 15, 25, 0.1)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }} className="spec-col">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', display: 'block', marginBottom: '24px' }}>
              [OPERATIONAL SCHEDULE]
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid rgba(11, 15, 25, 0.1)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '8px' }}>
                  STANDARD TIMING (SAT - THU)
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B0F19', fontFamily: 'var(--font-header)' }}>
                  {COMPANY_DATA.hours.morning}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '8px' }}>
                  FRIDAY TIMING
                </span>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B0F19', fontFamily: 'var(--font-header)' }}>
                  {COMPANY_DATA.hours.evening}
                </div>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(11, 15, 25, 0.1)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#0B0F19',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>ACCESS PROTOCOL: BIOMETRIC ENTRY</span>
            <span style={{ color: '#0066FF' }}>STATUS: OPEN DAILY</span>
          </div>
        </div>

        {/* Location & Coordinates Column (Spans 6 cols on desktop) */}
        <div style={{
          gridColumn: 'span 12',
          padding: '40px',
          backgroundColor: '#0B0F19',
          color: '#FFFFFF',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }} className="spec-col">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', display: 'block', marginBottom: '24px' }}>
              [COORDINATES & CONTACT]
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginBottom: '8px' }}>
                  STUDIO ADDRESS
                </span>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5 }}>
                  {COMPANY_DATA.location}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginBottom: '8px' }}>
                  DIRECT DISPATCH LINES
                </span>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0066FF' }}>
                  {COMPANY_DATA.phone}
                </div>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#CBD5E1',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>SYSTEM DIRECTORY: ONLINE</span>
            <span>DOMINANCE PROTOCOL</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .spec-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
