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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'vision', label: 'Mission' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top Specification Status Bar */}
      <div style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '6px 4vw',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }} className="top-status-bar">
        <span>[EFC ARCHITECTURE // ATHLETIC PERFORMANCE STUDIO]</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>LOCATIONS: LONDON / TOKYO / NYC</span>
          <span style={{ color: '#0094D9' }}>● FACILITY STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* Main Structural Header */}
      <header
        style={{
          width: '100%',
          backgroundColor: scrolled ? '#000000' : 'transparent',
          background: scrolled ? 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' : 'transparent',
          borderBottom: 'none',
          padding: scrolled ? '28px 4vw' : '36px 4vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <img src="/elegance nav logo.svg" alt="Elegance Fitness Club" style={{ height: '36px', width: 'auto' }} />
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isActive ? '#0094D9' : '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '8px 16px',
                  borderRadius: '0px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Menda'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#0094D9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-actions">
          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              backgroundColor: '#0094D9',
              color: '#000000',
              border: 'none',
              padding: '10px 24px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '0px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Menda'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span>JOIN ROSTER</span>
            <span>↗</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: '#000000',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '0px',
            fontSize: '1rem',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 1024px) {
            .desktop-nav, .desktop-actions, .top-status-bar { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#000000',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px 4vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: activeTab === item.id ? '#0094D9' : 'transparent',
                border: '1px solid',
                borderColor: activeTab === item.id ? '#0094D9' : 'rgba(255, 255, 255, 0.1)',
                textAlign: 'left',
                color: activeTab === item.id ? '#000000' : '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '14px 18px',
                borderRadius: '0px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'Menda'
              }}
            >
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('contact');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              backgroundColor: '#0094D9',
              color: '#000000',
              border: 'none',
              padding: '16px',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '0px',
              fontFamily: 'Menda',
              marginTop: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>INITIATE APPLICATION</span>
            <span>↗</span>
          </button>
        </div>
      )}
    </div>
  );
};
