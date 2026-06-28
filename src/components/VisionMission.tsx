import React from 'react';
import { motion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#080808', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">OUR MISSION</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '32px',
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>NO PAIN</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>NO GAIN</span>
          </h2>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{
            padding: '60px',
            background: '#111111',
            border: '2px solid var(--accent-blue)',
            textAlign: 'center'
          }}
        >
          <h3 className="font-header" style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: 1.4
          }}>
            To provide a professional fitness gym environment where dedicated men can train hard and achieve their fitness goals with certified trainer support and quality equipment.
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            marginTop: '32px'
          }}>
            We believe in dedication, hard work, and real results. Our professional team is committed to supporting your fitness journey with expert guidance, modern facilities, and unwavering support.
          </p>

          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span className="font-header" style={{
                fontSize: '2.5rem',
                color: 'var(--accent-blue)',
                fontWeight: 900,
                display: 'block',
                marginBottom: '8px'
              }}>
                ✓
              </span>
              <p style={{ color: '#ffffff', fontWeight: 600 }}>Certified Trainers</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span className="font-header" style={{
                fontSize: '2.5rem',
                color: 'var(--accent-blue)',
                fontWeight: 900,
                display: 'block',
                marginBottom: '8px'
              }}>
                ✓
              </span>
              <p style={{ color: '#ffffff', fontWeight: 600 }}>Modern Equipment</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span className="font-header" style={{
                fontSize: '2.5rem',
                color: 'var(--accent-blue)',
                fontWeight: 900,
                display: 'block',
                marginBottom: '8px'
              }}>
                ✓
              </span>
              <p style={{ color: '#ffffff', fontWeight: 600 }}>Professional Support</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
