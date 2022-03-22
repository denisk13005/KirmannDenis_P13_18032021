import React, { useEffect, useState } from "react"
import "./signIn.scss"

const SignIn = () => {
  const [username, setUsername] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handleSubmit = (e) => {
    e.preventDefault()
    //dispatch('loggin')
    //if(token){

    window.location = "/user"
    // }
    setPassword("")
    setUsername(" ")
  }
  useEffect(() => {
    setPassword("")
    setUsername(" ")
  }, [])
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
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <input className="signInBtn" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default SignIn
