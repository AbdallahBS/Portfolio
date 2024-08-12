import React, { useEffect, useState } from "react";

function Blog3() {

    const [navbarBackground, setNavbarBackground] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
  
        if (scrollPosition > 0.8 * viewportHeight) {
          setNavbarBackground(true);
        } else {
          setNavbarBackground(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
 
 <div>
  
  <nav
        className={`navbar navbar-expand-lg fixed-top ${
          navbarBackground ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Return to Home &nbsp;&nbsp;&nbsp;&nbsp;<i className="ti-home"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto"></ul>
        
          </div>
        </div>
      </nav>
  {/* Page Header */}
  {/* Set your background image for this header on the line below. */}
  <header className="intro-header" style={{backgroundImage: 'url("assets/imgs/iserobotbg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="post-heading">
            <h1>Participation in the Iserobot 24-hour hackathon</h1>
            <h2 className="subheading">presented by Abdallah Ben Salem</h2>
            <span className="meta"> May	 4/5, 2024 <i className="ti-location-pin"></i>
            Tunis Science City</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Post Content */}
  <article>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <p>An exceptional experience was the 24-hour robotics hackathon organized by Iteam University at the Cité des Sciences. We had the honor of ranking among the top ten teams out of a total of 42 participants, representing various ISETs at this event. I would like to express my gratitude to all the teams involved in this fantastic initiative, which allowed me to explore the exciting world of robotics.
          </p>
         
          
         
          <div className="video-container">
                <video width="100%" controls   

      style={{ objectFit: 'cover' }}>
                  <source src="/isrobot.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <br></br>
          <p>
          I am also grateful to our institution, the Higher Institute of Technological Studies of Kélibia, for its support and encouragement to participate in this inspiring competition.</p>
          <br></br>
          <img className="img-fluid" src="assets/imgs//cert3.jpg" alt />
          <h2 className="section-heading">Objective 
          </h2>
          <p>The goal of this hackathon was to design and develop a robot capable of detecting obstacles and following a line using infrared and ultrasonic sensors. To meet these challenges effectively, we programmed the robot in the C language. We were given 24 hours to accomplish this task, after which we presented the robot in the amphitheater for evaluation and troubleshooting.
          For more information about the hackathon, please refer to <a href="/iserobot.pdf" download>
          this document
    </a>.
          </p>
        </div>
        
      </div>

    </div>
    
  </article>
  <hr />
  {/* Footer */}
  <footer>
    <div className="container">
      <div className="row text-center justify-content-center align-items-center text-center" >
        <div >
         
          
        <ul className="social-icons pt-3 " >
          <li className="social-item"><a className="social-link" href="https://www.facebook.com/bensalem.abdallah.524"><i className="ti-facebook" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="https://www.linkedin.com/in/abdallahbensalem/"><i className="ti-linkedin" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="https://hub.docker.com/u/abdallahbs">   <i class="fa-brands fa-docker"></i></a></li>

          <li className="social-item"><a className="social-link" href="https://github.com/AbdallahBS"><i className="ti-github" aria-hidden="true" /></a></li>
        </ul>  
          <p className="copyright text-muted">© Ben Salem Abdallah - 2023-2024</p>
        </div>
      </div>
    </div>
  </footer>
  <footer className="footer py-3">
    <div className="container">
      <p className="small mb-0 text-light">
        © Ben Salem Abdallah - <span className="text-danger" title="Bootstrap 4 Themes and Dashboards">2023-2024</span>
      </p>
    </div>
  </footer>
</div>

    
  );
}

export default Blog3;
