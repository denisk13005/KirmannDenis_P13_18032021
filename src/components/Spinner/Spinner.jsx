import React from "react"
import "./spinner.scss"
/**
 * Spinner
 * @returns {ReactElement}
 */
const Spinner = () => {
  return (
    <section className="spinnerContainer">
      <span className="loading">Loading</span>
      <span className="firstPoint">.</span>
      <span className="secondPoint">.</span>
      <span className="thirdPoint">.</span>
    </section>
  )
}

export default Spinner
