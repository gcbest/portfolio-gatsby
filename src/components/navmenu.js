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
        <div className="mainmenu">
        <div className="navbar navbar-nobg">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a className="smoth-scroll" href="#home">
                  Home
                  <div className="ripple-wrapper" />
                </a>
              </li>
    
              <li>
                <a className="smoth-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoth-scroll" href="#service">
                  Services
                </a>
              </li>
              {/* <li><a className="smoth-scroll" href="#work">Work</a></li>  */}
              <li>
                <a className="smoth-scroll" href="#contact">
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
