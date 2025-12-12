import React from 'react';

const Hero = () => {
    return (
        <section className="container" style={{
            padding: '120px 24px 80px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '60px',
            minHeight: '80vh'
        }}>
            <div style={{ flex: 1, maxWidth: '600px' }}>
                <span style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '16px',
                    display: 'inline-block',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    Admissions Open 2025-26
                </span>
                <h1 className="title-lg" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>
                    Master Science.<br />
                    <span style={{ color: 'var(--text-secondary)' }}>Shape Your Future.</span>
                </h1>
                <p className="text-body" style={{ marginBottom: '40px', fontSize: '20px' }}>
                    Premier coaching for <strong>JEE (PCM)</strong> & <strong>NEET (PCB)</strong>.
                    Expert guidance aimed at clarity and results.
                </p>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{
                        backgroundColor: 'var(--text-primary)',
                        color: '#fff',
                        padding: '16px 32px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 600,
                        border: 'none',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        Apply Now
                    </button>
                    <button style={{
                        backgroundColor: 'white',
                        color: 'var(--text-primary)',
                        padding: '16px 32px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 600,
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        View Syllabus
                    </button>
                </div>
            </div>

            {/* Visual Element / Shape */}
            <div style={{
                flex: 1,
                height: '500px',
                background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(245, 158, 11, 0.1) 100%)',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                {/* Placeholder for an actual image or graphic */}
                <div style={{
                    width: '80%',
                    height: '80%',
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '24px' }}>ShahuAcademy</span>
                </div>

                {/* Decorative Circle */}
                <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    opacity: 0.2,
                    filter: 'blur(20px)'
                }} />
            </div>

            <style>{`
          @media (max-width: 960px) {
              section.container {
                  flex-direction: column;
                  text-align: center;
                  padding-top: 40px !important;
              }
              .text-body {
                  margin-left: auto;
                  margin-right: auto;
              }
              div[style*="display: flex"] {
                  justify-content: center;
              }
          }
      `}</style>
        </section>
    );
};

export default Hero;
