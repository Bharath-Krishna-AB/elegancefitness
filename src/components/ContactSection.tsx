import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [expandedLocation, setExpandedLocation] = useState<string>('main');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: 'Men\'s Gym', message: '' });

  const locations = [
    {
      id: 'main',
      name: 'MAIN HEADQUARTERS',
      address: 'Heart of the Community Plaza, 450 Elegance Way, Suite 100',
      hours: 'Mon - Fri: 5:00 AM – 11:00 PM | Sat - Sun: 6:00 AM – 9:00 PM',
      phone: '+1 (800) 555-ELEGANCE',
      email: 'join@elegancefitnessclub.com'
    },
    {
      id: 'mens',
      name: "MEN'S DEDICATED GYM",
      address: 'Elite District, 220 Power Ave, Suite 50',
      hours: 'Mon - Fri: 5:00 AM – 11:00 PM | Sat - Sun: 6:00 AM – 9:00 PM',
      phone: '+1 (800) 555-MENS',
      email: 'mens@elegancefitnessclub.com'
    },
  ];

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
            <span style={{ color: '#ffffff' }}>FIND YOUR</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>CLUB</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '16px auto 0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Visit our state-of-the-art facilities in the heart of the community or claim your personalized trial membership today.
          </p>
        </div>

        {/* Locations Accordion */}
        <div style={{ marginBottom: '80px', maxWidth: '900px', margin: '0 auto 80px' }}>
          {locations.map((location) => (
            <div key={location.id} style={{ marginBottom: '16px' }}>
              <button
                onClick={() => setExpandedLocation(expandedLocation === location.id ? '' : location.id)}
                style={{
                  width: '100%',
                  padding: '20px 28px',
                  background: expandedLocation === location.id ? '#141414' : '#111111',
                  border: `2px solid ${expandedLocation === location.id ? 'var(--accent-blue)' : 'rgba(255,255,255,0.15)'}`,
                  color: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-header)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  borderRadius: '0px'
                }}
              >
                <span>{location.name}</span>
                <span style={{
                  transform: expandedLocation === location.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  display: 'inline-block',
                  fontSize: '1.2rem',
                  color: expandedLocation === location.id ? 'var(--accent-blue)' : '#ffffff'
                }}>
                  ▼
                </span>
              </button>

              {expandedLocation === location.id && (
                <div style={{
                  padding: '32px',
                  background: '#111111',
                  border: '2px solid var(--accent-blue)',
                  borderTop: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '24px'
                }}>
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div className="font-header" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '1.5px', fontWeight: 800 }}>ADDRESS</div>
                      <div style={{ color: '#ffffff', marginTop: '6px', fontWeight: 500, lineHeight: 1.5 }}>{location.address}</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div className="font-header" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '1.5px', fontWeight: 800 }}>HOURS</div>
                      <div style={{ color: '#ffffff', marginTop: '6px', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5 }}>{location.hours}</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div className="font-header" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '1.5px', fontWeight: 800 }}>PHONE</div>
                      <div style={{ color: '#ffffff', marginTop: '6px', fontWeight: 500 }}>{location.phone}</div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="font-header" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '1.5px', fontWeight: 800 }}>EMAIL</div>
                      <div style={{ color: '#ffffff', marginTop: '6px', fontWeight: 500 }}>{location.email}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
