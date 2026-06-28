import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Dumbbell, Sparkles, ArrowRight } from 'lucide-react';

interface BmiProps {
  setActiveTab: (tab: string) => void;
}

export const BmiCalculator: React.FC<BmiProps> = ({ setActiveTab }) => {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'holistic'>('muscle');

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const bmiNum = parseFloat(bmi);

  let status = "Normal Weight";
  let statusColor = "#22c55e";
  if (bmiNum < 18.5) {
    status = "Underweight (Build Mass)";
    statusColor = "#eab308";
  } else if (bmiNum >= 25 && bmiNum < 30) {
    status = "Overweight (Cut Fat)";
    statusColor = "#f97316";
  } else if (bmiNum >= 30) {
    status = "High BMI (Transformation Required)";
    statusColor = "#ef4444";
  }

  const getRecommendation = () => {
    if (goal === 'muscle') {
      return {
        program: "Men's Hardcore Strength & Power",
        advice: "Focus on heavy compound Olympic lifts (squats, deadlifts, bench) with our specialized strength trainers. High protein nutrition coaching included.",
        badge: "HYPERTROPHY FOCUS"
      };
    } else if (goal === 'fatloss') {
      return {
        program: "Functional Combat & HIIT",
        advice: "High-intensity interval conditioning on our turf tracks and battle ropes combined with Zumba cardio bursts for rapid fat burning.",
        badge: "SHRED & CONDITIONING"
      };
    } else {
      return {
        program: "Holistic Yoga & Core Pilates",
        advice: "Balancing flexibility, core stabilization, and stress reduction for emotional well-being and lifelong joint health.",
        badge: "MIND & BODY"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">INTERACTIVE HEALTH TOOL</span>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800 }}>
            BMI & <span style={{ color: 'var(--accent-blue)' }}>TRAINING CALCULATOR</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Calculate your body mass index and get instant AI-matched workout recommendations tailored to Elegance Fitness Club's specialized facilities.
          </p>
        </div>

        {/* Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
          
          {/* Controls Card */}
          <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Activity color="var(--accent-blue)" /> ENTER YOUR METRICS
            </h3>

            {/* Weight Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="font-header" style={{ fontSize: '1.1rem', color: '#fff' }}>WEIGHT (KG)</span>
                <span className="font-header" style={{ fontSize: '1.4rem', color: 'var(--accent-blue)' }}>{weight} kg</span>
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
                  height: '8px',
                  background: '#22222d',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Height Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="font-header" style={{ fontSize: '1.1rem', color: '#fff' }}>HEIGHT (CM)</span>
                <span className="font-header" style={{ fontSize: '1.4rem', color: 'var(--accent-blue)' }}>{height} cm</span>
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
                  height: '8px',
                  background: '#22222d',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Primary Goal Selector */}
            <div>
              <span className="font-header" style={{ fontSize: '1.1rem', color: '#fff', display: 'block', marginBottom: '12px' }}>
                SELECT YOUR PRIMARY GOAL
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {[
                  { id: 'muscle', label: 'BUILD MUSCLE', icon: <Dumbbell size={18} /> },
                  { id: 'fatloss', label: 'SHRED FAT', icon: <Flame size={18} /> },
                  { id: 'holistic', label: 'HOLISTIC', icon: <Sparkles size={18} /> },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    className="font-header"
                    style={{
                      padding: '12px 8px',
                      fontSize: '0.9rem',
                      background: goal === g.id ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      border: goal === g.id ? '1px solid var(--accent-blue)' : '1px solid rgba(255,255,255,0.1)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {g.icon}
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card */}
          <motion.div 
            key={`${bmi}-${goal}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(145deg, rgba(17,17,22,0.95) 0%, rgba(25,25,34,0.9) 100%)',
              border: '2px solid var(--accent-blue)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 0 40px rgba(0, 148, 217, 0.2)'
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                YOUR BMI RESULT
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', margin: '16px 0' }}>
                <span className="font-header" style={{ fontSize: '5rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                  {bmi}
                </span>
                <span className="font-header" style={{ fontSize: '1.4rem', color: statusColor }}>
                  ● {status}
                </span>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '24px 0' }} />

              <div style={{ marginBottom: '16px' }}>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: '#fff' }}>
                  {rec.badge}
                </span>
                <h4 className="font-header" style={{ fontSize: '2rem', color: 'var(--accent-blue)', marginTop: '8px' }}>
                  {rec.program}
                </h4>
              </div>

              <p style={{ fontSize: '1.1rem', color: '#e0e0e0', lineHeight: 1.7 }}>
                {rec.advice}
              </p>
            </div>

            <button 
              onClick={() => setActiveTab('contact')}
              className="btn-primary" 
              style={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}
            >
              <span>CLAIM FREE CONSULTATION</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
