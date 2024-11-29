import React, { useEffect, useState } from "react";

function Blog2() {

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
  <header className="intro-header" style={{backgroundImage: 'url("assets/imgs/bgvr.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="post-heading">
            <h1> Exploring Mixed Reality and Virtual Mode: The Future of Immersive Technology</h1>
            <h2 className="subheading">presented by Abdallah Ben Salem</h2>
            <span className="meta"> January	 20, 2023 <i className="ti-location-pin"></i>
            The Higher Institute of Technological Studies of Kélibia</span>
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
          <p>Mixed Reality (MR): A blend of physical and digital worlds where physical and virtual elements coexist and interact in real-time. It merges real-world and virtual environments to create new visualizations.
          </p>
          <p>Virtual Mode (Virtual Reality - VR): A fully immersive digital environment that simulates real-world or fantastical experiences, isolating the user from the physical world.</p>

          <h2 className="section-heading">The Impact of Mixed Reality and Virtual Mode</h2>
          <p>Enhancing Human Experiences: MR and VR create new ways of interaction, making experiences more immersive and engaging.
Revolutionizing Industries: From education to healthcare, these technologies are transforming how professionals work, learn, and communicate.
Bridging the Gap: MR, in particular, helps bridge the gap between the real and digital worlds, offering practical solutions for real-world problems.</p>
          <div className="video-container">
                <video width="100%" controls   

      style={{ objectFit: 'cover' }}>
                  <source src="/My Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
          <h2 className="section-heading">Conclusion
          </h2>
          <p>Mixed Reality and Virtual Mode are not just technologies of the future; they are transforming how we experience the world today. As we continue to innovate, the possibilities for these immersive technologies are endless.</p>
         
        
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

export default Blog2;
