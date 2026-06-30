import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA, PlanItem } from '../data/content';

interface PricingSectionProps {
  setActiveTab: (tab: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ setActiveTab }) => {
  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid rgba(11, 15, 25, 0.1)'
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '64px',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div>
          <div className="section-index" style={{ marginBottom: '16px' }}>
            <span>[03] // MEMBERSHIP TIERS & INTAKE</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            PRECISION <span style={{ color: '#0066FF' }}>PROTOCOLS.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Transparent tier structure engineered for serious athletic development. Full access to specialized strength zones and sauna recovery suites.
        </div>
      </div>

      {/* Tabular Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {COMPANY_DATA.plans.map((plan: PlanItem, index: number) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              padding: '40px',
              backgroundColor: plan.popular ? '#0B0F19' : '#FAFAFC',
              color: plan.popular ? '#FFFFFF' : '#0B0F19',
              border: plan.popular ? '1px solid #0B0F19' : '1px solid rgba(11, 15, 25, 0.1)',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Specification Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '16px',
                borderBottom: plan.popular ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(11, 15, 25, 0.1)',
                marginBottom: '24px'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  [TIER 0{index + 1}] // {plan.duration}
                </span>
                {plan.popular && (
                  <span style={{
                    backgroundColor: '#0066FF',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em'
                  }}>
                    RECOMMENDED
                  </span>
                )}
              </div>

              {/* Pricing Display */}
              <div style={{ marginBottom: '32px' }}>
                <span className="font-header" style={{
                  fontSize: '3.5rem',
                  color: plan.popular ? '#0066FF' : '#0B0F19',
                  lineHeight: 1
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '1.1rem',
                  color: plan.popular ? '#CBD5E1' : '#64748B',
                  marginLeft: '8px',
                  fontWeight: 600
                }}>
                  {plan.currency}
                </span>
              </div>

              {/* Protocol Checklist */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                marginBottom: '40px'
              }}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.9rem',
                    color: plan.popular ? '#F8F9FA' : '#334155'
                  }}>
                    <span style={{ color: '#0066FF', fontWeight: 700 }}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Initiate Button */}
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: plan.popular ? '#0066FF' : '#0B0F19',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>INITIATE PROTOCOL</span>
              <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Tabular Inclusion Footer */}
      <div style={{
        marginTop: '64px',
        padding: '32px 4vw',
        backgroundColor: '#FAFAFC',
        border: '1px solid rgba(11, 15, 25, 0.1)',
        borderRadius: '4px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066FF', display: 'block', marginBottom: '4px' }}>INCLUSION 01</span>
          <strong style={{ fontSize: '0.95rem', color: '#0B0F19' }}>Muscle Zone Access</strong>
        </div>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066FF', display: 'block', marginBottom: '4px' }}>INCLUSION 02</span>
          <strong style={{ fontSize: '0.95rem', color: '#0B0F19' }}>Aerobics Conditioning</strong>
        </div>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066FF', display: 'block', marginBottom: '4px' }}>INCLUSION 03</span>
          <strong style={{ fontSize: '0.95rem', color: '#0B0F19' }}>Sauna Recovery Suite</strong>
        </div>
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0066FF', display: 'block', marginBottom: '4px' }}>INCLUSION 04</span>
          <strong style={{ fontSize: '0.95rem', color: '#0B0F19' }}>Certified Coaching Support</strong>
        </div>
      </div>
    </section>
  );
};
