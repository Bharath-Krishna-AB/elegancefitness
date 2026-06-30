import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BmiProps {
  setActiveTab: (tab: string) => void;
}

export const BmiCalculator: React.FC<BmiProps> = ({ setActiveTab }) => {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'holistic'>('muscle');

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const bmiNum = parseFloat(bmi);

  let status = "OPTIMAL RATIO";
  let statusColor = "#0066FF";
  if (bmiNum < 18.5) {
    status = "MASS ACCRETION REQUIRED";
    statusColor = "#D97706";
  } else if (bmiNum >= 25 && bmiNum < 30) {
    status = "LIPID REDUCTION PROTOCOL";
    statusColor = "#EA580C";
  } else if (bmiNum >= 30) {
    status = "INTENSIVE RECOMPOSITION";
    statusColor = "#DC2626";
  }

  const getRecommendation = () => {
    if (goal === 'muscle') {
      return {
        program: "PROTOCOL 01 // HYPERTROPHY & FORCE",
        advice: "Focus on heavy compound Olympic lifting progressions (squats, deadlifts, clean & jerk) in Floor Zone A. Dedicated high-protein nutritional prescription included.",
        spec: "TARGET: +4.5KG LEAN TISSUE / 12 WEEKS"
      };
    } else if (goal === 'fatloss') {
      return {
        program: "PROTOCOL 02 // METABOLIC SHRED",
        advice: "High-intensity anaerobic turf work combined with competition-grade ergometers. Rapid mitochondrial adaptation and sustained lipid oxidation.",
        spec: "TARGET: -6.0% BODY FAT / 10 WEEKS"
      };
    } else {
      return {
        program: "PROTOCOL 03 // LONGEVITY & REHAB",
        advice: "Balancing structural joint stabilization, deep fascial mobility, and contrast thermal sauna recovery for lifetime physical durability.",
        spec: "TARGET: FULL JOINT RANGE & RECOVERY"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section style={{
      padding: '120px 4vw',
      backgroundColor: '#FAFAFC',
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
            <span>[08] // BIOMETRIC EVALUATION CONSOLE</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            AI PERFORMANCE <span style={{ color: '#0066FF' }}>MATCH.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Input physiological metrics to run algorithmic protocol matching. Instant assignment to specialized floor zones and coaching personnel.
        </div>
      </div>

      {/* Console Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px'
      }}>
        {/* Controls Column (Spans 6 cols on desktop) */}
        <div style={{
          gridColumn: 'span 12',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(11, 15, 25, 0.1)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }} className="console-left">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', letterSpacing: '0.1em' }}>
            INPUT PARAMETERS // PHYSIOLOGY
          </div>

          {/* Weight Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B0F19' }}>BODY MASS (KG)</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-header)' }}>{weight} KG</span>
            </div>
            <input 
              type="range" 
              min="40" 
              max="160" 
              value={weight} 
              onChange={(e) => setWeight(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#0066FF',
                height: '4px',
                background: '#E2E8F0',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Height Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B0F19' }}>STATURE (CM)</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-header)' }}>{height} CM</span>
            </div>
            <input 
              type="range" 
              min="140" 
              max="220" 
              value={height} 
              onChange={(e) => setHeight(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#0066FF',
                height: '4px',
                background: '#E2E8F0',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Goal Assignment */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B0F19', display: 'block', marginBottom: '12px' }}>
              PRIMARY TRAINING ADAPTATION
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {[
                { id: 'muscle', label: 'HYPERTROPHY' },
                { id: 'fatloss', label: 'CONDITIONING' },
                { id: 'holistic', label: 'RECOVERY' },
              ].map((g) => {
                const isActive = goal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    style={{
                      padding: '12px 8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: isActive ? '#0B0F19' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#0B0F19',
                      border: '1px solid',
                      borderColor: isActive ? '#0B0F19' : 'rgba(11, 15, 25, 0.2)',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Output Diagnostics Column (Spans 6 cols on desktop) */}
        <motion.div 
          key={`${bmi}-${goal}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            gridColumn: 'span 12',
            padding: '40px',
            backgroundColor: '#0B0F19',
            color: '#FFFFFF',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="console-right"
        >
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>AI DIAGNOSTIC RESULT</span>
              <span style={{ fontSize: '0.75rem', color: statusColor, fontWeight: 700 }}>● {status}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span className="font-header" style={{ fontSize: '4.5rem', lineHeight: 1, color: '#0066FF' }}>
                {bmi}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#CBD5E1', fontWeight: 600 }}>
                CALCULATED BMI INDEX
              </span>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '24px'
            }}>
              <div style={{ fontSize: '0.7rem', color: '#0066FF', fontWeight: 700, marginBottom: '8px' }}>
                RECOMMENDED ASSIGNMENT
              </div>
              <h4 className="font-header" style={{ fontSize: '1.4rem', margin: '0 0 12px 0' }}>
                {rec.program}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                {rec.advice}
              </p>
            </div>

            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8' }}>
              {rec.spec}
            </div>
          </div>

          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              marginTop: '32px',
              width: '100%',
              padding: '16px',
              backgroundColor: '#0066FF',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0044CC')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
          >
            <span>LOCK IN ASSIGNMENT</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .console-left, .console-right { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
