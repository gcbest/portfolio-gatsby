import React, {useEffect} from 'react'
import { Link } from "gatsby"
import Menu from "./menu"

const Navmenu = () => {
    useEffect(() => {
        window.addEventListener("scroll", handleNavChange)
      })

      let childMenu = {}

      let handleNavChange = () => {
        let headerTopArea = document.getElementsByClassName("header-top-area")
        if (window.scrollY > 100) {
          headerTopArea[0].classList.add("menu-bg")
        } else {
          headerTopArea[0].classList.remove("menu-bg")
        }
      }

      const toggleMenu = () => childMenu.open()

      return (
        <div className="mainmenu">
        <div className="navbar navbar-nobg">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="navbar-collapse"
              onClick={() => toggleMenu()}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Menu ref={el => (childMenu = el)} />
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <Link className="smoth-scroll" to="/">
                  Home
                  <div className="ripple-wrapper" />
                </Link>
              </li>

              <li>
                <Link className="smoth-scroll" to="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="smoth-scroll" to="#service">
                  Services
                </Link>
              </li>
              {/* <li><Link className="smoth-scroll" to="#works">Works</Link></li>  */}
              <li>
                <Link className="smoth-scroll" to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Navmenu