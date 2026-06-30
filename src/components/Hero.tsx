import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { COMPANY_DATA } from '../data/content';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        Array.from(titleRef.current.children),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '130px',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Dark Masculine Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=90')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        opacity: 0.35,
        filter: 'contrast(1.2) grayscale(0.4)'
      }} />

      {/* Directional gradient for legibility + depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(100deg, #000000 25%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.3) 100%)',
        zIndex: 1
      }} />

      {/* Main Content */}
      <div style={{
        padding: '0 6vw 80px',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
      }}>
        <h1
          ref={titleRef}
          className="font-header"
          style={{
            fontWeight: 900,
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '-1.5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          {[
            { text: 'ONE LIFE', color: '#FFFFFF' },
            { text: 'ONE BODY', color: 'var(--accent-blue)' },
            { text: 'ONE CHANCE', color: '#FFFFFF' }
          ].map((row, i) => (
            <span key={i} style={{ display: 'block', lineHeight: 0.95 }}>
              <span style={{ color: row.color, fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)', fontWeight: 900 }}>
                {row.text}
              </span>
            </span>
          ))}
        </h1>

        <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
          <span style={{ display: 'block', color: 'var(--accent-blue)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '20px', lineHeight: 1.1 }}>
            {COMPANY_DATA.subTagline.toUpperCase()}
          </span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#FFFFFF',
              lineHeight: 1.4,
              fontWeight: 400
            }}
          >
            Discover the true elegance of hardcore fitness. State-of-the-art facilities, specialized personal coaching, and an electric community dedicated to physical, mental, and emotional dominance.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <button onClick={() => setActiveTab('offerings')} className="btn-primary">
            <span>EXPLORE PROGRAMS</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </button>
          <button onClick={() => setActiveTab('vision')} className="btn-outline">
            <span>COMPANY PROFILE</span>
          </button>
        </motion.div>

      </div>

    </section>
  );
};
