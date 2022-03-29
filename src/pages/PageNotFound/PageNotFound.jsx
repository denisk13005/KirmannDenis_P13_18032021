import React from "react"
import { NavLink } from "react-router-dom"
import "./pageNotFound.scss"

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <NavLink to={"/signin"}>
        <p>Please Login </p>
      </NavLink>
    </div>
  )
}

export default PageNotFound
