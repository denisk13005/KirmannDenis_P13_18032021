import React from "react"
import { useState } from "react"
import Account from "../../components/Account/Account"
import EditUserName from "../../components/EditUserName/EditUserName"
import "./user.scss"

const User = () => {
  const [firstName, setFirstName] = useState("Tony")
  const [lastName, setLastName] = useState(" Jarvis")
  const [editName, setEditName] = useState(false)
  const [newName, setNewName] = useState()
  //useSelector(firstname, lastname)

  const editUserName = (e) => {
    setEditName(true)
    document.querySelector(".edit-button").style.display = "none"
  }
  console.log(editName)
  return (
    <div className="userContainer">
      <div className="userContainer__header">
        <h1>
          Welcome back
          <br />
          {!editName ? firstName + lastName : <EditUserName />}
        </h1>
        <button className="edit-button" onClick={editUserName}>
          Edit Name
        </button>
      </div>
      <Account amount={"$2,082.79"} />
      <Account amount={"$10,928.42"} />
      <Account amount={"$184.30"} />
    </div>
  )
}

export default User
