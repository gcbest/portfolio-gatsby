// import React, {useEffect} from 'react'

// const Navmenu = () => {
//     useEffect(() => {
//         window.addEventListener("scroll", handleNavChange)
//       })
    
//       let handleNavChange = () => {
//         let headerTopArea = document.getElementsByClassName("header-top-area")
//         if (window.scrollY > 100) {
//           headerTopArea[0].classList.add("menu-bg")
//         } else {
//           headerTopArea[0].classList.remove("menu-bg")
//         }
//       }

//       return (
//         <div className="mainmenu">
//         <div className="navbar navbar-nobg">
//           <div className="navbar-header">
//             <button
//               type="button"
//               className="navbar-toggle"
//               data-toggle="collapse"
//               data-target="navbar-collapse"
//             >
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//           </div>
//           <div className="navbar-collapse collapse">
//             <ul className="nav navbar-nav navbar-right">
//               <li className="active">
//                 <a className="smoth-scroll" href="#home">
//                   Home
//                   <div className="ripple-wrapper" />
//                 </a>
//               </li>
    
//               <li>
//                 <a className="smoth-scroll" href="#about">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a className="smoth-scroll" href="#service">
//                   Services
//                 </a>
//               </li>
//               {/* <li><a className="smoth-scroll" href="#work">Work</a></li>  */}
//               <li>
//                 <a className="smoth-scroll" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
// }



// export default Navmenu

import React, { useState } from "react"
import NavbarLinks from "./navbarlinks"
import styled from 'styled-components'

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navmenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navmenu
