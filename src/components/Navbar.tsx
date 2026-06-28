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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'offerings', label: 'PROGRAMS' },
    { id: 'classes', label: 'CLASSES' },
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
        backgroundColor: scrolled ? 'rgba(8, 8, 10, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        padding: '20px 10vw',
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
        {/* Brand Logo - Minimal */}
        <button
          onClick={() => setActiveTab('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <span className="font-header" style={{
            fontSize: '1.3rem',
            fontWeight: 900,
            letterSpacing: '3px',
            color: '#fff'
          }}>
            ELEGANCE<br />
            <span style={{ fontSize: '0.7em', letterSpacing: '2px', fontWeight: 700 }}>FITNESS</span>
          </span>
        </button>

        {/* Desktop Nav - Center aligned */}
        <nav style={{ display: 'flex', gap: '48px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="font-header"
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === item.id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                padding: 0,
                textDecoration: activeTab === item.id ? 'underline' : 'none',
                textDecorationThickness: '2px',
                textUnderlineOffset: '6px'
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
              padding: '12px 28px',
              fontSize: '0.9rem',
              letterSpacing: '1px'
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
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'none',
            padding: '8px',
            fontSize: '1.8rem',
            fontWeight: 'bold'
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
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          padding: '24px 10vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
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
                color: activeTab === item.id ? '#fff' : 'rgba(255,255,255,0.6)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '1px',
                padding: '12px 0',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
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
