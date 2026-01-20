import { useEffect, useState } from 'react'
import './Hero.css'
import profileImage from '../assets/profile.png'

const Hero = () => {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [showCvDropdown, setShowCvDropdown] = useState(false)

    const roles = [
        'Full Stack Developer',
        'React Specialist',
        'UI/UX Enthusiast',
        'Problem Solver'
    ]

    useEffect(() => {
        const currentRole = roles[loopNum % roles.length]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1))
                if (text === currentRole) {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                setText(currentRole.substring(0, text.length - 1))
                if (text === '') {
                    setIsDeleting(false)
                    setLoopNum(loopNum + 1)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, loopNum])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.cv-dropdown-container')) {
                setShowCvDropdown(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting mono">
                        <span className="greeting-icon">👋</span> Hello, I'm
                    </p>

                    <h1 className="hero-name">
                        Abdallah Ben Salem
                    </h1>
                    <p className="hero-subtitle gradient-text">CS Engineering Student @ ENIC</p>

                    <div className="hero-role">
                        <span className="role-prefix mono">&gt;</span>
                        <span className="role-text">{text}</span>
                        <span className="role-cursor">|</span>
                    </div>

                    <p className="hero-description">
                        Engineering student at the National School of Engineers of Carthage (ENIC),
                        recently graduated in Information Systems Development. I craft beautiful,
                        performant web experiences with modern technologies and a passion for clean code.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <span>View My Work</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>

                        <div className="cv-dropdown-container">
                            <button
                                className="btn btn-secondary cv-btn"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowCvDropdown(!showCvDropdown)
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7,10 12,15 17,10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span>Download CV</span>
                                <svg className={`dropdown-arrow ${showCvDropdown ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </button>
                            {showCvDropdown && (
                                <div className="cv-dropdown">
                                    <a href="/cv-english.pdf" download className="cv-option">
                                        <span>🇬🇧</span> English
                                    </a>
                                    <a href="/cv-francais.pdf" download className="cv-option">
                                        <span>🇫🇷</span> Français
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#contact" className="btn btn-secondary">
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">3</span>
                            <span className="stat-label">Internships Completed</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-container">
                        <div className="hero-image-glow"></div>
                        <img src={profileImage} alt="Abdallah Ben Salem" className="hero-profile-image" />

                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator">
                <span>Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </a>
        </section>
    )
}

export default Hero
