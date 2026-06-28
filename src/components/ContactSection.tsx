import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield } from 'lucide-react';

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
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge">KLIPSAN & GYMBOX INSPIRED</span>
          <h2 className="font-header" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900 }}>
            BEGIN YOUR <span style={{ color: 'var(--accent-blue)' }}>JOURNEY NOW</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '16px auto 0 auto', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            Visit our state-of-the-art facilities in the heart of the community or claim your personalized trial membership today.
          </p>
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
                Our team of certified trainers is ready to build your customized training protocol. Whether you are aiming for hard powerlifting, ladies' glute & core transformation, or kids agility classes, we have the specialized zones for you.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-blue)' }}>
                <MapPin size={28} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff' }}>CLUB LOCATION</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '4px' }}>
                    Heart of the Community Plaza, 450 Elegance Way, Suite 100
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid #fff' }}>
                <Clock size={28} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 className="font-header" style={{ fontSize: '1.3rem', color: '#fff' }}>OPERATING HOURS</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '4px' }}>
                    Mon - Fri: 5:00 AM – 11:00 PM <br />
                    Sat - Sun: 6:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'var(--bg-card)', borderLeft: '3px solid var(--accent-blue)' }}>
                <Phone size={28} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
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
              <Shield size={18} />
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
                <CheckCircle2 size={56} color="var(--accent-blue)" />
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
                    <option value="Men's Gym">New Men's Dedicated Strength Gym</option>
                    <option value="Ladies' Gym">New Ladies' Gym Branch & Studio</option>
                    <option value="Kids Fitness">Kids Fitness, Dance & Yoga</option>
                    <option value="Functional HIIT">Functional Training & Zumba</option>
                    <option value="Personal Training">1-on-1 Transformation & Rehab</option>
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
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
