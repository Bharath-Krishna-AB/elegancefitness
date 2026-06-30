import React from 'react';
import { motion } from 'framer-motion';

interface SpottedItem {
  id: string;
  image: string;
}

export const SpottedSection: React.FC = () => {
  const spottedMembers: SpottedItem[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1552258987-868568533f0a?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1521575107034-e3fb11b08e77?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1530549999881-3e9db2d4f0c4?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '7',
      image: 'https://images.unsplash.com/photo-1520466809213-d91513707d69?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '8',
      image: 'https://images.unsplash.com/photo-1500595046891-c923c46c7e7b?auto=format&fit=crop&w=400&q=60'
    },
    {
      id: '9',
      image: 'https://images.unsplash.com/photo-1571308355916-3aee62e9b0a7?auto=format&fit=crop&w=400&q=60'
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
            <span style={{ color: '#FFFFFF' }}>SPOTTED IN</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>THE CLUB</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Witness the transformation stories of our community members pushing their limits every single day. Hardcore training, shared camaraderie, and real results.
          </p>
        </div>

        {/* Members Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {spottedMembers.map((member) => (
            <motion.div
              key={member.id}
              className="glass-panel"
              style={{
                position: 'relative',
                height: '260px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#000000'
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
              }}
            >
              <img
                src={member.image}
                alt="Member"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.15) grayscale(0.2)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                opacity: 0,
                transition: 'opacity 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--accent-blue)',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  fontSize: '1.5rem',
                  fontWeight: 900
                }}>
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn-outline">
            <span>VIEW MORE MEMBERS →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
