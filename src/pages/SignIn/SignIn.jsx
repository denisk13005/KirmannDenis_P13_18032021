import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchToken } from "../../features/auth"
import "./signIn.scss"

const SignIn = () => {
  const [username, setUsername] = useState(" ")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)

  const token = useSelector((state) => state.auth.token)
  console.log(token)

  let localStorage = JSON.parse(window.localStorage.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let value = { username, password, checked }
    dispatch(fetchToken({ value }))
  }

  const handleCheckbox = (e) => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    setUsername(localStorage.username)
    setPassword(localStorage.password)
  }, [localStorage.password, localStorage.username])
  
  useEffect(() => {
    if (token !== "" && token) {
      navigate("/profile")
    }
  }, [token, navigate])
  console.log(checked)
  return (
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
            <input onChange={handleCheckbox} type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>

          <input className="signInBtn" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default SignIn
