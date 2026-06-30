import React from 'react';
import { motion } from 'framer-motion';

interface ClassItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const ClassesSection: React.FC = () => {
  const classes: ClassItem[] = [
    {
      id: 'strength',
      name: 'HARDCORE STRENGTH',
      description: 'Heavy Olympic lifting & powerlifting platforms',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
      category: 'POWER'
    },
    {
      id: 'combat',
      name: 'FUNCTIONAL COMBAT',
      description: 'High-intensity conditioning rigs & battle ropes',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      category: 'HIIT'
    },
    {
      id: 'yoga',
      name: 'MOBILITY & YOGA',
      description: 'Restorative flexibility & mind-body recovery',
      image: 'https://images.unsplash.com/photo-1590406957014-54310a537580?auto=format&fit=crop&w=600&q=80',
      category: 'RECOVERY'
    },
    {
      id: 'sauna',
      name: 'SAUNA & REHAB',
      description: 'Post-workout rejuvenation & physical therapy',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80',
      category: 'WELLNESS'
    }
  ];

  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginTop: '16px',
            marginBottom: '24px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#FFFFFF' }}>TRANSFORM YOUR BODY IN</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>45 MINUTES OR LESS</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
            Our signature class collection designed to deliver maximum results with minimal time investment. Hardcore sessions tailored for men and women ready to push their boundaries.
          </p>
        </div>

        {/* Classes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                position: 'relative',
                height: '340px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                border: '1px solid var(--border-color)'
              }}
            >
              <img
                src={cls.image}
                alt={cls.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.2) grayscale(0.3)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#000000',
                color: 'var(--accent-blue)',
                border: '1px solid var(--accent-blue)',
                padding: '4px 12px',
                fontFamily: 'var(--font-header)',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                zIndex: 3
              }}>
                {cls.category}
              </div>

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                zIndex: 2
              }} />

              <div style={{
                position: 'relative',
                padding: '28px',
                zIndex: 3
              }}>
                <h3 className="font-header" style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 800 }}>
                  {cls.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 500 }}>
                  {cls.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary">
            <span>EXPLORE ALL CLASSES →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
