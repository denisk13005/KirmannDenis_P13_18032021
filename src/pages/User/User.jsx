import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../../components/Account/Account"
import EditUserName from "../../components/EditUserName/EditUserName"
import Name from "../../components/Name/Name"
import { fetchUserDatas } from "../../features/user"
import "./user.scss"

const User = () => {
  let firstName = useSelector((state) => state.user.firstName)
  let lastName = useSelector((state) => state.user.lastName)

  const editName = useSelector((state) => state.user.editName)

  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  editName === false && dispatch(fetchUserDatas(token))

  console.log(editName)
  return (
    <div className="userContainer">
      <div className="userContainer__header">
        <h1>
          Welcome back
          {!editName ? <Name /> : <EditUserName />}
        </h1>
      </div>
      <Account amount={"$2,082.79"} />
      <Account amount={"$10,928.42"} />
      <Account amount={"$184.30"} />
    </div>
  )
}

export default User
