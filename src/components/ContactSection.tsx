import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/content';
import { MdArrowOutward } from 'react-icons/md';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section style={{ padding: '100px 4vw', backgroundColor: '#000000', position: 'relative', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Editorial Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px' }}>
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 className="font-header" style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.1, fontWeight: 800 }}>
                {COMPANY_DATA.contactHeading}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                {COMPANY_DATA.contactDescription}
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href={`https://www.google.com/maps/search/${encodeURIComponent(COMPANY_DATA.location)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '28px', background: 'transparent', borderLeft: '4px solid var(--accent-blue)', border: '1px solid rgba(0, 150, 255, 0.2)', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 150, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 150, 255, 0.2)'; }}>
                <h4 className="font-header" style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>CLUB LOCATION</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                  {COMPANY_DATA.location}
                </p>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '28px', background: 'transparent', borderLeft: '4px solid #FFFFFF', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}>
                <h4 className="font-header" style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>OPERATING HOURS</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <p style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Club Timing</p>
                    <p style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>
                      {COMPANY_DATA.hours.morning}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Friday Timing</p>
                    <p style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>
                      {COMPANY_DATA.hours.evening}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'transparent', borderLeft: '4px solid var(--accent-blue)', border: '1px solid var(--border-color)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <div style={{ width: '100%' }}>
                  <h4 className="font-header" style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '16px' }}>DIRECT CONTACT</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {COMPANY_DATA.phone.split(' / ').map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.trim()}`} style={{ display: 'block', color: 'var(--accent-blue)', fontSize: '1.6rem', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-blue)'}>
                        {phone.trim()}
                      </a>
                    ))}
                  </div>
                  <a href={`mailto:${COMPANY_DATA.email}`} style={{ display: 'block', color: 'var(--accent-blue)', fontSize: '1.6rem', marginTop: '12px', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-blue)'}>
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1.5px' }}>
              <span>{COMPANY_DATA.privacyNote}</span>
            </div>
          </div>

          {/* Form Side */}
          <div style={{
            background: '#0a0a0a',
            padding: '40px',
            border: '2px solid var(--accent-blue)',
            position: 'relative',
            boxShadow: '0 0 40px rgba(0, 150, 255, 0.1)'
          }}>
            <h3 className="font-header" style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '32px', fontWeight: 800 }}>
              GET IN TOUCH
            </h3>

            {submitted ? (
              <div style={{
                padding: '40px',
                textAlign: 'center',
                background: '#000000',
                border: '2px solid var(--accent-blue)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent-blue)', fontWeight: 800 }}>+</div>
                <h4 className="font-header" style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 800 }}>REQUEST RECEIVED!</h4>
                <p style={{ color: '#FFFFFF', fontSize: '1.05rem', lineHeight: 1.3 }}>
                  Thanks for reaching out. We'll get back to you soon to discuss your fitness goals.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
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
                      background: '#000000',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFFFFF',
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
                    <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
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
                        background: '#000000',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#FFFFFF',
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
                    <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
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
                        background: '#000000',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#FFFFFF',
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
                  <label className="font-header" style={{ display: 'block', fontSize: '0.85rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700, letterSpacing: '1px' }}>
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
                      background: '#000000',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFFFFF',
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
                  style={{ width: '100%', justifyContent: 'center', padding: '18px', fontSize: '1rem', marginTop: '20px', fontWeight: 800, letterSpacing: '1px', transition: 'all 0.3s ease', transform: 'none' }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>SUBMIT APPLICATION <MdArrowOutward size={18} /></span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
