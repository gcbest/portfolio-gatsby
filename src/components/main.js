import React from 'react'
import Particles from "react-particles-js"
import Navmenu from './navmenu';
import {particlesParams} from '../utils'

const Main = () => (
    <header id="home" className="welcome-area">
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            {/* START LOGO DESIGN AREA  */}
            <div className="logo">
              <a className="smoth-scroll" href="#home">
                Godfrey
              </a>
            </div>
            {/* END LOGO DESIGN AREA  */}
          </div>
          <div className="col-sm-9">
          <Navmenu/>            
          </div>
        </div>
      </div>
    </div>
    <div className="welcome-image-area" data-stellar-background-ratio="0.6">
      <div id="particles-js" />
      <Particles
        style={{ position: "absolute", top: "0", left: "0" }}
        width="100%"
        height="100%"
        params={particlesParams}
      />
      <div className="display-table">
        <div className="display-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-text">
                  <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                    Godfrey Best
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.8s">
                    Software Engineer
                  </p>
                  <a
                    className="home-btn smoth-scroll wow fadeInUp"
                    data-wow-delay="1.2s"
                    href="#about"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Main
