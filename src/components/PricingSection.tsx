import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, PlanItem } from '../data/content';

interface PricingSectionProps {
  setActiveTab: (tab: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ setActiveTab }) => {
  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#080808', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            marginBottom: '16px',
            marginTop: '16px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#ffffff' }}>AFFORDABLE</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>PRICING PLANS</span>
          </h2>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Choose the membership plan that fits your fitness goals. Save more with longer commitments.
          </p>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {COMPANY_DATA.plans.map((plan: PlanItem, index: number) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel"
              style={{
                padding: '48px 40px',
                background: plan.popular ? 'linear-gradient(135deg, var(--accent-blue), #0072a8)' : '#111111',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: plan.popular ? '2px solid var(--accent-blue)' : '2px solid rgba(255,255,255,0.1)',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (plan.popular) return;
                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                if (plan.popular) return;
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-blue)',
                  color: '#000000',
                  padding: '6px 16px',
                  fontFamily: 'var(--font-header)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  BEST VALUE
                </div>
              )}

              {/* Duration */}
              <h3 className="font-header" style={{
                fontSize: '2rem',
                color: plan.popular ? '#000000' : '#ffffff',
                marginBottom: '16px',
                fontWeight: 800
              }}>
                {plan.duration}
              </h3>

              {/* Price */}
              <div style={{ marginBottom: '32px' }}>
                <span className="font-header" style={{
                  fontSize: '3.5rem',
                  color: plan.popular ? '#000000' : 'var(--accent-blue)',
                  fontWeight: 900,
                  lineHeight: 1
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '1.2rem',
                  color: plan.popular ? 'rgba(0,0,0,0.8)' : 'var(--text-muted)',
                  marginLeft: '8px',
                  fontWeight: 600
                }}>
                  {plan.currency}
                </span>
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '40px',
                flexGrow: 1
              }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.95rem',
                    color: plan.popular ? 'rgba(0,0,0,0.85)' : 'var(--text-muted)'
                  }}>
                    <span style={{
                      color: plan.popular ? '#000000' : 'var(--accent-blue)',
                      fontWeight: 900,
                      fontSize: '1.2rem'
                    }}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => setActiveTab('contact')}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: plan.popular ? '#000000' : 'var(--accent-blue)',
                  color: plan.popular ? 'var(--accent-blue)' : '#000000',
                  fontFamily: 'var(--font-header)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  border: '2px solid ' + (plan.popular ? '#000000' : 'var(--accent-blue)'),
                  cursor: 'pointer',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = 'var(--accent-blue)';
                    e.currentTarget.style.color = '#000000';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-blue)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.color = 'var(--accent-blue)';
                  } else {
                    e.currentTarget.style.background = 'var(--accent-blue)';
                    e.currentTarget.style.color = '#000000';
                  }
                }}
              >
                JOIN NOW →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
