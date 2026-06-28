import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'offerings', label: 'PROGRAMS & EXPANSION' },
    { id: 'vision', label: 'VISION & MISSION' },
    { id: 'bmi', label: 'BMI & TRAINING CALC' },
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
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(8, 8, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 148, 217, 0.3)' : '1px solid transparent',
        padding: scrolled ? '16px 0' : '24px 0',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            cursor: 'pointer' 
          }}
        >
          <div style={{
            background: 'var(--accent-blue)',
            padding: '10px',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px var(--accent-blue-glow)'
          }}>
            <Dumbbell size={28} color="#08080a" strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-header" style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '2px', display: 'block', lineHeight: 1 }}>
              ELEGANCE <span style={{ color: 'var(--accent-blue)' }}>FITNESS</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>
              EST. 2019 • CLUB
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="font-header"
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === item.id ? 'var(--accent-blue)' : 'var(--text-main)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
              {activeTab === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent-blue)',
                  boxShadow: '0 0 10px var(--accent-blue)'
                }} />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-actions">
          <a
            href="https://drive.google.com/drive/folders/1J5TaMHaadIAmYKZ7SwVmY5Npy6OQfvrQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px'
            }}
            title="View Google Drive Assets Folder"
          >
            <span>Drive Assets</span>
            <ExternalLink size={14} color="var(--accent-blue)" />
          </a>

          <button 
            onClick={() => setActiveTab('contact')}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
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
            padding: '8px'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          borderBottom: '2px solid var(--accent-blue)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
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
                color: activeTab === item.id ? 'var(--accent-blue)' : 'var(--text-main)',
                fontSize: '1.3rem',
                fontWeight: 700,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <a
              href="https://drive.google.com/drive/folders/1J5TaMHaadIAmYKZ7SwVmY5Npy6OQfvrQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ justifyContent: 'center', textAlign: 'center', textDecoration: 'none' }}
            >
              VIEW DRIVE ASSETS <ExternalLink size={16} />
            </a>
            <button 
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="btn-primary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
