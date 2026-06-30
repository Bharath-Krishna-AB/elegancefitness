import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        Array.from(titleRef.current.children),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out', delay: 0.1 }
      );
    }
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: '120px',
      backgroundColor: '#FAFAFC'
    }}>
      {/* Structural Top Grid Lines */}
      <div style={{
        padding: '32px 4vw',
        borderBottom: '1px solid rgba(11, 15, 25, 0.1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        fontSize: '0.8rem',
        color: '#64748B'
      }}>
        <div>
          <span style={{ fontWeight: 700, color: '#0B0F19', display: 'block' }}>ARCHITECTURAL ATHLETICS</span>
          <span>HIGH PERFORMANCE RIGS & COACHING</span>
        </div>
        <div>
          <span style={{ fontWeight: 700, color: '#0B0F19', display: 'block' }}>ESTABLISHED 2019</span>
          <span>LEGACY OF UNCOMPROMISED STANDARDS</span>
        </div>
        <div>
          <span style={{ fontWeight: 700, color: '#0066FF', display: 'block' }}>MEMBERSHIP INTAKE</span>
          <span>SELECT ROSTER OPEN FOR 2026</span>
        </div>
      </div>

      {/* Main Monumental Content */}
      <div style={{
        padding: '60px 4vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '48px',
        alignItems: 'flex-end',
        flexGrow: 1
      }}>
        {/* Giant Headline */}
        <div>
          <div className="section-index" style={{ marginBottom: '24px' }}>
            <span>[00] // STATEMENT</span>
          </div>
          <h1
            ref={titleRef}
            className="font-header"
            style={{
              fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)',
              color: '#0B0F19',
              margin: 0
            }}
          >
            <span style={{ display: 'block' }}>ABSOLUTE</span>
            <span style={{ display: 'block', color: '#0066FF' }}>DOMINANCE.</span>
          </h1>
        </div>

        {/* Technical Specification & Editorial Paragraph */}
        <div style={{
          padding: '32px',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(11, 15, 25, 0.1)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '280px'
        }}>
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(11, 15, 25, 0.1)',
              paddingBottom: '16px',
              marginBottom: '24px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#64748B'
            }}>
              <span>FACILITY SPECIFICATION</span>
              <span>VERIFIED PROTOCOL</span>
            </div>
            <p style={{
              fontSize: '1.15rem',
              color: '#0B0F19',
              lineHeight: 1.6,
              fontWeight: 500,
              marginBottom: '32px'
            }}>
              The ultimate architectural environment engineered to unlock human performance. State-of-the-art strength zones, Olympic weightlifting rigs, and dedicated coaching protocols for elite athletic progression.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('offerings')} className="btn-primary">
              <span>EXPLORE PROTOCOLS</span>
              <span>→</span>
            </button>
            <button onClick={() => setActiveTab('about')} className="btn-outline">
              <span>THE PHILOSOPHY</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Specification Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        borderTop: '1px solid rgba(11, 15, 25, 0.1)',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{
          padding: '32px 4vw',
          borderRight: '1px solid rgba(11, 15, 25, 0.1)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '8px' }}>
            [METRIC 01] // HERITAGE
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B0F19', fontFamily: 'var(--font-header)' }}>
            EST. 2019
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
            Years of uncompromised physical rigor & community leadership.
          </p>
        </div>

        <div style={{
          padding: '32px 4vw',
          borderRight: '1px solid rgba(11, 15, 25, 0.1)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', display: 'block', marginBottom: '8px' }}>
            [METRIC 02] // ZONES
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B0F19', fontFamily: 'var(--font-header)' }}>
            360° FLOOR
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
            Dedicated specialized training floors for maximum athletic output.
          </p>
        </div>

        <div style={{
          padding: '32px 4vw'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: '8px' }}>
            [METRIC 03] // INTEGRATION
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B0F19', fontFamily: 'var(--font-header)' }}>
            HOLISTIC
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
            Strength, functional conditioning, and advanced recovery therapy.
          </p>
        </div>
      </div>
    </section>
  );
};
