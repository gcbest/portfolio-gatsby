import React from "react"
import PropTypes from "prop-types"

import Footer from '../components/footer';
import "../bootstrap/css/bootstrap.min.css"
import "../fonts/font-awesome.min.css"

import "../css/magnific-popup.css"
import "../css/style.css"
import "../css/responsive.css"

const Layout = ({ children }) => (
      <>
          <main>{children}</main>
          <Footer/>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
