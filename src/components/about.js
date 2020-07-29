import React from "react"
import Image from './image'

const About = () => (
  <section id="about" className="about-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {/* START ABOUT IMAGE AREA  */}
          <div className="about-image wow fadeInUp" data-wow-delay="0.2s">
            <Image/>
          </div>
          <div
            className="social-links text-center wow fadeIn"
            data-wow-delay="0.4s"
          >
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/godfreybest">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/gcbest">
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
          {/* / END ABOUT IMAGE AREA  */}
        </div>
        <div className="col-md-8">
          {/* START ABOUT TEXT AREA  */}
          <div className="about-text">
            <h2 data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="500"
              data-sal-easing="easeInQuad">
              About Me
              </h2>
            <p data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="500"
              data-sal-easing="easeInQuad">
              As a life-long learner and highly motivated individual I spend
              much of my free time reading about and practicing web
              development.
              </p>
            <p data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="1000"
              data-sal-easing="easeInQuad">
              I am passionate about building tools which enable people to
              better themselves.
              </p>
            <p data-sal="slide-up"
              data-sal-delay="700"
              data-sal-duration="1000"
              data-sal-easing="easeInQuad">
              I'm also deeply fascinated by how technology enables us to
              store and transmit vast amounts of information in fractions of a
              second. I work daily to understand how this process works and to
              gain the skills needed to add something meaningful to this
              process.
              </p>
            <p data-sal="slide-up"
              data-sal-delay="1000"
              data-sal-duration="1000"
              data-sal-easing="easeInQuad">
              I enjoy most activities which are competitive and repetitive,
              which is what drew me to web development. The feeling of
              iteratively improving at a certain task is something that
              motivates me in any challenge I undertake.
              </p>
          </div>
          {/* / END ABOUT TEXT AREA  */}
        </div>
      </div>
    </div>
  </section>
)

export default About
