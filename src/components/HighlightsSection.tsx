import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const HighlightsSection: React.FC = () => {

  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {COMPANY_DATA.highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                height: '600px',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <img
                src={item.image}
                alt={item.label.replace('\n', ' ')}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '32px',
                left: '24px',
                right: '24px'
              }}>
                <span className="font-header" style={{
                  display: 'block',
                  color: '#FFFFFF',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  whiteSpace: 'pre-line'
                }}>
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
