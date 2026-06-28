import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'offerings', label: 'PROGRAMS' },
    { id: 'trainers', label: 'TRAINERS' },
    { id: 'pricing', label: 'PRICING' },
    { id: 'hours', label: 'HOURS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? '#000000' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: scrolled ? '16px 6vw' : '24px 6vw',
      }}
    >
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left'
          }}
        >
          <span className="font-header" style={{
            fontSize: '1.4rem',
            fontWeight: 900,
            letterSpacing: '2px',
            color: '#ffffff',
            lineHeight: 1
          }}>
            ELEGANCE<span style={{ color: 'var(--accent-blue)' }}>.</span><br />
            <span style={{ fontSize: '0.65em', letterSpacing: '4px', fontWeight: 700, color: 'var(--text-muted)' }}>FITNESS</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="font-header"
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === item.id ? 'var(--accent-blue)' : '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: '6px 0',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-actions">
          <button
            onClick={() => setActiveTab('contact')}
            className="btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '0.85rem',
            }}
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: '1px solid var(--border-color)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none',
            padding: '10px 14px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            borderRadius: '0px'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          background: '#000000',
          borderBottom: '2px solid var(--accent-blue)',
          padding: '32px 6vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.9)',
          zIndex: 999
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className="font-header"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: activeTab === item.id ? 'var(--accent-blue)' : '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '2px',
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('contact');
              setMobileMenuOpen(false);
            }}
            className="btn-primary"
            style={{ justifyContent: 'center', width: '100%', marginTop: '16px' }}
          >
            JOIN NOW
          </button>
        </div>
      )}
    </header>
  );
};

