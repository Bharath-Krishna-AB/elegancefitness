import React from 'react';
import { COMPANY_DATA } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer style={{ backgroundColor: '#050507', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '80px 10vw 40px 10vw', position: 'relative', zIndex: 10 }}>
      <div style={{ width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: 'var(--accent-blue)',
                padding: '8px 12px',
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 900,
                color: '#08080a'
              }}>
                E
              </div>
              <span className="font-header" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>
                ELEGANCE <span style={{ color: 'var(--accent-blue)' }}>FITNESS</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '340px' }}>
              {COMPANY_DATA.subTagline} Built on uncompromised quality and holistic dominance since {COMPANY_DATA.established}.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#share" style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '4px', fontSize: '1.2rem' }}>
                📤
              </a>
              <a href="#web" style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '4px', fontSize: '1.2rem' }}>
                🌐
              </a>
              <a href="#video" style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '4px', fontSize: '1.2rem' }}>
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {tab === 'offerings' ? 'Programs & Expansion' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expansion Branches */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              OUR FACILITIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <li>● Premium Men's Gym</li>
              <li>● Functional Combat & Turf</li>
              <li>● Red Light Therapy Zone</li>
              <li>● Recovery & Wellness</li>
            </ul>
          </div>

          {/* Asset & Media Folder Link */}
          <div>
            <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              MEDIA & ASSETS
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
              All brand imagery, logos, and promotional assets for Elegance Fitness Club are securely archived in our Drive repository.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1J5TaMHaadIAmYKZ7SwVmY5Npy6OQfvrQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                background: 'rgba(0, 148, 217, 0.15)',
                border: '1px solid var(--accent-blue)',
                color: 'var(--accent-blue)',
                textDecoration: 'none',
                fontFamily: 'var(--font-header)',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                borderRadius: '4px'
              }}
            >
              ACCESS DRIVE ASSETS
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.85rem'
        }}>
          <span>© 2026 ELEGANCE FITNESS CLUB. ALL RIGHTS RESERVED. ESTABLISHED 2019.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Member Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
