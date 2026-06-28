import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const HoursLocation: React.FC = () => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#080808', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">VISIT US</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '16px',
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>HOURS &</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>LOCATION</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>

          {/* Hours Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '48px',
              background: '#111111',
              border: '2px solid var(--accent-blue)'
            }}
          >
            <h3 className="font-header" style={{
              fontSize: '1.8rem',
              color: 'var(--accent-blue)',
              marginBottom: '32px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '2rem' }}>⏰</span>
              CLUB TIMING
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Morning */}
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  Morning Session
                </p>
                <p style={{
                  fontSize: '2rem',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontFamily: 'var(--font-header)'
                }}>
                  {COMPANY_DATA.hours.morning}
                </p>
              </div>

              {/* Evening */}
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  Evening Session
                </p>
                <p style={{
                  fontSize: '2rem',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontFamily: 'var(--font-header)'
                }}>
                  {COMPANY_DATA.hours.evening}
                </p>
              </div>
            </div>

            <div style={{
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                lineHeight: 1.6
              }}>
                ✓ Open Daily<br />
                ✓ Closed on National Holidays
              </p>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '48px',
              background: '#111111',
              border: '2px solid var(--accent-blue)'
            }}
          >
            <h3 className="font-header" style={{
              fontSize: '1.8rem',
              color: 'var(--accent-blue)',
              marginBottom: '32px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '2rem' }}>📍</span>
              LOCATION
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Address */}
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  Address
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  lineHeight: 1.6
                }}>
                  {COMPANY_DATA.location}
                </p>
              </div>

              {/* Contact */}
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  Contact
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  lineHeight: 1.8
                }}>
                  {COMPANY_DATA.phone.split('/').map((phone, idx) => (
                    <span key={idx} style={{ display: 'block' }}>
                      {phone.trim()}
                    </span>
                  ))}
                </p>
              </div>

              {/* Website */}
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  Website
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--accent-blue)',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}>
                  www.elegancefitnessclub.com
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
