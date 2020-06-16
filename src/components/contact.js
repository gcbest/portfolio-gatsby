import React from 'react'

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
          <form
            id="contactForm"
            class="contact-form shake"
            data-toggle="validator"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group wow fadeInUp" data-wow-delay="0.2s">
                  <div class="controls">
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="Name"
                      required
                      data-error="Please enter your name"
                    />
                    <div class="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group wow fadeInUp" data-wow-delay="0.2s">
                  <div class="controls">
                    <input
                      type="email"
                      class="email form-control"
                      id="email"
                      placeholder="Email"
                      required
                      data-error="Please enter your email"
                    />
                    <div class="help-block with-errors" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group wow fadeInUp" data-wow-delay="0.4s">
                  <div class="controls">
                    <input
                      type="text"
                      id="msg_subject"
                      class="form-control"
                      placeholder="Subject"
                      required
                      data-error="Please enter your message subject"
                    />
                    <div class="help-block with-errors" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group wow fadeInUp" data-wow-delay="0.6s">
                  <div class="controls">
                    <textarea
                      id="message"
                      rows="7"
                      placeholder="Message"
                      class="form-control"
                      required
                      data-error="Write your message"
                    />
                    <div class="help-block with-errors" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button
                  type="submit"
                  id="submit"
                  class="btn btn-effect wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <i class="fa fa-check" /> Send Message
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div id="msgSubmit" class="h3 text-center hidden" />
                <div class="clearfix" />
              </div>
            </div>
          </form>
          {/* End Contact Form  */}
        </div>
      </div>
    </div>
  </section>
)

export default Contact
