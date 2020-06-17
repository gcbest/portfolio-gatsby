import React from 'react';
import Form from './form';

const Contact = () => (
    <section id="contact" className="contact-me-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>Let's talk!</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Start Contact Form  */}
          <Form/>
          {/* End Contact Form  */}
        </div>
      </div>
    </div>
  </section>
)

export default Contact
