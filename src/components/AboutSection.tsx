import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '../data/content';
import { CheckCircle2, Award, HeartPulse, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">COMPANY PROFILE • SINCE {COMPANY_DATA.established}</span>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800 }}>
            ABOUT <span style={{ color: 'var(--accent-blue)' }}>THE COMPANY</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-blue)', margin: '20px auto' }} />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Text description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 className="font-header" style={{ fontSize: '2.2rem', color: '#fff', lineHeight: 1.2 }}>
              YOUR PREMIER DESTINATION FOR HEALTH, WELLNESS & DOMINANCE
            </h3>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {COMPANY_DATA.about}
            </p>

            <p style={{ fontSize: '1.15rem', color: '#e0e0f0', lineHeight: 1.8, borderLeft: '4px solid var(--accent-blue)', paddingLeft: '20px', background: 'rgba(0,148,217,0.05)', padding: '16px 20px' }}>
              {COMPANY_DATA.philosophy}
            </p>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {COMPANY_DATA.facilitiesDesc}
            </p>

            {/* Feature Checkpoints */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
              {[
                "Certified Elite Trainers",
                "State-of-the-Art Facilities",
                "Zumba & Yoga Classes",
                "Nutrition & Rehab Coaching",
                "Dedicated Relaxation Zones",
                "Mental & Emotional Health"
              ].map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--accent-blue)" />
                  <span style={{ fontWeight: 600, color: '#fff' }}>{point}</span>
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
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', position: 'relative' }}
          >
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '4px solid var(--accent-blue)' }}>
              <Award size={40} color="var(--accent-blue)" />
              <h4 className="font-header" style={{ fontSize: '1.6rem' }}>EXCELLENCE SINCE 2019</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Years of uncompromising quality and transformational member stories.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', transform: 'translateY(30px)', borderTop: '4px solid #fff' }}>
              <Users size={40} color="var(--accent-blue)" />
              <h4 className="font-header" style={{ fontSize: '1.6rem' }}>INCLUSIVE COMMUNITY</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>From seasoned competitive athletes to total beginners, all belong here.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '4px solid #fff' }}>
              <HeartPulse size={40} color="var(--accent-blue)" />
              <h4 className="font-header" style={{ fontSize: '1.6rem' }}>HOLISTIC HEALTH</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Balancing physical strength with mental clarity and emotional resilience.</p>
            </div>

            <div style={{
              background: 'var(--accent-blue)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              transform: 'translateY(30px)'
            }}>
              <span className="font-header" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>100%</span>
              <span className="font-header" style={{ fontSize: '1.2rem', letterSpacing: '2px', marginTop: '8px' }}>COMMITMENT TO YOUR GOALS</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
