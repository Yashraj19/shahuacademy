import React from 'react';

const Navbar = () => {
    return (
        <div style={{
            position: 'fixed',
            top: '24px',
            left: 0,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 24px'
        }}>
            <nav className="glass" style={{
                borderRadius: '999px',
                padding: '12px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '900px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255,255,255,0.8)'
            }}>
                <a href="/" style={{
                    fontWeight: 700,
                    fontSize: '20px',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em'
                }}>
                    Shahu<span style={{ color: 'var(--accent-primary)' }}>Academy</span>
                </a>

                <div className="nav-links" style={{ display: 'flex', gap: '32px', fontSize: '15px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                    <a href="#courses">Courses</a>
                    <a href="#why-us">Why Us</a>
                    <a href="#faculty">Faculty</a>
                </div>

                <button style={{
                    padding: '10px 24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '999px',
                    backgroundColor: 'var(--accent-primary)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                }}>
                    Enroll
                </button>
            </nav>
            <style>{`
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default Navbar;
