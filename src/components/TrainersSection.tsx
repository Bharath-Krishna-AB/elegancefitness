import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, TrainerItem } from '../data/content';

export const TrainersSection: React.FC = () => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">EXPERT COACHING</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '16px',
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>CERTIFIED</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>PROFESSIONAL TRAINERS</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Our team of certified professionals with extensive experience are dedicated to guiding your fitness transformation.
          </p>
        </div>

        {/* Trainers Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}
        >
          {COMPANY_DATA.trainers.map((trainer: TrainerItem, index: number) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                minHeight: '380px'
              }}
            >
              <div className="card-image">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  style={{
                    filter: 'contrast(1.1) brightness(1.0)'
                  }}
                />
              </div>

              <div className="card-content">
                <div>
                  <h3 className="card-title" style={{
                    marginBottom: '8px'
                  }}>
                    {trainer.name}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--accent-blue)',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    marginBottom: '16px'
                  }}>
                    {trainer.specialty}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#cccccc',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 900 }}>★</span>
                    <span>{trainer.experience} Experience</span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'var(--accent-blue)',
                color: '#000000',
                padding: '8px 16px',
                fontFamily: 'var(--font-header)',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Certified
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '80px',
            padding: '60px',
            background: '#111111',
            border: '2px solid var(--accent-blue)',
            textAlign: 'center'
          }}
        >
          <h3 className="font-header" style={{
            fontSize: '2rem',
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            Ready for Your Transformation?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Get paired with a certified trainer and start your fitness journey today.
          </p>
          <button
            style={{
              background: 'var(--accent-blue)',
              color: '#000000',
              padding: '16px 48px',
              fontFamily: 'var(--font-header)',
              fontSize: '1.1rem',
              fontWeight: 800,
              border: '2px solid var(--accent-blue)',
              cursor: 'pointer',
              letterSpacing: '1.5px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-blue)';
              e.currentTarget.style.color = '#000000';
            }}
          >
            GET STARTED →
          </button>
        </motion.div>

      </div>
    </section>
  );
};
