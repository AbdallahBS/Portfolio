import './About.css'

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p>Get to know the developer behind the code</p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Crafting Digital Experiences with Passion</h3>
                        <p>
                            Junior developer, recently graduated with a Bachelor’s degree in Information Technology, specializing in Information Systems Development.
                            Currently a Computer Engineering student at the National Engineering School of Carthage (ENICarthage), I am pursuing my academic journey with a strong ambition to continuously develop my technical and professional skills.
                        </p>
                        <p>
                            Founder of the Universe platform, I am passionate about backend and frontend web development, as well as application and mobile development. I enjoy designing useful, high-performance, and user-oriented solutions, relying on modern technologies and best practices.
                        </p>
                        <p>
                            Throughout my academic journey, I completed three internships (initiation, advanced training, and final-year project), which allowed me to gain solid hands-on experience, work on real-world projects, and strengthen my organizational and teamwork skills.I constantly seek to improve my skills in information technologies and contribute to innovative and sustainable projects that reflect my dedication and professional mindset.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight">
                                <div className="highlight-icon">💡</div>
                                <div>
                                    <h4>Problem Solver</h4>
                                    <p>Love tackling complex challenges</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <div className="highlight-icon">🎯</div>
                                <div>
                                    <h4>Detail Oriented</h4>
                                    <p>Pixel-perfect implementations</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <div className="highlight-icon">🤝</div>
                                <div>
                                    <h4>Team Player</h4>
                                    <p>Collaborative and communicative</p>
                                </div>
                            </div>
                            <div className="highlight">
                                <div className="highlight-icon">📚</div>
                                <div>
                                    <h4>Continuous Learner</h4>
                                    <p>Always expanding knowledge</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary">
                            Let's Work Together
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
