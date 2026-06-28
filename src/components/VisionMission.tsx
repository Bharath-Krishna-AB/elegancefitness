import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';
import { Eye, Target, Sparkles, Zap, Flame, Compass, Heart, Users, Dumbbell } from 'lucide-react';

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const getIcon = (index: number) => {
    const icons = [<Sparkles size={28} />, <Users size={28} />, <Zap size={28} />, <Flame size={28} />, <Heart size={28} />];
    return icons[index % icons.length];
  };

  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        
        {/* Header Toggle */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">CORE PRINCIPLES • PHILOSOPHY</span>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '32px' }}>
            OUR <span style={{ color: 'var(--accent-blue)' }}>VISION & MISSION</span>
          </h2>

          {/* Switcher Buttons */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-tertiary)',
            padding: '6px',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <button
              onClick={() => setActiveTab('vision')}
              className="font-header"
              style={{
                padding: '12px 36px',
                fontSize: '1.2rem',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'vision' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'vision' ? '#fff' : 'var(--text-muted)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Eye size={20} /> VISION STATEMENT
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className="font-header"
              style={{
                padding: '12px 36px',
                fontSize: '1.2rem',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'mission' ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === 'mission' ? '#fff' : 'var(--text-muted)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Target size={20} /> MISSION STATEMENT
            </button>
          </div>
        </div>

        {/* Tab Intro Text */}
        <div style={{ maxWidth: '900px', margin: '0 auto 60px auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: '#e0e0f0', lineHeight: 1.8 }}>
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
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
                  gap: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderLeft: `4px solid ${index % 2 === 0 ? 'var(--accent-blue)' : '#fff'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    color: 'var(--accent-blue)',
                    background: 'rgba(0,148,217,0.1)',
                    padding: '14px',
                    borderRadius: '4px'
                  }}>
                    {getIcon(index)}
                  </div>
                  <span className="font-header" style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.08)', fontWeight: 900 }}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#fff', letterSpacing: '1px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
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
