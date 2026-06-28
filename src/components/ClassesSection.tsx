import React from 'react';
import { motion } from 'framer-motion';

interface ClassItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const ClassesSection: React.FC = () => {
  const classes: ClassItem[] = [
    {
      id: 'rhythm',
      name: 'RHYTHM',
      description: 'High-energy dance cardio',
      image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'sweat',
      name: 'SWEAT',
      description: 'Intense HIIT & strength',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'aerial',
      name: 'AERIAL',
      description: 'Suspension & core training',
      image: 'https://images.unsplash.com/photo-1590406957014-54310a537580?auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section style={{ padding: '120px 10vw', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ width: '100%' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <span className="badge" style={{ display: 'inline-block' }}>SIGNATURE CLASSES</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            marginTop: '16px',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#fff' }}>TRANSFORM YOUR BODY IN</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>45 MINUTES OR LESS</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Our signature class collection designed to deliver maximum results with minimal time investment.
          </p>
        </div>

        {/* Classes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                height: '280px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <img
                src={cls.image}
                alt={cls.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px',
                zIndex: 2
              }}>
                <h3 className="font-header" style={{ fontSize: '2rem', color: '#fff', marginBottom: '4px' }}>
                  {cls.name}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
                  {cls.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            background: 'var(--accent-blue)',
            color: '#000',
            padding: '16px 40px',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '2px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <span>EXPLORE ALL CLASSES</span>
          </button>
        </div>
      </div>
    </section>
  );
};
