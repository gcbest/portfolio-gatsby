import React from 'react'

const Footer = () => (
    <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="wow fadeInUp" data-wow-delay="1s">
            &copy; {new Date().getFullYear()} Godfrey Best | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
