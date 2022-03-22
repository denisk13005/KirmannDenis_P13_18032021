import React from "react"
import { useState } from "react"
import Account from "../../components/Account/Account"
import "./user.scss"

const User = () => {
  const [userName, setuserName] = useState("Tony Jarvis")
  return (
    <div className="userContainer">
      <div className="userContainer__header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Account />
      <Account />
      <Account />
    </div>
  )
}

export default User
