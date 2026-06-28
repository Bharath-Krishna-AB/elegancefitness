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
    <section style={{ padding: '120px 10vw', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ width: '100%' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">VISIT & JOIN</span>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900 }}>
            <span style={{ color: '#fff' }}>FIND YOUR</span>
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>GYM</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '16px auto 0 auto', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
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
                  background: expandedLocation === location.id ? 'rgba(0, 148, 217, 0.1)' : 'var(--bg-card)',
                  border: `2px solid ${expandedLocation === location.id ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)'}`,
                  color: '#fff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-header)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '1px'
                }}
              >
                <span>{location.name}</span>
                <span style={{
                  transform: expandedLocation === location.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  fontSize: '1.4rem'
                }}>
                  ▼
                </span>
              </button>

              {expandedLocation === location.id && (
                <div style={{
                  padding: '28px',
                  background: 'rgba(0, 148, 217, 0.08)',
                  border: '1px solid var(--accent-blue)',
                  borderTop: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px'
                }}>
                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Address</div>
                      <div style={{ color: '#fff', marginTop: '4px' }}>{location.address}</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Hours</div>
                      <div style={{ color: '#fff', marginTop: '4px', fontSize: '0.95rem' }}>{location.hours}</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Phone</div>
                      <div style={{ color: '#fff', marginTop: '4px' }}>{location.phone}</div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Email</div>
                      <div style={{ color: '#fff', marginTop: '4px' }}>{location.email}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Editorial Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '60px' }}>
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <h3 className="font-header" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
                DISCOVER THE ELEGANCE OF FITNESS
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Our team of certified trainers is ready to build your customized training protocol. Whether you're focusing on strength, power, endurance, or recovery, we have the specialized zones and expertise to help you dominate your fitness goals.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-blue)' }}>
                <span style={{ fontSize: '1.8rem' }}>📍</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff' }}>CLUB LOCATION</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '4px' }}>
                    Heart of the Community Plaza, 450 Elegance Way, Suite 100
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid #fff' }}>
                <span style={{ fontSize: '1.8rem' }}>🕐</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff' }}>OPERATING HOURS</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '4px' }}>
                    Mon - Fri: 5:00 AM – 11:00 PM <br />
                    Sat - Sun: 6:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-blue)' }}>
                <span style={{ fontSize: '1.8rem' }}>📞</span>
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff' }}>DIRECT CONTACT</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '4px' }}>
                    Phone: +1 (800) 555-ELEGANCE <br />
                    Email: join@elegancefitnessclub.com
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600 }}>
              <span style={{ fontSize: '1.2rem' }}>🔒</span>
              <span>100% PRIVACY GUARANTEED • NO SPAM</span>
            </div>
          </div>

          {/* Form Side (Klipsan Style Sharp Borders) */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '48px',
            border: '1px solid rgba(255,255,255,0.15)',
            position: 'relative'
          }}>
            <h3 className="font-header" style={{ fontSize: '2rem', color: '#fff', marginBottom: '32px' }}>
              CLAIM YOUR VIP TRIAL PASS
            </h3>

            {submitted ? (
              <div style={{
                padding: '40px',
                textAlign: 'center',
                background: 'rgba(0, 148, 217, 0.1)',
                border: '2px solid var(--accent-blue)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent-blue)' }}>✓</div>
                <h4 className="font-header" style={{ fontSize: '2rem', color: '#fff' }}>REQUEST CONFIRMED!</h4>
                <p style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>
                  Welcome to Elegance Fitness Club. A head coach will reach out to your email within 24 hours to schedule your walkthrough and body assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
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
                      background: 'var(--bg-secondary)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label className="font-header" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
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
                        background: 'var(--bg-secondary)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                    />
                  </div>

                  <div>
                    <label className="font-header" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
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
                        background: 'var(--bg-secondary)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    INTERESTED PROGRAM
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      cursor: 'pointer'
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
                  <label className="font-header" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
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
                      background: 'var(--bg-secondary)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '18px', fontSize: '1.2rem', marginTop: '10px' }}
                >
                  <span>SUBMIT APPLICATION</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
