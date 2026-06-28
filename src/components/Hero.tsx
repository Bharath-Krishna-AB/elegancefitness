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
        paddingTop: '120px',
        backgroundColor: '#08080a',
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
        opacity: 0.3
      }} />

      {/* Grid Pattern overlay */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 1 }} />

      {/* Main Content */}
      <div style={{
        padding: '60px 10vw',
        position: 'relative',
        zIndex: 2,
        width: '100%'
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
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            marginBottom: '24px',
            textTransform: 'uppercase',
            maxWidth: '1100px'
          }}
        >
          <span style={{ display: 'block', color: '#fff' }}>WHERE YOUR</span>
          <span style={{ display: 'block', color: 'var(--accent-blue)' }}>
            FITNESS JOURNEY
          </span>
          <span style={{ display: 'block', color: '#fff' }}>BEGINS</span>
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', color: 'var(--text-muted)' }}>
            AND A HEALTHIER LIFESTYLE AWAITS.
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
            color: '#d0d0e0',
            maxWidth: '750px',
            marginBottom: '40px',
            lineHeight: 1.6
          }}
        >
          Discover the true elegance of hardcore fitness. State-of-the-art facilities, specialized personal coaching, and an electric community dedicated to physical, mental, and emotional dominance.
        </motion.p>

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
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div>
            <h4 className="font-header" style={{ fontSize: '1.5rem', lineHeight: 1, color: '#fff', marginBottom: '8px' }}>SINCE 2019</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Proven Community Impact</p>
          </div>

          <div>
            <h4 className="font-header" style={{ fontSize: '1.5rem', lineHeight: 1, color: '#fff', marginBottom: '8px' }}>PREMIUM FACILITIES</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>State-of-the-Art Men's Gym</p>
          </div>

          <div>
            <h4 className="font-header" style={{ fontSize: '1.5rem', lineHeight: 1, color: '#fff', marginBottom: '8px' }}>HOLISTIC WELLNESS</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Physical, Mental & Emotional</p>
          </div>
        </motion.div>
      </div>

      {/* Kinetic Marquee Ticker */}
      <div style={{
        background: 'var(--accent-blue)',
        color: '#08080a',
        padding: '16px 0',
        position: 'relative',
        zIndex: 10,
        transform: 'rotate(-1deg) scale(1.02)',
        marginTop: '40px'
      }}>
        <div className="marquee-container">
          <div className="marquee-content font-header" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '3px' }}>
            {Array(6).fill("• ELEGANCE FITNESS CLUB EST. 2019 • DISCOVER THE ELEGANCE OF FITNESS • ADVANCED MEN'S & LADIES' ZONES • HOLISTIC POWER • ").map((text, i) => (
              <span key={i} style={{ paddingRight: '20px' }}>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
