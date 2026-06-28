import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: 'Men\'s Gym', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', program: 'Men\'s Gym', message: '' });
    }, 5000);
  };

  return (
    <section style={{ padding: '100px 6vw', backgroundColor: '#080808', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-1px' }}>
            <span style={{ color: '#ffffff' }}>CONTACT</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>US TODAY</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '16px auto 0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Ready to join? Contact us today to claim your membership and start your fitness transformation.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px' }}>
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 className="font-header" style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '16px', lineHeight: 1.1, fontWeight: 800 }}>
                DISCOVER THE ELEGANCE OF FITNESS
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Our team of certified trainers is ready to build your customized training protocol. Whether you're focusing on strength, power, endurance, or recovery, we have the specialized zones and expertise to help you dominate your fitness goals.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: '#111111', borderLeft: '4px solid var(--accent-blue)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }}>📍</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800 }}>CLUB LOCATION</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', lineHeight: 1.5 }}>
                    Heart of the Community Plaza, 450 Elegance Way, Suite 100
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: '#111111', borderLeft: '4px solid #ffffff', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '1.5rem', color: '#ffffff' }}>🕐</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800 }}>OPERATING HOURS</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', lineHeight: 1.5 }}>
                    Mon - Fri: 5:00 AM – 11:00 PM <br />
                    Sat - Sun: 6:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: '#111111', borderLeft: '4px solid var(--accent-blue)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }}>📞</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800 }}>DIRECT CONTACT</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', lineHeight: 1.5 }}>
                    Phone: +1 (800) 555-ELEGANCE <br />
                    Email: join@elegancefitnessclub.com
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1.5px' }}>
              <span>🔒 100% PRIVACY GUARANTEED • NO SPAM</span>
            </div>
          </div>

          {/* Form Side */}
          <div style={{
            background: '#111111',
            padding: '40px',
            border: '2px solid rgba(255,255,255,0.15)',
            position: 'relative'
          }}>
            <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '32px', fontWeight: 800 }}>
              CLAIM YOUR VIP TRIAL PASS
            </h3>

            {submitted ? (
              <div style={{
                padding: '40px',
                textAlign: 'center',
                background: '#141414',
                border: '2px solid var(--accent-blue)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent-blue)' }}>✓</div>
                <h4 className="font-header" style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 800 }}>REQUEST CONFIRMED!</h4>
                <p style={{ color: '#cccccc', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Welcome to Elegance Fitness Club. A head coach will reach out to your email within 24 hours to schedule your walkthrough and body assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
                    FULL NAME *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      borderRadius: '0px'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                  <div>
                    <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                    />
                  </div>

                  <div>
                    <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        borderRadius: '0px'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
                    INTERESTED PROGRAM
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      cursor: 'pointer',
                      borderRadius: '0px'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                  >
                    <option value="Men's Gym">Men's Gym Membership</option>
                    <option value="Functional HIIT">Functional Training Program</option>
                    <option value="Personal Training">1-on-1 Coaching & Rehab</option>
                    <option value="Recovery">Recovery & Wellness Services</option>
                  </select>
                </div>

                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
                    FITNESS GOALS OR QUESTIONS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current fitness level and target goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical',
                      borderRadius: '0px'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', marginTop: '10px' }}
                >
                  <span>SUBMIT APPLICATION →</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
