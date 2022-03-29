import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDatas, updateUserDatas, abort } from "../../features/user"
import "./editUserName.scss"

const EditUserName = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstPlaceHolder, setFirstPlaceHolder] = useState("")
  const [lastPlaceHolder, setLastPlaceHolder] = useState("")

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  const save = (e) => {
    e.preventDefault()
    console.log("save")
    let datas = { firstName, lastName, token }
    console.log(datas)
    token && dispatch(updateUserDatas({ datas }))
    //200
    dispatch(fetchUserDatas(token))
  }
  const cancel = () => {
    console.log("cancel")
    setFirstName("")
    setLastName("")
    dispatch(abort())
  }
  let first = useSelector((state) => state.user.firstName)
  let last = useSelector((state) => state.user.lastName)
  useEffect(() => {
    setFirstPlaceHolder(first)
    setLastPlaceHolder(last)
  }, [first, last])
  return (
    <div className="editUserNameContainer">
      <div className="fieldContainer">
        <input
          type="text"
          id="firstName"
          placeholder={firstPlaceHolder}
          color="red"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
        />
        <input
          type="text"
          id="lastName"
          placeholder={lastPlaceHolder}
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
