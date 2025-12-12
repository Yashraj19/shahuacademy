import React from 'react';
import { Cpu, Atom, Stethoscope, BookOpen, Users, Trophy } from 'lucide-react';

const icons = {
    cpu: Cpu,
    atom: Atom,
    stethoscope: Stethoscope,
    book: BookOpen,
    users: Users,
    trophy: Trophy
};

const CourseCard = ({ title, description, icon }) => {
    const IconComponent = icons[icon] || Atom;

    return (
        <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
            transition: 'all 0.3s ease',
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e2e8f0';
            }}
        >
            <div style={{
                color: 'var(--accent-primary)',
                backgroundColor: '#fff7ed', // light orange bg
                padding: '12px',
                borderRadius: '12px',
                marginBottom: '8px'
            }}>
                <IconComponent size={32} strokeWidth={2} />
            </div>
            <h3 className="title-md" style={{ fontSize: '24px', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>{description}</p>

            <a href="/courses" style={{
                color: 'var(--text-primary)',
                marginTop: 'auto',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}>
                View Details <span style={{ color: 'var(--accent-primary)' }}>→</span>
            </a>
        </div>
    );
};

export default CourseCard;
