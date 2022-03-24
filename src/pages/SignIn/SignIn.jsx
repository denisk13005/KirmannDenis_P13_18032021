import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectStatus } from "../../utils/selector"
import { login } from "../../features/status"
import "./signIn.scss"
import { NavLink } from "react-router-dom"
import User from "../User/User"
import { getToken, getUser } from "../../utils/axios"

const SignIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [path, setPath] = useState("")

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  console.log(username)
  console.log(password)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("click")
    dispatch(login())
    console.log(username, "//", password)
    let token = await getToken(username, password)
    console.log(token)
    let user = getUser(token)

    console.log(user)
  }

  return (
    <>
      {user.status === "connected" ? (
        <User />
      ) : (
        <div className="main">
          <div className="signInContainer">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
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

              <input className="signInBtn" type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SignIn
