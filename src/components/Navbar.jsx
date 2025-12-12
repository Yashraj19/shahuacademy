import React from 'react';

const Navbar = () => {
    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '48px', // Apple nav height usually small
            }}>
                <a href="/" style={{ fontWeight: 600, fontSize: '18px' }}>ShahuAcademy</a>

                <div style={{ display: 'flex', gap: '24px', fontSize: '12px', alignItems: 'center' }}>
                    <a href="#courses">Courses</a>
                    <a href="#why-us">Why Us</a>
                    <a href="#faculty">Faculty</a>
                    <a href="#contact">Contact</a>
                </div>

                <button style={{
                    padding: '4px 12px',
                    fontSize: '12px',
                    borderRadius: '980px', // pill shape
                    backgroundColor: 'var(--accent-blue)',
                    color: 'white',
                    border: 'none',
                }}>
                    Enroll Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
