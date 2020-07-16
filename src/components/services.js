import React from 'react'

const Services = () => (
  <section id="service" className="services-area section-padding">
    <div className="container"
      data-sal="slide-up"
      data-sal-delay="500"
      data-sal-duration="1000"
      data-sal-easing="easeInQuad"
    >
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>What I Offer</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {/* START SINGLE SERVICE DESIGN AREA */}
        <div className="col-md-4">
          <div
            className="single-service text-center wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <i className="fa fa-codepen" />
            <h2>Ideas</h2>
            <p>
              A unique approach to problems viewing them from both the
              business and tech angles.
            </p>
          </div>
        </div>
        {/* / END SINGLE SERVICE DESIGN AREA */}
        {/* START SINGLE SERVICE DESIGN AREA */}
        <div className="col-md-4">
          <div
            className="single-service text-center wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <i className="fa fa-pencil-square" />
            <h2>Design</h2>
            <p>
              Experience building user-friendly interfaces for both mobile
              and desktop.
            </p>
          </div>
        </div>
        {/* / END SINGLE SERVICE DESIGN AREA */}
        {/* START SINGLE SERVICE DESIGN AREA */}
        <div className="col-md-4">
          <div
            className="single-service text-center wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <i className="fa fa-laptop" />
            <h2>programming</h2>
            <p>
              Ability to implement current frameworks to provide solutions
              to problems.
            </p>
          </div>
        </div>

        {/* / END SINGLE SERVICE DESIGN AREA */}
      </div>
    </div>
  </section>
)

export default Services
