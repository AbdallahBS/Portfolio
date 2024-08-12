import React, { useEffect, useState } from "react";

function Blog4() {

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
  <header className="intro-header" style={{backgroundImage: 'url("assets/imgs/bgcyber1.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="post-heading">
            <h1>Cybersecurity hackathon</h1>
            <h2 className="subheading">presented by Abdallah Ben Salem</h2>
            <span className="meta"> April	 24, 2024 <i className="ti-location-pin"></i>
            ISET Kelibia</span>
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
          <p>

I had an exceptional experience participating in the cybersecurity hackathon organized by our institute, ISET Kélibia. I'm thrilled to announce that I won first place in this competition. It was a challenging and rewarding event that tested our skills and teamwork, and I’m incredibly proud of this achievement.
          </p>
         
          
         
          <img className="img-fluid" src="assets/imgs//hack2.jpg" alt />
              <br></br>
          <p>
          <br></br>
          The hackathon comprised several tasks, each designed to test different skills. Some tasks required the use of Linux, while others involved cryptography tools like Base64. We faced a total of 10 tasks, with each task carrying 10 points. Competing in this challenge were four groups, all striving to demonstrate their expertise and teamwork.</p>
          <br></br>
          <img className="img-fluid" src="assets/imgs//hackton1.jpg" alt />
       
          <p> <br></br>This event was a great opportunity to enhance my skills in the field of cybersecurity.
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

export default Blog4;
