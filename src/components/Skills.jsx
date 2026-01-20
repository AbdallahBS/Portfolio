import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: '⚛️' },
                { name: 'JavaScript', icon: '🟨' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'HTML/CSS', icon: '🎨' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Tailwind', icon: '💨' },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express', icon: '⚡' },
                { name: 'Python', icon: '🐍' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'REST APIs', icon: '🔌' },
            ]
        },
        {
            title: 'Tools & DevOps',
            skills: [
                { name: 'Git/GitHub', icon: '📦' },
                { name: 'Docker', icon: '🐳' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Linux', icon: '🐧' },
                { name: 'Figma', icon: '🎯' },
                { name: 'VS Code', icon: '💻' },
            ]
        },
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Expertise</h2>
                    <p>Technologies I work with to bring ideas to life</p>
                </div>

                <div className="skills-categories">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-badges">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skill-badge">
                                        <span className="skill-badge-icon">{skill.icon}</span>
                                        <span className="skill-badge-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
