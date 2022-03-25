import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectStatus } from "../../utils/selector"
import { auth } from "../../features/status"
import "./signIn.scss"
import { NavLink } from "react-router-dom"
import User from "../User/User"
import { fetchToken, getUserDatas } from "../../utils/axios"
import axios from "axios"

const SignIn = () => {
  const [username, setUsername] = useState("tony@stark.com")
  const [password, setPassword] = useState("password123")
  const [token, setToken] = useState("")
  const [userDatas, setUserDatas] = useState("")
  const [path, setPath] = useState()

  const isAuth = useSelector((state) => state.user.user)
  console.log(isAuth)

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUserDatas(await getUserDatas(username, password))
  }
  if (userDatas) {
    dispatch(auth(userDatas))
  }
  console.log(userDatas)
  return (
    <>
      {isAuth ? (
        <User />
      ) : (
        <div className="main">
          <div className="signInContainer">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
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
