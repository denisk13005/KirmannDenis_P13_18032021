import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../../components/Account/Account"
import EditUserName from "../../components/EditUserName/EditUserName"
import { fetchUserDatas } from "../../features/user"
import "./user.scss"

const User = () => {
  let firstName = useSelector((state) => state.user.firstName)
  let lastName = useSelector((state) => state.user.lastName)

  const [editName, setEditName] = useState(false)

  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  const editUserName = (e) => {
    setEditName(true)
    document.querySelector(".edit-button").style.display = "none"
  }
  token && dispatch(fetchUserDatas(token))

  console.log(editName)
  return (
    <div className="userContainer">
      <div className="userContainer__header">
        <h1>
          Welcome back
          <br />
          {!editName ? `${firstName} ${lastName}` : <EditUserName />}
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
