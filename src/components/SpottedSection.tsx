import React from 'react';
import { motion } from 'framer-motion';

interface SpottedItem {
  id: string;
  image: string;
}

export const SpottedSection: React.FC = () => {
  const spottedMembers: SpottedItem[] = [
    { id: '1', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=500&q=80' },
    { id: '2', image: 'https://images.unsplash.com/photo-1552258987-868568533f0a?auto=format&fit=crop&w=500&q=80' },
    { id: '3', image: 'https://images.unsplash.com/photo-1521575107034-e3fb11b08e77?auto=format&fit=crop&w=500&q=80' },
    { id: '4', image: 'https://images.unsplash.com/photo-1530549999881-3e9db2d4f0c4?auto=format&fit=crop&w=500&q=80' },
    { id: '5', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500&q=80' },
    { id: '6', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
    { id: '7', image: 'https://images.unsplash.com/photo-1520466809213-d91513707d69?auto=format&fit=crop&w=500&q=80' },
    { id: '8', image: 'https://images.unsplash.com/photo-1500595046891-c923c46c7e7b?auto=format&fit=crop&w=500&q=80' },
    { id: '9', image: 'https://images.unsplash.com/photo-1571308355916-3aee62e9b0a7?auto=format&fit=crop&w=500&q=80' }
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
            <span>[06] // COMMUNITY ARCHIVE & DOCUMENTATION</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            ATHLETIC <span style={{ color: '#0066FF' }}>CULTURE.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Visual records of uncompromised training inside our studio. Dedicated effort, camaraderie, and measurable progression.
        </div>
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {spottedMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{
              position: 'relative',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid rgba(11, 15, 25, 0.1)',
              borderRadius: '2px',
              backgroundColor: '#FFFFFF'
            }}
          >
            <img
              src={member.image}
              alt="Archive Item"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.1) grayscale(0.25)',
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.filter = 'contrast(1.05) grayscale(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1.0)';
                e.currentTarget.style.filter = 'contrast(1.1) grayscale(0.25)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              backgroundColor: 'rgba(11, 15, 25, 0.85)',
              color: '#FFFFFF',
              padding: '4px 8px',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>
              [REC // 0{index + 1}]
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
