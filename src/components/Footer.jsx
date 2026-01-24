import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-text">Portfolio</span>
                        </a>
                        <p>Building digital experiences that matter.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Navigation</h4>
                            <nav>
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#skills">Skills</a>
                                <a href="#projects">Projects</a>
                                <a href="#contact">Contact</a>
                            </nav>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <nav>
                                <a href="https://github.com/AbdallahBS" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/abdallahbensalem/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                               
                            </nav>
                        </div>
                    </div>

                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </button>
                </div>

               
            </div>
        </footer>
    )
}

export default Footer
