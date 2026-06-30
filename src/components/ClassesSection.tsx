import React from 'react';
import { motion } from 'framer-motion';

interface ClassItem {
  id: string;
  code: string;
  name: string;
  description: string;
  duration: string;
  intensity: string;
  category: string;
}

export const ClassesSection: React.FC = () => {
  const classes: ClassItem[] = [
    {
      id: 'strength',
      code: 'PROTOCOL // 01',
      name: 'HARDCORE STRENGTH',
      description: 'Heavy Olympic lifting protocols & specialized powerlifting progressions.',
      duration: '60 MIN',
      intensity: 'MAXIMAL',
      category: 'POWER & FORCE'
    },
    {
      id: 'combat',
      code: 'PROTOCOL // 02',
      name: 'FUNCTIONAL COMBAT',
      description: 'High-intensity anaerobic conditioning floors & turf metabolic agility.',
      duration: '45 MIN',
      intensity: 'EXTREME',
      category: 'METABOLIC CONDITIONING'
    },
    {
      id: 'yoga',
      code: 'PROTOCOL // 03',
      name: 'MOBILITY & RECOVERY',
      description: 'Restorative structural flexibility & deep fascial release flows.',
      duration: '50 MIN',
      intensity: 'RESTORATIVE',
      category: 'LONGEVITY & REHAB'
    },
    {
      id: 'sauna',
      code: 'PROTOCOL // 04',
      name: 'CONTRAST THERAPY',
      description: 'Post-workout thermal rejuvenation & cellular recovery suite.',
      duration: '30 MIN',
      intensity: 'PASSIVE',
      category: 'CELLULAR WELLNESS'
    }
  ];

  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FAFAFC',
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
            <span>[04] // SCHEDULED PROTOCOLS & SESSIONS</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            TRAINING <span style={{ color: '#0066FF' }}>SCHEDULE.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Signature 45 and 60-minute protocols engineered for measurable athletic progression. Structured daily across specialized floor zones.
        </div>
      </div>

      {/* Tabular Schedule List */}
      <div style={{
        borderTop: '1px solid rgba(11, 15, 25, 0.1)',
        borderBottom: '1px solid rgba(11, 15, 25, 0.1)'
      }}>
        {classes.map((cls, idx) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            style={{
              padding: '32px 16px',
              borderBottom: idx < classes.length - 1 ? '1px solid rgba(11, 15, 25, 0.1)' : 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F8F9FA';
              e.currentTarget.style.paddingLeft = '24px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.paddingLeft = '16px';
            }}
          >
            {/* Protocol Code (Cols 1-2) */}
            <div style={{ gridColumn: 'span 2', fontSize: '0.75rem', fontWeight: 700, color: '#0066FF' }}>
              {cls.code}
            </div>

            {/* Protocol Name & Category (Cols 3-6) */}
            <div style={{ gridColumn: 'span 4' }}>
              <h3 className="font-header" style={{ fontSize: '1.4rem', color: '#0B0F19', margin: 0 }}>
                {cls.name}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                {cls.category}
              </span>
            </div>

            {/* Description (Cols 7-9) */}
            <div style={{ gridColumn: 'span 3', fontSize: '0.9rem', color: '#64748B' }}>
              {cls.description}
            </div>

            {/* Metrics & Action (Cols 10-12) */}
            <div style={{
              gridColumn: 'span 3',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '24px'
            }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>DURATION</span>
                <strong style={{ fontSize: '0.9rem', color: '#0B0F19' }}>{cls.duration}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>INTENSITY</span>
                <strong style={{ fontSize: '0.9rem', color: '#0066FF' }}>{cls.intensity}</strong>
              </div>
              <button style={{
                background: '#0B0F19',
                color: '#FFFFFF',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0B0F19')}
              >
                ↗
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          section > div > div > div { grid-column: span 12 !important; text-align: left !important; justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
};
