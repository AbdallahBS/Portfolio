import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Contact() {
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
                name="contact" 
                method="POST" 
                data-netlify="true"
                action="/thank-you"  // Redirect to the thank-you page
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <input className="form-control" type="text" name="name" placeholder="Name *" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" name="email" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" placeholder="Message *" rows="7" required></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
