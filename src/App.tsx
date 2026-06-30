import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsSection } from './components/HighlightsSection';
import { VisionMission } from './components/VisionMission';
import { OfferingsSection } from './components/OfferingsSection';
import { TrainersSection } from './components/TrainersSection';
import { PricingSection } from './components/PricingSection';
import { BmiCalculator } from './components/BmiCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './index.css';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    if (activeTab && activeTab !== 'home') {
      const el = document.getElementById(activeTab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activeTab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ flexGrow: 1 }}>
        <div id="home">
          <Hero setActiveTab={setActiveTab} />
        </div>

        {/* Marquee Boundary */}
        <div style={{
          background: 'var(--accent-blue)',
          color: '#000000',
          borderTop: '3px solid #000000',
          transform: 'skewY(-2deg)',
          transformOrigin: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 100,
          overflow: 'hidden'
        }}>
          <div className="marquee-container" style={{ height: 'auto', padding: '20px 0' }}>
            <div className="marquee-content font-header" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '3px', color: '#000000' }}>
              {Array(6).fill("• ELEGANCE FITNESS CLUB • TRANSFORM YOUR BODY • STATE-OF-THE-ART EQUIPMENT • CERTIFIED TRAINERS • ").map((text, i) => (
                <span key={i} style={{ paddingRight: '24px' }}>{text}</span>
              ))}
            </div>
          </div>
        </div>

        <HighlightsSection />

        <div id="offerings">
          <OfferingsSection setActiveTab={setActiveTab} />
        </div>

        <div id="trainers">
          <TrainersSection />
        </div>

        <div id="pricing">
          <PricingSection setActiveTab={setActiveTab} />
        </div>

        <div id="vision">
          <VisionMission />
        </div>

        <div id="bmi">
          <BmiCalculator setActiveTab={setActiveTab} />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
