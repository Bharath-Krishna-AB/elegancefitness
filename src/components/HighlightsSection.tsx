import React from 'react';
import { motion } from 'framer-motion';

interface HighlightItem {
  id: string;
  label: string;
  image: string;
}

export const HighlightsSection: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      id: 'equipment',
      label: 'BEST\nEQUIPMENT',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'trainers',
      label: 'CERTIFIED\nTRAINERS',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'space',
      label: 'SPACIOUS\nFACILITY',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {highlights.map((item, idx) => (
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
