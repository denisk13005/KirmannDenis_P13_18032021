import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDatas, updateUserDatas } from "../../features/user"
import "./editUserName.scss"

const EditUserName = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  const navigate = useNavigate()
  const save = (e) => {
    e.preventDefault()
    console.log("save")
    let datas = { firstName, lastName, token }
    console.log(datas)
    token && dispatch(updateUserDatas({ datas }))
    dispatch(fetchUserDatas(token))
    document.querySelector(".editUserNameContainer").style.display = "none"
    navigate("/user")
    document.querySelector(".edit-button").style.display = "inline-block"
    //seteditname
  }
  const cancel = () => {
    console.log("cancel")
    setFirstName("")
    setLastName("")
  }
  return (
    <div className="editUserNameContainer">
      <div className="fieldContainer">
        <input
          type="text"
          id="lastName"
          placeholder="Tony"
          color="red"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
        />
        <input
          type="text"
          id="firstName"
          placeholder="Jarvis"
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
        />
      </div>
      <div className="btnsContainer">
        <button className="btn saveBtn" onClick={save}>
          Save
        </button>
        <button className="btn cancelBtn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default EditUserName
