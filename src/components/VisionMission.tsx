import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#080808', position: 'relative', borderTop: '1px solid var(--border-color)' }}>

      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header Toggle */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge">CORE PRINCIPLES</span>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '32px',
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>OUR</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>VISION & MISSION</span>
          </h2>

          {/* Switcher Buttons */}
          <div style={{
            display: 'inline-flex',
            background: '#141414',
            padding: '4px',
            border: '2px solid rgba(255,255,255,0.15)'
          }}>
            <button
              onClick={() => setActiveTab('vision')}
              className="font-header"
              style={{
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'vision' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'vision' ? '#000000' : '#ffffff',
                transition: 'all 0.25s ease',
                letterSpacing: '1.5px',
                borderRadius: '0px'
              }}
            >
              VISION STATEMENT
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className="font-header"
              style={{
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'mission' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'mission' ? '#000000' : '#ffffff',
                transition: 'all 0.25s ease',
                letterSpacing: '1.5px',
                borderRadius: '0px'
              }}
            >
              MISSION STATEMENT
            </button>
          </div>
        </div>

        {/* Tab Intro Text */}
        <div style={{ maxWidth: '900px', margin: '0 auto 64px auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', lineHeight: 1.7 }}>
            {activeTab === 'vision' 
              ? "At Elegance Fitness Club, our vision is to foster a vibrant and inclusive community where individuals are empowered to pursue their fitness and wellness goals. We envision a space that inspires transformation—physically, mentally, and emotionally."
              : "Our mission is to provide a holistic fitness experience that empowers individuals to achieve their health and wellness goals in a supportive and motivating environment. We make a lasting positive impact on the lives of our members."
            }
          </p>
        </div>

        {/* Animated Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {(activeTab === 'vision' ? COMPANY_DATA.vision : COMPANY_DATA.mission).map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#111111',
                  borderTop: `4px solid ${index % 2 === 0 ? 'var(--accent-blue)' : '#ffffff'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-header" style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', fontWeight: 800 }}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-header" style={{ fontSize: '1.6rem', color: '#ffffff', letterSpacing: '1px', fontWeight: 800 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
