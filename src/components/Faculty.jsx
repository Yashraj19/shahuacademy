import React from 'react';

const Faculty = () => {
    const faculty = [
        { name: "Prof. R.K. Shahu", subject: "Physics", exp: "20+ Years" },
        { name: "Dr. S. Deshmukh", subject: "Chemistry", exp: "15+ Years" },
        { name: "Prof. A. Kulkarni", subject: "Mathematics", exp: "18+ Years" },
        { name: "Dr. P. Patil", subject: "Biology", exp: "12+ Years" }
    ];

    return (
        <section className="container section-padding" id="faculty" style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            margin: '40px auto',
            padding: '60px 40px',
            border: '1px solid #e2e8f0'
        }}>
            <h2 className="title-md" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-primary)' }}>Meet Our Mentors</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {faculty.map((member, i) => (
                    <div key={i} style={{
                        textAlign: 'center',
                        padding: '32px 24px',
                        border: '1px solid #f1f5f9',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: '#f8fafc',
                        transition: 'transform 0.2s',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = '#f1f5f9';
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            fontWeight: 600,
                            color: 'var(--accent-primary)',
                            border: '2px solid #e2e8f0',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            {member.name.charAt(0)}
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: 'var(--text-primary)' }}>{member.name}</h3>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '4px', fontSize: '14px' }}>{member.subject}</p>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Exp: {member.exp}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;
