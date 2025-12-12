import React from 'react';
import CourseCard from './CourseCard'; // Reusing card design for simplicity or create new FeatureCard

const Features = () => {
    // We can reuse the styling of CourseCard but maybe simpler. 
    // Let's create a inline simple card structure for features

    const features = [
        { title: "Expert Faculty", desc: "Learn from the best minds with years of teaching experience.", icon: "users" },
        { title: "Regular Testing", desc: "Weekly tests and mock exams to track your progress.", icon: "trophy" },
        { title: "Study Material", desc: "Comprehensive notes and problem sets designed for competitive exams.", icon: "book" },
    ];

    return (
        <section className="container section-padding" id="why-us">
            <h2 className="title-md" style={{ textAlign: 'center', marginBottom: '60px' }}>Why Choose ShahuAcademy?</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {features.map((f, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                        {/* We can use CourseCard here if we want consistent look, or just icons to text */}
                        <CourseCard title={f.title} description={f.desc} icon={f.icon} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
