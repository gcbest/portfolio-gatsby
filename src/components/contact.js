import React from 'react';
import Form from './form';

const Contact = () => (
    <section id="contact" class="contact-me-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h2>Let's talk!</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          {/* Start Contact Form  */}
          <Form/>
          {/* End Contact Form  */}
        </div>
      </div>
    </div>
  </section>
)

export default Contact
