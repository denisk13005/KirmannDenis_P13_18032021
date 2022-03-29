import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../../components/Account/Account"
import EditUserName from "../../components/EditUserName/EditUserName"
import Name from "../../components/Name/Name"
import { fetchUserDatas } from "../../features/user"
import PageNotFound from "../PageNotFound/PageNotFound"
import Spinner from "../../components/Spinner/Spinner"
import "./user.scss"

/**
 *userDashboard
 * @returns {ReactElement}
 */
const User = () => {
  const editName = useSelector((state) => state.user.editName)

  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  if (editName === false && token !== "") {
    console.log("here")
    dispatch(fetchUserDatas(token))
  }
  console.log("token  ", token)
  let loading = !token
  console.log("loading  ", loading)

  return !loading ? (
    token === "" ? (
      <PageNotFound />
    ) : (
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
  ) : (
    <Spinner />
  )
}

export default User
