import React from 'react';

const Faculty = () => {
    const faculty = [
        { name: "Prof. R.K. Shahu", subject: "Physics", exp: "20+ Years" },
        { name: "Dr. S. Deshmukh", subject: "Chemistry", exp: "15+ Years" },
        { name: "Prof. A. Kulkarni", subject: "Mathematics", exp: "18+ Years" },
        { name: "Dr. P. Patil", subject: "Biology", exp: "12+ Years" }
    ];

    return (
        <section className="container section-padding" id="faculty" style={{ backgroundColor: '#ffffff', borderRadius: '24px', margin: '40px auto' }}>
            <h2 className="title-md" style={{ textAlign: 'center', marginBottom: '40px' }}>Meet Our Mentors</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                {faculty.map((member, i) => (
                    <div key={i} style={{
                        textAlign: 'center',
                        padding: '24px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '12px'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: '#f5f5f7',
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            fontWeight: 600,
                            color: 'var(--text-secondary)'
                        }}>
                            {member.name.charAt(0)}
                        </div>
                        <h3 style={{ fontSize: '19px', fontWeight: 600, marginBottom: '4px' }}>{member.name}</h3>
                        <p style={{ color: 'var(--accent-blue)', fontWeight: 500, marginBottom: '4px' }}>{member.subject}</p>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Exp: {member.exp}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;
