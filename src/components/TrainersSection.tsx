import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, TrainerItem } from '../data/content';

export const TrainersSection: React.FC = () => {
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
            <span>[05] // COACHING STAFF & SPECIALISTS</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            VERIFIED <span style={{ color: '#0066FF' }}>LEADERSHIP.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Our coaching staff comprises elite competitive athletes, exercise physiologists, and Olympic lifting specialists dedicated to uncompromised results.
        </div>
      </div>

      {/* Roster Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {COMPANY_DATA.trainers.map((trainer: TrainerItem, index: number) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              border: '1px solid rgba(11, 15, 25, 0.1)',
              borderRadius: '4px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#FAFAFC'
            }}
          >
            {/* Image Container */}
            <div style={{ position: 'relative', height: '340px', overflow: 'hidden', borderBottom: '1px solid rgba(11, 15, 25, 0.1)' }}>
              <img
                src={trainer.image}
                alt={trainer.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.08) grayscale(0.2)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: '#0B0F19',
                color: '#FFFFFF',
                padding: '4px 8px',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em'
              }}>
                [STAFF 0{index + 1}]
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyItems: 'space-between', gap: '20px' }}>
              <div>
                <h3 className="font-header" style={{ fontSize: '1.5rem', color: '#0B0F19', marginBottom: '6px' }}>
                  {trainer.name}
                </h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {trainer.specialty}
                </span>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(11, 15, 25, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#64748B',
                fontWeight: 600
              }}>
                <span>TENURE: {trainer.experience}</span>
                <span style={{ color: '#0B0F19' }}>STATUS: ACTIVE</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
