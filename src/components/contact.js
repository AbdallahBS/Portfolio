import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com'
import { useState } from 'react';
function Contact() {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending ...");
    
    emailjs.sendForm('service_35fj2qu', 'template_sfm8ans', e.target, 'VeWf9Wzc_Idf03Zqu')
      .then((result) => {
        console.log("sending sucess");
        
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error);
        console.log('hmmmm');
        
        setErrorMessage('There was an error sending your message.');
      });
  };

  return (
    <div className="section contact" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <MapContainer
        center={[37.0100, 11.01500]} // Your coordinates
        zoom={13}
        style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: -1 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.0100, 11.01500]}>
          <Popup>
            El Haouaria, Nabeul: 8045.
          </Popup>
        </Marker>
      </MapContainer>

      <div className="container" style={{ position: 'relative', overflow: 'visible' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              <form 
                name="contact" onSubmit={handleSubmit} >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input className="form-control" type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name *" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message"  value={formData.message} onChange={handleChange} placeholder="Message *" rows="7" required></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary">Send Message</button>
                </div>
              </form>
              {successMessage && <p>{successMessage}</p>}
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md" />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Phone :<br /> <span className="text-muted">+ (216) 20-580-395</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md" />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Address :<br /> <span className="text-muted">El Haouaria, Nabeul: 8045.</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md" />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email :<br /> <span className="text-muted">abdallahbenselam@gmail.com</span></h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
              <li className="social-item"><a className="social-link text-dark" href="https://www.facebook.com/bensalem.abdallah.524"><i className="ti-facebook" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-dark" href="https://www.linkedin.com/in/abdallahbensalem/"><i className="ti-linkedin" aria-hidden="true" /></a></li>
          <li className="social-item"><a className="social-link text-dark" href="https://hub.docker.com/u/abdallahbs">   <i class="fa-brands fa-docker"></i></a></li>
          <li className="social-item"><a className="social-link text-dark" href="https://github.com/AbdallahBS"><i className="ti-github" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        
 
    </div>
    
  );
}

export default Contact;
