import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, TrainerItem } from '../data/content';

export const TrainersSection: React.FC = () => {
  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '16px',
            marginTop: '0px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#FFFFFF' }}>CERTIFIED</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>PROFESSIONAL TRAINERS</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.3 }}>
            Our team of certified professionals with extensive experience are dedicated to guiding your fitness transformation.
          </p>
        </div>

        {/* Trainers Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
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
                minHeight: '800px'
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
                    color: '#FFFFFF',
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
                textTransform: 'uppercase',
                zIndex: 10
              }}>
                Certified
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Find Your Trainer Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '18px 48px', letterSpacing: '1px' }}
          >
            FIND YOUR TRAINER
          </button>
        </div>

      </div>
    </section>
  );
};
