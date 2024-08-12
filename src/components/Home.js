
import React, { useState } from 'react';

import Contact from '../../src/components/contact';

function Home() {

  const blogPosts = [
    {
      id: 1,
      images: ['assets/imgs/new1.jpg'], // Single image
      title: 'Cybersecurity hackathon',
      author: 'Abdallah',
      likes: '14 on Linkedin',
      date: 'April 2024',
      content: 'I\'m thrilled to share my satisfaction in winning first place at the cybersecurity hackathon organized by the Higher Institute of Technological Studies of Kélibia',
      hashtag: '#ISETKélibia',
      readMoreLink :'/blog4'
    },
    {
      id: 2,
      images: ['assets/imgs/cert1.jpeg'], // Single image
      title: 'Développement Back End et APIs certification',
      author: 'Abdallah',
      likes: '+11 on Linkedin',
      date: 'July 30, 2024',
      content: 'I\'m excited to announce that I\'ve recently achieved a certification in Back End Development and APIs from freeCodeCamp.',
      link: 'https://www.freecodecamp.org/certification/Abdallah_bs/back-end-development-and-apis',
    },
    {
      id: 3,
      images: [
        'assets/imgs/robot1.jpg',
        'assets/imgs/robot2.jpg',
        'assets/imgs/robot3.jpeg',
        'assets/imgs/robot4.jpeg',
      ], // Multiple images
      title: 'Hackathon ISERobot 1.0 Tunis Science City',
      author: 'Admin',
      date: 'May 4/5, 2024',
      likes: '+10 on Linkedin',

      content: 'Une expérience exceptionnelle fut celle du hackathon de 24 heures sur les robots organisé par Item University à la Cité des Sciences.',
        readMoreLink :'/blog3'
     
    },
    
    {
      id: 4,
      images: ['assets/imgs/cert2.jpeg'], // Single image
      title: 'the Foundational C# with Microsoft certification',
      author: 'Abdallah',
      likes: '431',
      date: 'september 16, 2023',
      content: 'I have successfully earned the Foundational C# with Microsoft certification from freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/Abdallah_bs/foundational-c-sharp-with-microsoft',
    },
  ];
  
  
    const [visibleCount, setVisibleCount] = useState(3);
  
    const loadMore = () => {
      setVisibleCount(prevCount => prevCount + 3);
    };
  return (
   
   <div classname="App" data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
    
  <header className="header">
    <div className="container">
      <ul className="social-icons pt-3">
        <li className="social-item"><a className="social-link text-light" href="https://www.facebook.com/bensalem.abdallah.524"><i className="ti-facebook" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-light" href="https://www.linkedin.com/in/abdallahbensalem/"><i className="ti-linkedin" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://hub.docker.com/u/abdallahbs">   <i class="fa-brands fa-docker"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://github.com/AbdallahBS"><i className="ti-github" aria-hidden="true" /></a></li>
      </ul>  
      <div className="header-content ">
        {/*<h4 class="header-subtitle" >Hello, I am</h4>*/}  
        <h4 className="header-title">Ben Salem Abdallah</h4>
        <h6 className="header-mono">Junior Developer</h6>
        <a href="/cv.pdf" className="btn btn-outline-danger text-lowercase" download>
  <i className="icon-down-circled2" />Download My CV
</a>  
      </div>
  
    </div>
  </header>
  <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top={510}>
    <div className="container">
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">Resume</a>
          </li>
        </ul>
        <ul className="navbar-nav brand">
          <img src="assets/imgs/avatar2.jpg" alt className="brand-img" />
          <li className="brand-txt">
            <h5 className="brand-title">Abdallah Bensalem</h5>
            <div className="brand-subtitle">Junior developer</div>
          </li>
        </ul>
    
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
          <li className="nav-item last-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div id="about" className="row about-section">
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">About</h3>
        <span className="line mb-5" />
        <h5 className="mb-3">Software developer student | Junior developer</h5>
        <p className="mt-20">Junior Developer specializing in Information Systems Development, motivated to improve skills in both backend and frontend development as well as artificial intelligence. Always up-to-date with industry trends, I design innovative solutions and explore new techniques. Engaged in volunteering to broaden my expertise.
</p>
<a href="/cv.pdf" className="btn btn-outline-danger text-lowercase" download>
  <i className="icon-down-circled2" />Download My CV
</a>      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Personal Info</h3>
        <span className="line mb-5" />
        <ul className="mt40 info list-unstyled">
          <li><span>Birthdate</span> : 14/09/2003</li>
          <li><span>Email</span> : abdallahbenselam@gmail.com</li>
          <li><span>Phone</span> : + (216) 20 580 395</li>

          <li><span>Address</span> :  El Haouaria, Nabeul: 8045.</li>
        </ul>
        <ul className="social-icons pt-3">
          <li className="social-item"><a className="social-link" href="https://www.facebook.com/bensalem.abdallah.524"><i className="ti-facebook" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="https://www.linkedin.com/in/abdallahbensalem/"><i className="ti-linkedin" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link" href="https://hub.docker.com/u/abdallahbs">   <i class="fa-brands fa-docker"></i></a></li>

          <li className="social-item"><a className="social-link" href="https://github.com/AbdallahBS"><i className="ti-github" aria-hidden="true" /></a></li>
        </ul>  
      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">My Expertise</h3>
        <span className="line mb-5" />
        <div className="row">
          <div className="col-1 text-danger pt-1"><i class="fa-solid fa-server" /></div>
          <div className="col-10 ml-auto mr-3">
            <h6>Backend Programming</h6>
            <p className="subtitle"> Python, Java, C#, PHP</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1"><i class="fa-solid fa-mobile-button"/>
          </div>
          <div className="col-10 ml-auto mr-3">
            <h6>Mobile Development</h6>
            <p className="subtitle">React Native, Flutter</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1"><i class="fa-solid fa-database"/></div>
          <div className="col-10 ml-auto mr-3">
            <h6>Databases</h6>
            <p className="subtitle">MongoDB, Firebase, PostgreSQL</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1"><i class="fa-regular fa-window-maximize"/></div>
          <div className="col-10 ml-auto mr-3">
            <h6>Web Development</h6>
            <p className="subtitle">MERN, Symfony, Angular</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Resume Section*/}
  <section className="section" id="resume">
    <div className="container">
      <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Expertise</h4>
                <span className="line" />  
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2024 - Present</h6>
              <p>Development of an Attendance Management System</p>
              <p className="subtitle">Development of an attendance management system using facial recognition to facilitate the marking of attendance and absences through captures, utilizing Python, Node.js, and Firebase <a href='https://github.com/AbdallahBS/Attendance_System_Vision'>Link to view the project </a>
 </p>
              <hr />
              <h6 className="title text-danger">2024 (1 month)
              </h6>
              <p>Internship at Société KUBE KLOUDE</p>
              <p className="subtitle">Development of a dashboard to monitor the company’s services and facilitate communication with clients using the MERN stack. Also created a showcase platform to enhance the company’s visibility to the public using HUGO technology.
</p>
              <hr />
              <h6 className="title text-danger">2023-2024              </h6>
              <p>Development of an Educational Platform
              </p>
              <p className="subtitle">Designed and developed an educational platform for students at the University ISET Kelibia, consolidating all necessary educational resources.
</p>
<hr />
              <h6 className="title text-danger">2022-2023              </h6>
              <p>Internship at AMRSHOP 
              </p>
              <p className="subtitle">Designed and developed a product sales system integrated with a point-of-sale terminal to facilitate in-store sales.  <a href='https://github.com/AbdallahBS/mern-commerce'> 
              Link to view the project</a>
</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Education</h4>
                <span className="line" />  
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2021-2022</h6>
              <p>Baccalaureate in Computer Science
              </p>
              <p className="subtitle">Baccalaureate in Computer Science at Lycée El Houaria, 2022

</p>
              <hr />
              <h6 className="title text-danger">(In Progress)
              </h6>
              <p>Bachelor's in Information Technology
              </p>
              <p className="subtitle">Bachelor's in Information Technology, specializing in Information Systems Development</p>
              <hr />
              
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="pull-left">
                <h4 className="mt-2">Skills</h4>
                <span className="line" />  
              </div>
            </div>
            <div className="card-body pb-2">
  <div className="skill-item">React native &amp; Flutter</div>
  <div className="skill-item">Docker</div>
  <div className="skill-item">PHP</div>
  <div className="skill-item">SQL</div>
  <div className="skill-item">Python</div>
  <div className="skill-item">Java </div>
  <div className="skill-item">MERN </div>
</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="pull-left">
                <h4 className="mt-2">Languages</h4>
                <span className="line" />  
              </div>
            </div>
            <div className="card-body pb-2">
  <div className="language-skill">
    <h6 className="skill-label">English:</h6>
    <span className="skill-level">Intermediate</span>
  </div>
  <div className="language-skill">
    <h6 className="skill-label">French:</h6>
    <span className="skill-level">Intermediate</span>
  </div>
  <div className="language-skill">
    <h6 className="skill-label">Arabic:</h6>
    <span className="skill-level">Native</span>
  </div>
  <div className="language-skill">
    <h6 className="skill-label">Italian:</h6>
    <span className="skill-level">A1</span>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section bg-dark text-center">
    <div className="container">
      <div className="row text-center justify-content-center align-items-center text-center">
        <div className="col-md-6 col-lg-3">
          <div className="row ">
            <div className="col-5 text-right text-light border-right py-3">
              <div className="m-auto"><i className="ti-linkedin icon-xl" /></div>
            </div>
            <div className="col-7 text-left py-3">
              <h1 className="text-danger font-weight-bold font40">+350</h1>
              <p className="text-light mb-1">LinkedIn connections </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="row">
            <div className="col-5 text-right text-light border-right py-3">
              <div className="m-auto"><i className="ti-bar-chart icon-xl" /></div>
            </div>
            <div className="col-7 text-left py-3">
              <h1 className="text-danger font-weight-bold font40">03</h1>
              <p className="text-light mb-1">internships</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="row">
            <div className="col-5 text-right text-light border-right py-3">
              <div className="m-auto"><i className="ti-rss-alt icon-xl" /></div>
            </div>
            <div className="col-7 text-left py-3">
              <h1 className="text-danger font-weight-bold font40">+30</h1>
              <p className="text-light mb-1">open-source projects </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
  <section className="section" id="service">
    <div className="container">
      <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Services</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card mb-5">
            <div className="card-header has-icon">
              <i className="ti-vector text-danger" aria-hidden="true" />
            </div>
            <div className="card-body px-4 py-3">
              <h5 className="mb-3 card-title text-dark">Backend Development
              </h5>
              <p className="subtitle">In the realm of backend development, I specialize in crafting robust and scalable server-side solutions. With expertise in various programming languages and frameworks, such as Node.js, Express, Java, and Python, I design and implement secure and efficient APIs, as well as server architectures, ensuring that the backend infrastructure supports the needs of the application.

</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-5">
            <div className="card-header has-icon">
              <i className="ti-write text-danger" aria-hidden="true" />
            </div>
            <div className="card-body px-4 py-3">
              <h5 className="mb-3 card-title text-dark">
              App Development</h5>
              <p className="subtitle">creating cutting-edge mobile applications that cater to the diverse needs of users. With expertise in platforms like React Native and Flutter.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-5">
            <div className="card-header has-icon">
              <i className="ti-package text-danger" aria-hidden="true" />
            </div>
            <div className="card-body px-4 py-3">
              <h5 className="mb-3 card-title text-dark">Web Development
              </h5>
              <p className="subtitle">excel in building dynamic and scalable web applications using the MERN and MEAN stacks. With expertise in MongoDB, Express.js, React.js, and Node.js (for MERN), as well as Angular (for MEAN).</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-5">
            <div className="card-header has-icon">
              <i className="ti-map-alt text-danger" aria-hidden="true" />
            </div>
            <div className="card-body px-4 py-3">
              <h5 className="mb-3 card-title text-dark">Database Management
              </h5>
              <p className="subtitle">provide comprehensive database management services, including design, optimization, and maintenance. Whether working with SQL databases like PostgreSQL or NoSQL databases such as MongoDB.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-5">
            <div className="card-header has-icon">
              <i className="ti-bar-chart text-danger" aria-hidden="true" />
            </div>
            <div className="card-body px-4 py-3">
              <h5 className="mb-3 card-title text-dark">API Development and Integration
              </h5>
              <p className="subtitle">developing and integrating APIs that facilitate seamless communication between different software systems. I utilize tools like Postman for testing and documentation, ensuring that the APIs are secure, well-documented, and easy to use.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>

 {/* <section className="section bg-dark py-5">
    <div className="container text-center">
      <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
      <button className="btn bg-primary w-lg">Hire me</button>
    </div>
  </section>
  {/* Portfolio Section */}
  <section className="section bg-custom-gray" id="portfolio">
    <div className="container">
      <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>
      <div className="portfolio">
        <div className="filters">
          <a href="#" data-filter=".new" className="active">
            New 
          </a>
          <a href="#" data-filter=".advertising">
            Certificates
          </a>
         
          <a href="#" data-filter=".web">
            Web
          </a>
        </div>
        <div className="portfolio-container"> 
          <div className="col-md-6 col-lg-4  new">
            <div className="portfolio-item">
              <img src="assets/imgs/pres1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/web-1.jpg" />
                <div className="text-holder">
                  <h6 className="title"></h6>
                  <p className="subtitle">presentation on the importance of software testers</p>
                  <a href="/blog1" className="btn btn-primary text-lowercase">Consult</a>
                </div>
              </div>   
            </div>             
          </div>
          <div className="col-md-6 col-lg-4  new">
            <div className="portfolio-item">
              <img src="assets/imgs/vr1.png" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/web-2.jpg" />
                <div className="text-holder">
                  <h6 className="title"></h6>
                  <p className="subtitle">exceptional presentation on mixed reality and virtual mode</p>
                  <a href="/blog2" className="btn btn-primary text-lowercase">Consult</a>
                </div>
              </div> 
            </div>                         
          </div>
          <div className="col-md-6 col-lg-4 advertising ">
            <div className="portfolio-item">
              <img src="assets/imgs/cert1.jpeg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                         
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/advertising-2.jpg" />
                <div className="text-holder">
                  <h6 className="title">Developer Certification</h6>
                  <p className="subtitle">Back End Development and APIS</p>
                  <p className="text-light"> <a href='https://www.freecodecamp.org/certification/Abdallah_bs/back-end-development-and-apis' className="text-light bold-200">Verirify </a></p>
                </div>
              </div>    
            </div>              
          </div> 
          <div className="col-md-6 col-lg-4 new">
            <div className="portfolio-item">
              <img src="assets/imgs/isrobot1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/isrobot1.jpg" />
                <div className="text-holder">
                  <h6 className="title"></h6>
                  <p className="subtitle">Participation in the Iserobot 24-hour hackathon</p>
                  <a href="/blog3" className="btn btn-primary text-lowercase">Consult</a>
                </div>
              </div>
            </div>                                                     
          </div>
          <div className="col-md-6 col-lg-4 advertising"> 
            <div className="portfolio-item">
              <img src="assets/imgs/cert2.jpeg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                               
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/advertising-1.jpg" />
                <div className="text-holder">
                  <h6 className="title">Developer Certification</h6>
                  <p className="subtitle">Foundational C# with Microsoft</p>
                  <p className="text-light"> <a href='https://www.freecodecamp.org/certification/Abdallah_bs/foundational-c-sharp-with-microsoft' className="text-light bold-200">Verirify </a></p>

                </div>
              </div>
            </div>                                                       
          </div> 
  
          <div className="col-md-6 col-lg-4 advertising new">
            <div className="portfolio-item">
              <img src="assets/imgs/cert3.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />       
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/advertising-3.jpg" />
                <div className="text-holder">
                  <h6 className="title">Certificate of Participation</h6>
                  <p className="subtitle">Certificate of Participation in the isEROBOT 24-hour Hackathon</p>
                </div>
              </div>
            </div>                                                       
          </div> 
          <div className="col-md-6 col-lg-4 advertising new"> 
            <div className="portfolio-item">
              <img src="assets/imgs/cert4.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />            
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/advertising-4.jpg" />
                <div className="text-holder">
                  <h6 className="title">Certificate of Participation</h6>
                  <p className="subtitle">Certificate of Participation in the Cybersecurity Hackathon at ISET Kélibia.</p>
                </div>
              </div>
            </div>
          </div> 
         
          <div className="col-md-6 col-lg-4  new">
            <div className="portfolio-item">
              <img src="assets/imgs/new1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                        
              <div className="content-holder">
                <a className="img-popup" href="assets/imgs/branding-1.jpg" />
                <div className="text-holder">
                  <h6 className="title"></h6>
                  <p className="subtitle">Cybersecurity hackathon</p>
                  <a href="/blog4" className="btn btn-primary text-lowercase" >Consult</a>
                </div>
              </div> 
            </div>
          </div> 
         
      
         
         
        </div> 
      </div>  
    </div>            
  </section>
  {/* End of portfolio section */}
  
  <section className="section" id="blog">
      <div className="container">
        <h2 className="mb-5">Latest <span className="text-danger">News</span></h2>
        <div className="row">
          {blogPosts.slice(0, visibleCount).map(post => (
            <div className="blog-card" key={post.id}>
              <div className="img-holder">
                {post.images.length > 1 ? (
                  <div id={`carouselExampleIndicators${post.id}`} className="carousel slide" data-ride="carousel"  data-interval="3000">
                    <ol className="carousel-indicators">
                      {post.images.map((_, index) => (
                        <li
                          key={index}
                          data-target={`#carouselExampleIndicators${post.id}`}
                          data-slide-to={index}
                          className={index === 0 ? 'active' : ''}
                        ></li>
                      ))}
                    </ol>
                    <div className="carousel-inner">
                      {post.images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                    <a className="carousel-control-prev" href={`#carouselExampleIndicators${post.id}`} role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#carouselExampleIndicators${post.id}`} role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                ) : (
                  <img src={post.images[0]} alt={post.title} />
                )}
              </div>
              <div className="content-holder">
                <h6 className="title">{post.title}</h6>
                <p className="post-details">
                  <a href="#">{post.author}</a>
                  <a href="#"><i className="ti-heart text-danger" /> {post.likes}</a>
                  {post.comments && <a href="#"><i className="ti-comment" /> {post.comments}</a>}
                  {post.date && <a href="#"><i className="ti-timer" /> {post.date}</a>}
                </p>
                <p>{post.content}</p>
                {post.hashtag && <p><b>{post.hashtag}</b></p>}
                {post.link && <p><b><a href={post.link}>Link to verify</a></b></p>}
                {post.readMoreLink && (
          <a href={post.readMoreLink} className="read-more">
            Read more <i className="ti-angle-double-right" />
          </a>
        )}
              </div>
            </div>
          ))}
        </div>
        {visibleCount < blogPosts.length && (
          <button onClick={loadMore} className="btn bg-primary w-lg">Show More</button>
        )}
      </div>
    </section>
<Contact></Contact>



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

export default Home;
