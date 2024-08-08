import React from 'react';

function ThankYou() {
  return (
    <div className="section thank-you" id="thank-you">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="thank-you-title">Thank You!</h2>
            <p className="thank-you-message">Your message has been sent successfully. We will get back to you shortly.</p>
            <a href="/">Go back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
