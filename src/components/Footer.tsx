import React from 'react';
import { COMPANY_DATA } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer style={{ backgroundColor: '#000000', borderTop: '2px solid var(--border-color)', padding: '80px 6vw 40px 6vw', position: 'relative', zIndex: 10 }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: 'var(--accent-blue)',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#000000'
              }}>
                E
              </div>
              <span className="font-header" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '2px', color: '#ffffff' }}>
                ELEGANCE <span style={{ color: 'var(--accent-blue)' }}>CLUB</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '340px' }}>
              {COMPANY_DATA.subTagline} Built on uncompromised quality and brutal training discipline since {COMPANY_DATA.established}.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#share" style={{ padding: '12px 16px', background: '#111111', color: '#ffffff', border: '1px solid var(--border-color)', fontSize: '1.2rem', transition: 'all 0.2s ease', textDecoration: 'none' }}>
                ↗
              </a>
              <a href="#web" style={{ padding: '12px 16px', background: '#111111', color: '#ffffff', border: '1px solid var(--border-color)', fontSize: '1.2rem', transition: 'all 0.2s ease', textDecoration: 'none' }}>
                🌐
              </a>
              <a href="#video" style={{ padding: '12px 16px', background: '#111111', color: '#ffffff', border: '1px solid var(--border-color)', fontSize: '1.2rem', transition: 'all 0.2s ease', textDecoration: 'none' }}>
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', marginBottom: '24px', letterSpacing: '1.5px', fontWeight: 800 }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['home', 'about', 'offerings', 'vision', 'bmi', 'contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => {
                      setActiveTab(tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-header"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#cccccc',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 700
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cccccc')}
                  >
                    {tab === 'offerings' ? 'Programs & Expansion' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expansion Branches */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', marginBottom: '24px', letterSpacing: '1.5px', fontWeight: 800 }}>
              OUR FACILITIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#cccccc', fontSize: '0.95rem', fontWeight: 600 }}>
              <li>■ Premium Men's Gym</li>
              <li>■ Functional Combat & Turf</li>
              <li>■ Olympic Weightlifting Rigs</li>
              <li>■ Sauna & Recovery Suite</li>
            </ul>
          </div>

          {/* Asset & Media Folder Link */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', marginBottom: '24px', letterSpacing: '1.5px', fontWeight: 800 }}>
              MEDIA & ASSETS
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
              All brand imagery, logos, and promotional assets for Elegance Fitness Club are securely archived in our Drive repository.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1J5TaMHaadIAmYKZ7SwVmY5Npy6OQfvrQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                padding: '12px 24px',
                fontSize: '0.85rem'
              }}
            >
              <span>ACCESS DRIVE ASSETS ↗</span>
            </a>
          </div>

        </div>

        {/* Massive Marquee / Brutalist Text */}
        <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '24px 0', margin: '40px 0', textAlign: 'center', overflow: 'hidden' }}>
          <span className="font-header" style={{ fontSize: 'clamp(2rem, 8vw, 7rem)', fontWeight: 900, color: '#141414', letterSpacing: '4px', textTransform: 'uppercase', userSelect: 'none' }}>
            ANYTHING GOES • ANYTHING GOES • ANYTHING GOES
          </span>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '1px'
        }}>
          <span>© 2026 ELEGANCE FITNESS CLUB. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>PRIVACY POLICY</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>TERMS OF SERVICE</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>MEMBER AGREEMENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
