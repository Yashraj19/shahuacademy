import React from 'react';

const Hero = () => {
    return (
        <section className="container hero-section">
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

                <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
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
            <div className="hero-visual">
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
        </section>
    );
};

export default Hero;
