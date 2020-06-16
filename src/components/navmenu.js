import React, {useEffect} from 'react'

const Navmenu = () => {
    useEffect(() => {
        window.addEventListener("scroll", handleNavChange)
      })
    
      let handleNavChange = () => {
        let headerTopArea = document.getElementsByClassName("header-top-area")
        if (window.scrollY > 100) {
          headerTopArea[0].classList.add("menu-bg")
        } else {
          headerTopArea[0].classList.remove("menu-bg")
        }
      }

      return (
        <div class="mainmenu">
        <div class="navbar navbar-nobg">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <a class="smoth-scroll" href="#home">
                  Home
                  <div class="ripple-wrapper" />
                </a>
              </li>
    
              <li>
                <a class="smoth-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="smoth-scroll" href="#service">
                  Services
                </a>
              </li>
              {/* <li><a class="smoth-scroll" href="#work">Work</a></li>  */}
              <li>
                <a class="smoth-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}



export default Navmenu
