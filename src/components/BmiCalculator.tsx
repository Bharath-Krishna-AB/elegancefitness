import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BmiProps {
  setActiveTab: (tab: string) => void;
}

export const BmiCalculator: React.FC<BmiProps> = ({ setActiveTab }) => {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'muscle' | 'fatloss'>('muscle');

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const bmiNum = parseFloat(bmi);

  let status = "Normal Weight";
  let statusColor = "#0094D9";
  if (bmiNum < 18.5) {
    status = "Underweight (Build Mass)";
    statusColor = "#0094D9";
  } else if (bmiNum >= 25 && bmiNum < 30) {
    status = "Overweight (Cut Fat)";
    statusColor = "#0094D9";
  } else if (bmiNum >= 30) {
    status = "High BMI (Transformation Required)";
    statusColor = "#0094D9";
  }

  const getRecommendation = () => {
    if (goal === 'muscle') {
      return {
        program: "Men's Hardcore Strength & Power",
        advice: "Focus on heavy compound Olympic lifts (squats, deadlifts, bench) with our specialized strength trainers. High protein nutrition coaching included.",
        badge: "HYPERTROPHY FOCUS"
      };
    } else {
      return {
        program: "Functional Combat & HIIT",
        advice: "High-intensity interval conditioning on our turf tracks and battle rigs combined with intense cardio bursts for rapid fat burning.",
        badge: "SHRED & CONDITIONING"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2 className="font-header" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            marginTop: '0px',
            lineHeight: 0.95,
            letterSpacing: '-1px'
          }}>
            <span style={{ color: '#FFFFFF' }}>BMI &</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>TRAINING CALCULATOR</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '16px 0 0 0', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.3 }}>
            Calculate your body mass index and get instant AI-matched workout recommendations tailored to Elegance Fitness Club's specialized facilities.
          </p>
        </div>

        {/* Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
          
          {/* Controls Card */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px', background: '#000000' }}>
            <h3 className="font-header" style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800 }}>
              ENTER YOUR METRICS
            </h3>

            {/* Weight Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="font-header" style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, letterSpacing: '1px' }}>WEIGHT (KG)</span>
                <span className="font-header" style={{ fontSize: '1.4rem', color: 'var(--accent-blue)', fontWeight: 900 }}>{weight} kg</span>
              </div>
              <input 
                type="range" 
                min="40" 
                max="160" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-blue)',
                  height: '10px',
                  background: '#000000',
                  borderRadius: '0px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Height Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="font-header" style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, letterSpacing: '1px' }}>HEIGHT (CM)</span>
                <span className="font-header" style={{ fontSize: '1.4rem', color: 'var(--accent-blue)', fontWeight: 900 }}>{height} cm</span>
              </div>
              <input 
                type="range" 
                min="140" 
                max="220" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-blue)',
                  height: '10px',
                  background: '#000000',
                  borderRadius: '0px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Primary Goal Selector */}
            <div>
              <span className="font-header" style={{ fontSize: '1rem', color: '#FFFFFF', display: 'block', marginBottom: '12px', fontWeight: 700, letterSpacing: '1px' }}>
                SELECT YOUR PRIMARY GOAL
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { id: 'muscle', label: 'BUILD MUSCLE' },
                  { id: 'fatloss', label: 'SHRED FAT' },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    className="font-header"
                    style={{
                      padding: '14px 8px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      background: goal === g.id ? 'var(--accent-blue)' : '#000000',
                      color: goal === g.id ? '#000000' : '#FFFFFF',
                      border: goal === g.id ? '2px solid var(--accent-blue)' : '2px solid rgba(255,255,255,0.1)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease',
                      borderRadius: '0px'
                    }}
                  >
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card */}
          <motion.div 
            key={`${bmi}-${goal}`}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: '#000000',
              border: '2px solid var(--accent-blue)',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '8px 8px 0px rgba(204,255,0,0.15)'
            }}
          >
            <div>
              <span className="font-header" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '2px', fontWeight: 800 }}>
                YOUR BMI RESULT
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
                <span className="font-header" style={{ fontSize: '4.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                  {bmi}
                </span>
                <span className="font-header" style={{ fontSize: '1.2rem', color: statusColor, fontWeight: 800 }}>
                  ● {status}
                </span>
              </div>

              <div style={{ height: '1px', background: 'var(--border-color)', margin: '24px 0' }} />

              <div style={{ marginBottom: '20px' }}>
                <h4 className="font-header" style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 800 }}>
                  {rec.program}
                </h4>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#FFFFFF', lineHeight: 1.3 }}>
                {rec.advice}
              </p>
            </div>

            <button
              onClick={() => setActiveTab('contact')}
              className="btn-primary"
              style={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}
            >
              <span>CLAIM FREE CONSULTATION →</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
