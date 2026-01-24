import { useEffect, useRef, useState } from 'react'
import './Activities.css'

const Activities = () => {
    const activitiesRef = useRef([])
    const [selectedActivity, setSelectedActivity] = useState(null)
    const [lightboxImage, setLightboxImage] = useState(null)

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, observerOptions)

        activitiesRef.current.forEach(activity => {
            if (activity) observer.observe(activity)
        })

        return () => observer.disconnect()
    }, [])

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedActivity(null)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    const activities = [
        {
            id: 1,
            title: 'Cybersecurity Hackathon - 1st Place 🏆',
            description: 'Won first place at ISET Kelibia Cybersecurity Hackathon in a Capture The Flag competition.',
            image: '/src/assets/activities/actv1/act1.jpg', // Replace with your image path
            tags: ['CTF', 'Cybersecurity', 'First Place'],
            detailedContent: {
                achievement: '1st Place Winner',
                organization: 'ISET Kelibia',
                eventType: 'Cybersecurity Hackathon - Capture The Flag',
                description: `Won first place in a highly competitive Capture The Flag (CTF) cybersecurity competition organized by ISET Kélibia. The event challenged participants to solve a wide range of real-world cybersecurity problems across multiple domains, including security analysis, problem-solving, and technical exploitation, demonstrating strong teamwork and advanced technical skills.`,
                certificate: '/src/assets/activities/actv1/certf.png',

                toolsUsed: [

                    'Metasploit Framework',
                    'Wireshark',
                    'Nmap',
                    'Hashcat'
                ],
            }
        },
        {
            id: 2,
            title: 'ISEROBOT Hackathon - Line Follower Robot',
            description: 'Built a line follower robot with obstacle detection at ISEROBOT Edition 1, representing ISET Kelibia among 24 ISETs.',
            image: '/src/assets/activities/actv2/3.jpg',
            tags: ['Hardware', 'Mechanical', 'Systems Thinking'],
            detailedContent: {
                achievement: 'ISEROBOT Hackathon Participant',
                organization: 'Iteam University - ISEROBOT Edition 1 & 2',
                eventType: 'Robotics Competition',
                description: `Participated in both ISEROBOT Edition 1 (2024) and Edition 2 (2025) hackathons organized by Iteam University, representing ISET Kelibia among 24 participating ISETs across the country. Built line follower robots equipped with obstacle detection capabilities, combining sensor integration, motor control, and real-time decision-making algorithms. These competitions were transformative experiences that deepened my understanding of robotics, embedded systems, and the importance of teamwork in solving complex engineering challenges under time constraints.`,
                gallery: [
                    '/src/assets/activities/actv2/3.jpg',
                    '/src/assets/activities/actv2/2.jpg',
                    '/src/assets/activities/actv2/1.jpg',
                    '/src/assets/activities/actv2/4.jpg'
                ],
                certificates: [
                    '/src/assets/activities/actv2/certf.png',
                    '/src/assets/activities/actv2/certf2.png'
                ],
                challenges: [
                    'Designing and calibrating line-following sensors (IR sensors)',
                    'Implementing obstacle detection and avoidance algorithms',
                    'Optimizing motor control for smooth and accurate movement',
                    'Real-time processing and decision-making logic',
                    'Power management and circuit stability',
                    'Working under time constraints in a competitive environment'
                ],
                toolsUsed: [
                    'Arduino UNO',
                    'IR Sensors (Line Detection)',
                    'Ultrasonic Sensors (Obstacle Detection)',
                    'DC Motors & Motor Drivers (L298N)',
                    'Breadboards & Circuit Design',
                    'C (Arduino Programming)',
                    'Power Supply & Battery Management'
                ],


            }
        },
        {
            id: 3,
            title: 'F-22 RC Model Build',
            description: 'Designed and built a remote-controlled F-22 Raptor model using Arduino, electronics, and cardboard.',
            image: '/src/assets/activities/actv3/1.PNG',
            tags: ['Engineering', 'Design', 'Problem Solving'],
            detailedContent: {
                achievement: 'DIY RC Aircraft Project',
                organization: 'Personal Hobby Project',
                eventType: 'Electronics & Model Building',
                description: `Built a functional remote-controlled F-22 Raptor fighter jet model from scratch using Arduino for flight control, electronic components for power and motor management, and cardboard for the airframe structure. This personal hobby project combined my passion for aviation, electronics, and hands-on engineering to create a fully functional RC aircraft. The project challenged me to think creatively about aerodynamics, weight distribution, electronic control systems, and structural design—all while working with accessible materials like cardboard.`,
                videoEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7129401094555725824?compact=1',
                challenges: [
                    'Designing aerodynamic wings and control surfaces with cardboard',
                    'Balancing weight distribution for stable flight',
                    'Integrating Arduino-based flight control system',
                    'Implementing remote control communication (RF signal transmission)',
                    'Motor selection and power management',
                    'Structural integrity while keeping the model lightweight'
                ],
                toolsUsed: [
                    'Arduino (Flight Controller)',
                    'Brushless Motors & ESC',
                    'RF Remote Control Module',
                    'LiPo Battery & Power Distribution',
                    'Servos for Control Surfaces',
                    'Cardboard & Crafting Tools',
                    'Hot Glue & Assembly Materials'
                ],
            }
        },

    ]

    const openModal = (activity) => {
        setSelectedActivity(activity)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedActivity(null)
        document.body.style.overflow = 'auto'
    }

    return (
        <section id="activities" className="section activities">
            <div className="container">
                <div className="section-title">
                    <h2>Activities & Personal Experiments</h2>
                    <p>Hands-on activities and experiments undertaken beyond my computer science curriculum.</p>
                </div>

                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <div
                            key={activity.id}
                            ref={el => activitiesRef.current[index] = el}
                            className="activity-card"
                            onClick={() => openModal(activity)}
                        >
                            <div className="activity-image">
                                <img src={activity.image} alt={activity.title} />
                                <div className="activity-overlay">
                                    <span className="view-details">View Details →</span>
                                </div>
                            </div>
                            <div className="activity-content">
                                <h3>{activity.title}</h3>
                                <p>{activity.description}</p>
                                <ul className="activity-tags">
                                    {activity.tags.map((tag, i) => (
                                        <li key={i}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activity Detail Modal */}
            {selectedActivity && (
                <div className="activity-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <img src={selectedActivity.image} alt={selectedActivity.title} />
                        </div>

                        <div className="modal-body">
                            <h2>{selectedActivity.title}</h2>

                            {selectedActivity.detailedContent ? (
                                <>
                                    <div className="achievement-badge">
                                        {selectedActivity.detailedContent.achievement}
                                    </div>

                                    <div className="detail-section">
                                        <h3>Event Details</h3>
                                        <p><strong>Organization:</strong> {selectedActivity.detailedContent.organization}</p>
                                        <p><strong>Event Type:</strong> {selectedActivity.detailedContent.eventType}</p>
                                    </div>

                                    <div className="detail-section">
                                        <h3>About</h3>
                                        <p>{selectedActivity.detailedContent.description}</p>
                                    </div>

                                    {selectedActivity.detailedContent.videoEmbed && (
                                        <div className="detail-section">
                                            <h3>Project Video</h3>
                                            <div className="video-container">
                                                <iframe
                                                    src={selectedActivity.detailedContent.videoEmbed}
                                                    height="399"
                                                    width="504"
                                                    frameBorder="0"
                                                    allowFullScreen=""
                                                    title="Embedded post"
                                                />
                                            </div>
                                        </div>
                                    )}


                                    {selectedActivity.detailedContent.certificate && (
                                        <div className="detail-section">
                                            <h3>Certificate</h3>
                                            <div className="certificate-container">
                                                <img src={selectedActivity.detailedContent.certificate} alt="Certificate" />
                                            </div>
                                        </div>
                                    )}

                                    {selectedActivity.detailedContent.certificates && (
                                        <div className="detail-section">
                                            <h3>Certificates</h3>
                                            <div className="certificates-grid">
                                                {selectedActivity.detailedContent.certificates.map((cert, i) => (
                                                    <div key={i} className="certificate-container">
                                                        <p className="certificate-label">
                                                            {i === 0 ? 'Edition 1 (2024)' : 'Edition 2 (2025)'}
                                                        </p>
                                                        <img
                                                            src={cert}
                                                            alt={`Certificate ${i + 1}`}
                                                            onClick={() => setLightboxImage(cert)}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedActivity.detailedContent.gallery && (
                                        <div className="detail-section">
                                            <h3>Project Gallery</h3>
                                            <div className="activity-gallery">
                                                {selectedActivity.detailedContent.gallery.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="gallery-item"
                                                        onClick={() => setLightboxImage(img)}
                                                    >
                                                        <img src={img} alt={`Project image ${i + 1}`} />
                                                        <div className="gallery-overlay">
                                                            <span>🔍 View Full Size</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}


                                    {selectedActivity.detailedContent.challenges && (
                                        <div className="detail-section">
                                            <h3>Challenge Categories</h3>
                                            <ul className="detail-list">
                                                {selectedActivity.detailedContent.challenges.map((challenge, i) => (
                                                    <li key={i}>{challenge}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedActivity.detailedContent.toolsUsed && (
                                        <div className="detail-section">
                                            <h3>Tools & Technologies Used</h3>
                                            <div className="tools-grid">
                                                {selectedActivity.detailedContent.toolsUsed.map((tool, i) => (
                                                    <span key={i} className="tool-tag">{tool}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedActivity.detailedContent.skills && (
                                        <div className="detail-section">
                                            <h3>Skills Demonstrated</h3>
                                            <div className="skills-grid">
                                                {selectedActivity.detailedContent.skills.map((skill, i) => (
                                                    <span key={i} className="skill-badge">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedActivity.detailedContent.outcome && (
                                        <div className="detail-section">
                                            <h3>Outcome & Impact</h3>
                                            <p>{selectedActivity.detailedContent.outcome}</p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p>{selectedActivity.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Image Lightbox */}
            {lightboxImage && (
                <div className="image-lightbox" onClick={() => setLightboxImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={lightboxImage} alt="Full size" />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Activities
