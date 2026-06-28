import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#111111', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>ABOUT</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>THE COMPANY</span>
          </h2>
          <div style={{ width: '100px', height: '6px', background: 'var(--accent-blue)', margin: '24px auto 0' }} />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Text description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 className="font-header" style={{ fontSize: '2rem', color: '#ffffff', lineHeight: 1.1, fontWeight: 800 }}>
              YOUR PREMIER DESTINATION FOR HEALTH, WELLNESS & DOMINANCE
            </h3>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {COMPANY_DATA.about}
            </p>

            <p style={{ fontSize: '1.1rem', color: '#ffffff', lineHeight: 1.7, borderLeft: '4px solid var(--accent-blue)', paddingLeft: '20px', background: '#181818', padding: '20px' }}>
              {COMPANY_DATA.philosophy}
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {COMPANY_DATA.facilitiesDesc}
            </p>

            {/* Feature Checkpoints */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
              {[
                "Certified Professional Trainers",
                "State-of-the-Art Equipment",
                "Muscle Zone & Aerobics",
                "Professional Nutrition Guidance",
                "Premium Sauna Facilities",
                "Personal Training Support"
              ].map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#080808', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#000000', background: 'var(--accent-blue)', fontWeight: 900, fontSize: '0.9rem', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
                  <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Showcase Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', position: 'relative' }}
          >
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="font-header" style={{ fontSize: '1rem', color: 'var(--accent-blue)', fontWeight: 800 }}>01</span>
              <h4 className="font-header" style={{ fontSize: '1.5rem', color: '#ffffff' }}>EXCELLENCE SINCE 2019</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Years of uncompromising quality and transformational member stories.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="font-header" style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 800 }}>02</span>
              <h4 className="font-header" style={{ fontSize: '1.5rem', color: '#ffffff' }}>INCLUSIVE COMMUNITY</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>From seasoned competitive athletes to total beginners, all belong here.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="font-header" style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 800 }}>03</span>
              <h4 className="font-header" style={{ fontSize: '1.5rem', color: '#ffffff' }}>HOLISTIC HEALTH</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Balancing physical strength with mental clarity and emotional resilience.</p>
            </div>

            <div style={{
              background: 'var(--accent-blue)',
              color: '#000000',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '2px solid var(--accent-blue)',
              boxShadow: '6px 6px 0px rgba(255,255,255,0.2)'
            }}>
              <span className="font-header" style={{ fontSize: '3.8rem', fontWeight: 900, lineHeight: 1, color: '#000000' }}>100%</span>
              <span className="font-header" style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '2px', marginTop: '12px', color: '#000000' }}>COMMITMENT TO YOUR GOALS</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
