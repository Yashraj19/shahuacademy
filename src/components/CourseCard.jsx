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
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
        >
            <div style={{
                color: 'var(--text-primary)',
                marginBottom: '10px'
            }}>
                {/* Placeholder for icon, need specific lucide icons import */}
                <IconComponent size={48} strokeWidth={1.5} />
            </div>
            <h3 className="title-md" style={{ fontSize: '24px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.4 }}>{description}</p>

            <a href="/courses" style={{
                color: 'var(--accent-blue)',
                marginTop: 'auto',
                fontSize: '17px',
                fontWeight: 600
            }}>
                View Syllabus &gt;
            </a>
        </div>
    );
};

export default CourseCard;
