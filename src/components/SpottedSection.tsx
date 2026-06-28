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
    <section style={{ padding: '120px 10vw', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ width: '100%' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <span className="badge" style={{ display: 'inline-block' }}>COMMUNITY SPOTLIGHT</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            marginTop: '16px',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#fff' }}>SPOTTED IN</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>THE BOX</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Witness the transformation stories of our community members pushing their limits every single day.
          </p>
        </div>

        {/* Members Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '60px'
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
              style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
              }}
            >
              <img
                src={member.image}
                alt="Member"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--accent-blue)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontSize: '1.8rem'
                }}>
                  ▶
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            background: 'transparent',
            color: 'var(--accent-blue)',
            border: '2px solid var(--accent-blue)',
            padding: '14px 40px',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-header)',
            fontWeight: 700,
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-blue)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent-blue)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            VIEW MORE MEMBERS
          </button>
        </div>
      </div>
    </section>
  );
};
