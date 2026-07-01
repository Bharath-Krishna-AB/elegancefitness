import React from 'react';
import { COMPANY_DATA } from '../data/content';
import { MdArrowUpward } from 'react-icons/md';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden',
      paddingTop: '48px',
      paddingBottom: '24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4vw' }}>
        
        {/* Top Row: Compact Headline + Back to Top */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          paddingBottom: '28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <h2 className="font-header" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: 0
            }}>
              <span style={{ color: '#FFFFFF' }}>ATHLETIC </span>
              <span style={{ color: '#0094D9' }}>PERFORMANCE LEGACY</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '0px',
              backgroundColor: '#000000',
              border: '2px solid #FFFFFF',
              color: '#FFFFFF',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0,
              padding: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0094D9';
              e.currentTarget.style.borderColor = '#0094D9';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <MdArrowUpward size={20} />
          </button>
        </div>

        {/* Middle Row: Menu and Follow */}
        <div style={{
          paddingTop: '32px',
          paddingBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '32px'
        }}>
          {/* Col 1: MENU */}
          <div style={{ textAlign: 'left' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
              fontFamily: 'var(--font-mono)'
            }}>
              MENU
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: 'HOME' },
                { id: 'vision', label: 'MISSION' },
                { id: 'trainers', label: 'TRAINERS' },
                { id: 'pricing', label: 'PRICING' },
                { id: 'contact', label: 'CONTACT' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-header)',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0094D9')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: FOLLOW */}
          <div style={{ textAlign: 'right' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
              fontFamily: 'var(--font-mono)'
            }}>
              FOLLOW
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {COMPANY_DATA.socialMedia.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-header)',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0094D9')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Viewport-Contained Watermark Logo */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4vw', width: '100%' }}>
        <div style={{
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 0.75,
          paddingBottom: '20px',
          overflow: 'hidden'
        }}>
          <span style={{
            fontSize: 'clamp(3.2rem, 12vw, 12rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            letterSpacing: '-0.05em',
            display: 'block',
            whiteSpace: 'nowrap',
            fontFamily: 'Good Times'
          }}>
            ELEGANCE
          </span>
        </div>
      </div>

      {/* Compact Sleek Pill Bottom Bar */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4vw' }}>
        <div style={{
          backgroundColor: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '9999px',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.7rem',
          color: '#FFFFFF',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>© 2026 {COMPANY_DATA.name}</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, padding: 0 }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>TERMS</button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
            <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, padding: 0 }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>PRIVACY</button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
            <button onClick={() => setActiveTab('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, padding: 0 }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>CONTACT</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
