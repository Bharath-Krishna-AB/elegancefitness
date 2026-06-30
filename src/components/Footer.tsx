import React from 'react';

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
      paddingTop: '80px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4vw' }}>
        
        {/* Top Row: Headline + Back to Top */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <h2 className="font-header" style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              margin: 0
            }}>
              <span style={{ color: '#FFFFFF', display: 'block' }}>ATHLETIC</span>
              <span style={{ color: '#0094D9', display: 'block' }}>PERFORMANCE LEGACY</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0094D9';
              e.currentTarget.style.borderColor = '#0094D9';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#141414';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            ↑
          </button>
        </div>

        {/* Middle Row: Minimalist 4-Column Menu Grid */}
        <div style={{
          paddingTop: '64px',
          paddingBottom: '80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '48px'
        }}>
          {/* Col 1: MENU */}
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)'
            }}>
              MENU
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { id: 'home', label: 'OVERVIEW' },
                { id: 'vision', label: 'PHILOSOPHY' },
                { id: 'contact', label: 'INITIATE' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
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

          {/* Col 2: PROGRAMS */}
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)'
            }}>
              PROGRAMS
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { id: 'offerings', label: 'FLOOR ZONES' },
                { id: 'trainers', label: 'ELITE ROSTER' },
                { id: 'pricing', label: 'PROTOCOLS' },
                { id: 'bmi', label: 'BIOMETRICS' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
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

          {/* Col 3: STUDIOS */}
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)'
            }}>
              STUDIOS
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['LONDON MAYFAIR', 'TOKYO SHIBUYA', 'NEW YORK TRIBECA', 'GLOBAL ROSTER'].map((studio) => (
                <li key={studio} style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-header)' }}>
                  {studio}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: FOLLOW */}
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#0094D9',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)'
            }}>
              FOLLOW
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: 'INSTAGRAM', url: 'https://instagram.com' },
                { name: 'LINKEDIN', url: 'https://linkedin.com' },
                { name: 'X (TWITTER)', url: 'https://twitter.com' },
                { name: 'YOUTUBE', url: 'https://youtube.com' },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
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

      {/* Giant Center Watermark Logo (Pikkcom style) */}
      <div style={{
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 0.75,
        paddingBottom: '30px',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        <span className="font-header" style={{
          fontSize: 'clamp(4.5rem, 17.5vw, 19rem)',
          fontWeight: 900,
          color: '#1a1a1a',
          letterSpacing: '-0.04em',
          display: 'block',
          whiteSpace: 'nowrap'
        }}>
          ELEGANCE
        </span>
      </div>

      {/* Sleek Pill Bottom Bar */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4vw 40px' }}>
        <div style={{
          backgroundColor: '#121212',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>2026 ELEGANCE CLUB</span>
            <span style={{ margin: '0 12px', color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span>ARCHITECTURAL ATHLETICS</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>LEGAL</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>PRIVACY</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>PROTOCOLS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
