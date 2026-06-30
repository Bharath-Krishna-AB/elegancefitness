import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: 'Protocol 01 // Hypertrophy', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: 'Protocol 01 // Hypertrophy', message: '' });
    }, 5000);
  };

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
            <span>[10] // APPLICATION INTAKE & INITIATION</span>
          </div>
          <h2 className="font-header" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            color: '#0B0F19',
            margin: 0
          }}>
            INITIATE <span style={{ color: '#0066FF' }}>APPLICATION.</span>
          </h2>
        </div>
        <div style={{
          maxWidth: '450px',
          fontSize: '1rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          Submit biometric credentials and training objectives for membership review. Our coaching directors respond within 24 hours.
        </div>
      </div>

      {/* Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '32px',
        alignItems: 'start'
      }}>
        {/* Left Information Box (Spans 5 cols on desktop) */}
        <div style={{
          gridColumn: 'span 12',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(11, 15, 25, 0.1)',
          borderRadius: '4px'
        }} className="intake-left">
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0066FF', letterSpacing: '0.15em', display: 'block', marginBottom: '24px' }}>
            [INTAKE PROTOCOL]
          </span>
          <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#0B0F19', marginBottom: '16px' }}>
            Uncompromised athletic transformation.
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7, marginBottom: '32px' }}>
            Once your application is received, you will be scheduled for a comprehensive walkthrough of our floor zones and a 1-on-1 biometric evaluation with our head coach.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid rgba(11, 15, 25, 0.1)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#64748B' }}>EVALUATION FEE</span>
              <strong style={{ color: '#0066FF' }}>COMPLIMENTARY WITH MEMBERSHIP</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#64748B' }}>PRIVACY LEVEL</span>
              <strong style={{ color: '#0B0F19' }}>STRICT DATA ENCRYPTION</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: '#64748B' }}>ROSTER CAPACITY</span>
              <strong style={{ color: '#0B0F19' }}>SELECT SPOTS AVAILABLE</strong>
            </div>
          </div>
        </div>

        {/* Right Application Form (Spans 7 cols on desktop) */}
        <div style={{
          gridColumn: 'span 12',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(11, 15, 25, 0.1)',
          borderRadius: '4px'
        }} className="intake-right">
          {submitted ? (
            <div style={{
              padding: '48px',
              textAlign: 'center',
              backgroundColor: '#0B0F19',
              color: '#FFFFFF',
              borderRadius: '2px'
            }}>
              <div style={{ fontSize: '3rem', color: '#0066FF', marginBottom: '16px' }}>[✓]</div>
              <h4 className="font-header" style={{ fontSize: '2rem', marginBottom: '12px' }}>APPLICATION RECEIVED</h4>
              <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
                Your intake parameters have been registered in our system. A senior coaching director will contact your dispatch line within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B0F19', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  FULL APPLICANT NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. ALEX MERCER"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: '#FAFAFC',
                    border: '1px solid rgba(11, 15, 25, 0.2)',
                    color: '#0B0F19',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    borderRadius: '2px',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(11, 15, 25, 0.2)')}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B0F19', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    DISPATCH EMAIL *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="ALEX@EXAMPLE.COM"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: '#FAFAFC',
                      border: '1px solid rgba(11, 15, 25, 0.2)',
                      color: '#0B0F19',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      borderRadius: '2px',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(11, 15, 25, 0.2)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B0F19', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    TELEPHONE LINE
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      backgroundColor: '#FAFAFC',
                      border: '1px solid rgba(11, 15, 25, 0.2)',
                      color: '#0B0F19',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      borderRadius: '2px',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(11, 15, 25, 0.2)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B0F19', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  TARGET PROTOCOL ASSIGNMENT
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: '#FAFAFC',
                    border: '1px solid rgba(11, 15, 25, 0.2)',
                    color: '#0B0F19',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    borderRadius: '2px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(11, 15, 25, 0.2)')}
                >
                  <option value="Protocol 01 // Hypertrophy">PROTOCOL 01 // HYPERTROPHY & FORCE</option>
                  <option value="Protocol 02 // Metabolic Shred">PROTOCOL 02 // METABOLIC SHRED</option>
                  <option value="Protocol 03 // Longevity & Rehab">PROTOCOL 03 // LONGEVITY & REHAB</option>
                  <option value="Full Facility Access">FULL FACILITY ACCESS // ALL ZONES</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#0B0F19', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  TRAINING OBJECTIVES & SPECIFICATIONS
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail current physical benchmarks, injury history, or specific competition goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    backgroundColor: '#FAFAFC',
                    border: '1px solid rgba(11, 15, 25, 0.2)',
                    color: '#0B0F19',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    borderRadius: '2px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0066FF')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(11, 15, 25, 0.2)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  backgroundColor: '#0B0F19',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  marginTop: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0066FF')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0B0F19')}
              >
                <span>TRANSMIT APPLICATION</span>
                <span>↗</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .intake-left { grid-column: span 5 !important; }
          .intake-right { grid-column: span 7 !important; }
        }
      `}</style>
    </section>
  );
};
