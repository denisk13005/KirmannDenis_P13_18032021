import React from "react"
import { useState } from "react"
import Account from "../../components/Account/Account"
import "./user.scss"

const User = () => {
  const [userName, setUserName] = useState("Tony Jarvis")
  const [editName, setEditName] = useState(false)
  const [newName, setNewName] = useState()
  const editUserName = () => {
    setEditName(true)
  }
  console.log(editName)
  return (
    <div className="userContainer">
      <div className="userContainer__header">
        <h1>
          Welcome back
          <br />
          {!editName ? `${userName}` : `${(<Account />)}`}
        </h1>
        <button className="edit-button" onClick={editUserName}>
          Edit Name
        </button>
      </div>
      <Account />
      <Account />
      <Account />
    </div>
  )
}

export default User
