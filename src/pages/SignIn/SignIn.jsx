import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectStatus } from "../../utils/selector"
import { toggleStatus } from "../../features/status"
import "./signIn.scss"
import { NavLink } from "react-router-dom"

const SignIn = () => {
  const [username, setUsername] = useState(" ")
  const [password, setPassword] = useState("")

  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  console.log(status.status)

  return (
    <div className="main">
      <div className="signInContainer">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input">
            <label htmlFor="usename">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <NavLink to="/user" onClick={() => dispatch(toggleStatus())}>
            <input className="signInBtn" type="submit" value="Sign In" />
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default SignIn
