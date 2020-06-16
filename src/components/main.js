import React from 'react'
import Particles from "react-particles-js"
import Navmenu from './navmenu';
import {particlesParams} from '../utils'

const Main = () => (
    <header id="home" class="welcome-area">
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            {/* START LOGO DESIGN AREA  */}
            <div class="logo">
              <a class="smoth-scroll" href="#home">
                Godfrey
              </a>
            </div>
            {/* END LOGO DESIGN AREA  */}
          </div>
          <div class="col-sm-9">
          <Navmenu/>            
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-image-area" data-stellar-background-ratio="0.6">
      <div id="particles-js" />
      <Particles
        style={{ position: "absolute", top: "0", left: "0" }}
        width="100%"
        height="100%"
        params={particlesParams}
      />
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="header-text">
                  <h2 class="wow fadeInUp" data-wow-delay="0.4s">
                    Godfrey Best
                  </h2>
                  <p class="wow fadeInUp" data-wow-delay="0.8s">
                    Software Engineer
                  </p>
                  <a
                    class="home-btn smoth-scroll wow fadeInUp"
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
