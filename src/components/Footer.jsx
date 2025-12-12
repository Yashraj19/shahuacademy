import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f5f5f7', // darker gray than bg-primary actually, apple uses same
            borderTop: '1px solid #d2d2d7',
            padding: '40px 0',
            marginTop: '80px',
            fontSize: '12px',
            color: 'var(--text-secondary)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ marginBottom: '8px' }}>&copy; 2025 ShahuAcademy. All rights reserved.</p>
                    <p>Satara Road, Pune, Maharashtra, India.</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
