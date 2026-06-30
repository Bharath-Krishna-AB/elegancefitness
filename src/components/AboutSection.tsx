import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#000000', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            marginTop: '0px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#FFFFFF' }}>ABOUT</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>THE COMPANY</span>
          </h2>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <p style={{ fontSize: '1.15rem', color: '#FFFFFF', lineHeight: 1.6, marginBottom: '32px' }}>
            {COMPANY_DATA.about}
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            {COMPANY_DATA.philosophy}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
