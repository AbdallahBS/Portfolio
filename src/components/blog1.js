import React, { useEffect, useState } from "react";

function Blog1() {

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
  <header className="intro-header" style={{backgroundImage: 'url("assets/imgs/bgtester.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="post-heading">
            <h1>An exceptional presentation on the importance of software testers</h1>
            <h2 className="subheading">presented by Abdallah Ben Salem</h2>
            <span className="meta"> August 24, 2023</span>
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
          <p>Software testing is a critical aspect of software development that ensures the delivery of high-quality, reliable, and efficient software. It involves evaluating and verifying that a software application functions as intended and meets the specified requirements.</p>
          <p>is a process used to identify and correct defects or issues in software applications. The goal of software testing is to ensure that the software meets specified requirements and functions correctly under various conditions. This process involves evaluating software to verify that it performs as expected, and to find and fix any bugs or inconsistencies.</p>

          <h2 className="section-heading">Types of Software Testing</h2>
          <p>In my presentation, I focus on the types of software testing. Let's describe the importance and role of each one by watching this video.</p>
          <div className="video-container">
                <video width="100%" controls>
                  <source src="/My Video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
          <h2 className="section-heading">Testing Techniques
          </h2>
          <p>
          Software testing is a systematic process used to evaluate the functionality, performance, and reliability of a software application. Its primary goal is to identify defects, ensure that the software meets the specified requirements, and deliver a high-quality product. The process involves various techniques and phases, including unit testing, integration testing, system testing, and acceptance testing,</p>
          <a href="#">
          <img className="img-fluid" src="assets/imgs/blog11.jpg" alt />
          </a>
          <span className="caption text-muted"></span>
          <p>each focusing on different aspects of the software. Testing can be conducted manually, with testers exploring the application and verifying its behavior, or through automated tools that execute predefined test cases and scripts. Effective software testing not only helps in detecting and fixing issues early in the development cycle but also ensures that the software performs well under different conditions, adheres to security standards, and provides a seamless user experience. By thoroughly testing the software, organizations can improve product quality, enhance user satisfaction, and reduce the risk of post-release defects.</p>
         
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

export default Blog1;
