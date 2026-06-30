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
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Philosophy' },
    { id: 'offerings', label: 'Floor Zones' },
    { id: 'trainers', label: 'Roster' },
    { id: 'pricing', label: 'Protocols' },
    { id: 'contact', label: 'Initiate' },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top Specification Status Bar */}
      <div style={{
        backgroundColor: '#0B0F19',
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
          <span style={{ color: '#0066FF' }}>● FACILITY STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* Main Structural Header */}
      <header
        style={{
          width: '100%',
          backgroundColor: scrolled ? '#000000' : 'transparent',
          background: scrolled ? 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' : 'transparent',
          borderBottom: 'none',
          padding: scrolled ? '16px 4vw' : '24px 4vw',
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
          <span className="font-header" style={{ fontSize: '1.4rem', color: '#0B0F19', letterSpacing: '-0.04em' }}>
            ELEGANCE<span style={{ color: 'var(--accent-blue)', fontWeight: 800 }}>/CLUB</span>
          </span>
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
                  background: isActive ? '#0B0F19' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? '#0B0F19' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#64748B',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#0B0F19';
                    e.currentTarget.style.borderColor = 'rgba(11, 15, 25, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#64748B';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '0.65rem', opacity: 0.6, marginRight: '6px' }}>0{index + 1}</span>
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
              backgroundColor: '#0066FF',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 24px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0044CC')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
          >
            <span>JOIN ROSTER</span>
            <span>↗</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: '#0B0F19',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '4px',
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
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(11, 15, 25, 0.1)',
          padding: '24px 4vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
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
                background: activeTab === item.id ? '#0B0F19' : '#F8F9FA',
                border: '1px solid rgba(11, 15, 25, 0.1)',
                textAlign: 'left',
                color: activeTab === item.id ? '#FFFFFF' : '#0B0F19',
                fontSize: '0.95rem',
                fontWeight: 700,
                padding: '14px 18px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>[0{index + 1}]</span>
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('contact');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              backgroundColor: '#0066FF',
              color: '#FFFFFF',
              border: 'none',
              padding: '16px',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '4px',
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
