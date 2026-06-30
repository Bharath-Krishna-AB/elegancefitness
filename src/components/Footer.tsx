import React from 'react';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { COMPANY_DATA } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Top Architectural Marquee */}
      <div style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '24px 0'
      }}>
        <div className="marquee-content" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-header)', color: '#0066FF' }}>
          {Array(6).fill("ELEGANCE FITNESS CLUB // ARCHITECTURAL ATHLETICS // LONDON • TOKYO • NYC // COMPLEMENTARY BIOMETRIC EVALUATION // ").map((t, i) => (
            <span key={i} style={{ paddingRight: '48px' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main Structural Directory Grid */}
      <div style={{
        padding: '80px 6vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '40px'
      }}>
        {/* Brand Identity & Mission (Spans 5 cols on desktop) */}
        <div style={{ gridColumn: 'span 12' }} className="footer-brand">
          <div className="font-header" style={{ fontSize: '2rem', marginBottom: '16px', fontFamily: 'Menda' }}>
            ELEGANCE<span style={{ color: '#0066FF' }}>/CLUB</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#FFFFFF', lineHeight: 1.3, maxWidth: '400px', marginBottom: '32px' }}>
            {COMPANY_DATA.subTagline} Established in {COMPANY_DATA.established} with uncompromised competition standards and specialized floor protocols.
          </p>
          <div style={{ display: 'flex', gap: '24px', color: '#0066FF' }}>
            <a href="https://instagram.com/eleganceclub" target="_blank" rel="noopener noreferrer" style={{ color: '#0066FF', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com/elegancefit" target="_blank" rel="noopener noreferrer" style={{ color: '#0066FF', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <FaXTwitter size={24} />
            </a>
            <a href="https://youtube.com/@elegancestudio" target="_blank" rel="noopener noreferrer" style={{ color: '#0066FF', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Directory Navigation (Spans 3 cols on desktop) */}
        <div style={{ gridColumn: 'span 12' }} className="footer-nav">
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', display: 'block', marginBottom: '20px' }}>
            INDEX // DIRECTORY
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['home', 'vision', 'offerings', 'pricing', 'contact'].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  fontFamily: 'Menda'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0066FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              >
                {tab === 'offerings' ? 'FLOOR ZONES' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal Specification */}
      <div style={{
        padding: '24px 4vw',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        fontSize: '0.75rem',
        color: '#FFFFFF'
      }}>
        <span>© 2026 ELEGANCE FITNESS CLUB ARCHITECTURE // ALL RIGHTS RESERVED</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>PRIVACY PROTOCOL</span>
          <span>TERMS OF SERVICE</span>
          <span>BIOMETRIC DISCLOSURE</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-brand { grid-column: span 5 !important; }
          .footer-nav { grid-column: span 3 !important; }
          .footer-assets { grid-column: span 4 !important; }
        }
      `}</style>
    </footer>
  );
};
