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
        opacity: 0.25,
        filter: 'contrast(1.2) grayscale(0.5)'
      }} />

      {/* Grid Pattern overlay */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 1 }} />

      {/* Main Content */}
      <div style={{
        padding: '60px 6vw',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">ESTABLISHED {COMPANY_DATA.established} • PREMIER HEALTH & WELLNESS</span>
        </motion.div>

        <h1
          ref={titleRef}
          className="font-header"
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '-2px'
          }}
        >
          <span style={{
            display: 'block',
            color: 'var(--accent-blue)',
            fontSize: 'clamp(4rem, 12vw, 12rem)',
            fontWeight: 900,
            lineHeight: 0.8,
            textShadow: '0 0 60px rgba(0, 148, 217, 0.4)'
          }}>
            1
          </span>
          <span style={{ display: 'block', color: '#ffffff', marginTop: '-20px' }}>LIFE</span>
          <span style={{ display: 'block', color: 'var(--accent-blue)', marginTop: '-8px' }}>1 BODY</span>
          <span style={{ display: 'block', color: '#ffffff', marginTop: '-8px' }}>1 CHANGE</span>
          <span style={{ display: 'block', color: 'var(--accent-blue)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginTop: '24px', fontWeight: 800, letterSpacing: '0px' }}>
            TRANSFORM TO ELEGANCE
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
            color: '#bbbbbb',
            maxWidth: '700px',
            marginBottom: '48px',
            lineHeight: 1.6,
            fontWeight: 500
          }}
        >
          Discover the true elegance of hardcore fitness. State-of-the-art facilities, specialized personal coaching, and an electric community dedicated to physical, mental, and emotional dominance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <button onClick={() => setActiveTab('offerings')} className="btn-primary">
            <span>EXPLORE PROGRAMS</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </button>
          <button onClick={() => setActiveTab('about')} className="btn-outline">
            <span>COMPANY PROFILE</span>
          </button>
        </motion.div>

        {/* Quick Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <div style={{ borderLeft: '3px solid var(--accent-blue)', paddingLeft: '16px' }}>
            <h4 className="font-header" style={{ fontSize: '1.6rem', lineHeight: 1.1, color: '#ffffff', marginBottom: '8px', fontWeight: 800 }}>SINCE 2019</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Proven Community Impact</p>
          </div>

          <div style={{ borderLeft: '3px solid var(--accent-blue)', paddingLeft: '16px' }}>
            <h4 className="font-header" style={{ fontSize: '1.6rem', lineHeight: 1.1, color: '#ffffff', marginBottom: '8px', fontWeight: 800 }}>PREMIUM FACILITIES</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>State-of-the-Art Men's Gym</p>
          </div>

          <div style={{ borderLeft: '3px solid var(--accent-blue)', paddingLeft: '16px' }}>
            <h4 className="font-header" style={{ fontSize: '1.6rem', lineHeight: 1.1, color: '#ffffff', marginBottom: '8px', fontWeight: 800 }}>HOLISTIC WELLNESS</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Physical, Mental & Emotional</p>
          </div>
        </motion.div>
      </div>

      {/* Kinetic Marquee Ticker */}
      <div style={{
        background: 'var(--accent-blue)',
        color: '#000000',
        padding: '20px 0',
        position: 'relative',
        zIndex: 10,
        transform: 'rotate(-1.5deg) scale(1.03)',
        marginTop: '60px',
        borderTop: '3px solid #000000',
        borderBottom: '3px solid #000000',
        boxShadow: '0 10px 30px rgba(204,255,0,0.2)'
      }}>
        <div className="marquee-container">
          <div className="marquee-content font-header" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '3px' }}>
            {Array(6).fill("• ELEGANCE FITNESS CLUB EST. 2019 • DISCOVER THE ELEGANCE OF FITNESS • ADVANCED MEN'S & LADIES' ZONES • HOLISTIC POWER • ").map((text, i) => (
              <span key={i} style={{ paddingRight: '24px' }}>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
