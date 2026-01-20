import './Projects.css'
import universeImg from '../assets/universe.png'
import arzaakImg from '../assets/arzaak.png'
import housePredictionImg from '../assets/housePridiction.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Universe Project',
            description: 'Universe is a platform designed to simplify the search for opportunities in Tunisia in an intelligent way. It also provides SaaS services to help young job seekers build, manage, and develop their careers more effectively.',
            image: universeImg,
            tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
            liveUrl: 'https://universe.tn',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 2,
            title: 'Arzaak Project ',
            description: 'Arzaak is a final-year project (PFE) that serves as an education and recruitment platform for non-qualified or low-skilled individuals in the artisanal sector. Its goal is to promote creative and traditional crafts by providing access to training and professional opportunities.',
            image: arzaakImg,
            tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
            liveUrl: 'https://arzaak.tn',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 3,
            title: 'Tunisia Real Estate Price Prediction',
            description: 'A machine learning project to predict house prices in Tunisia using Random Forest. Includes data preprocessing, handling missing values, variable encoding, visualizations, and model performance evaluation.',
            image: housePredictionImg,
            tags: ['Python', 'Machine Learning', 'Random Forest', 'Kaggle'],
            liveUrl: 'https://lnkd.in/e7A_GnTU',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 4,
            title: 'KUBE KLOUDE Dashboard & Showcase',
            description: 'Developed a dashboard to control company services and facilitate client communication using the MERN stack. Also created a showcase platform to improve company visibility using HUGO technology.',
            image: null,
            tags: ['HUGO', 'CockroachDB', 'Netlify', 'Node.js'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
        
    ]

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p>Some of my recent work that I'm proud of</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="project-img" />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <svg viewBox="0 0 400 200" fill="none">
                                            <rect width="400" height="200" fill="var(--bg-tertiary)" />
                                            <rect x="40" y="40" width="320" height="20" rx="4" fill="var(--border-color)" />
                                            <rect x="40" y="80" width="200" height="12" rx="3" fill="var(--border-color)" />
                                            <rect x="40" y="100" width="240" height="12" rx="3" fill="var(--border-color)" />
                                            <rect x="40" y="140" width="80" height="30" rx="6" fill="url(#projGradient)" />
                                            <defs>
                                                <linearGradient id="projGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="#06b6d4" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <a href={project.liveUrl} className="project-link" aria-label="View Live" target="_blank" rel="noopener noreferrer">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15,3 21,3 21,9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                    {project.githubUrl && project.githubUrl !== '#' ? (
                                        <a href={project.githubUrl} className="project-link" aria-label="View Code" target="_blank" rel="noopener noreferrer">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="project-link disabled" title="This code is private">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <a href="https://github.com/AbdallahBS" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
