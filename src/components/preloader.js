import React, { useEffect } from "react"

const Preloader = () => {
  let fadeOutPreloader = () => {
    var fadeTarget = document.querySelector(".preloader")
    var fadeEffect = setInterval(function() {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1
      } else {
        fadeTarget.style.display = "none"
        clearInterval(fadeEffect)
      }
    }, 100)
  }

  useEffect(() => {
    window.addEventListener("load", fadeOutPreloader)
  })

  return (
    <div className="preloader">
      <div className="status">
        <div className="status-mes" />
      </div>
    </div>
  )
}

export default Preloader
