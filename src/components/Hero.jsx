import React from 'react';

const Hero = () => {
    return (
        <section className="container" style={{
            textAlign: 'center',
            padding: '120px 0 80px',
        }}>
            <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#f56300', // Apple-orange style for accent
                marginBottom: '16px',
                display: 'block'
            }}>
                New Batch Starting Soon
            </span>
            <h1 className="title-lg" style={{ marginBottom: '16px' }}>
                Excellence in <br />Science Education.
            </h1>
            <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                Premier coaching for Class 11th & 12th. <br />
                Focused preparation for JEE (PCM) and NEET (PCB).
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button style={{
                    backgroundColor: 'var(--accent-blue)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '980px',
                    fontSize: '17px',
                    border: 'none'
                }}>
                    Join ShahuAcademy
                </button>
                <button style={{
                    backgroundColor: 'transparent',
                    color: 'var(--accent-blue)',
                    padding: '12px 24px',
                    fontSize: '17px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    Learn more &gt;
                </button>
            </div>
        </section>
    );
};

export default Hero;
