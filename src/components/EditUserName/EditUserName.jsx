import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDatas, updateUserDatas, abort } from "../../features/user"
import "./editUserName.scss"
/**
 * For Change The UserName
 * @returns {ReactElement}
 */
const EditUserName = () => {
  //local state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstPlaceHolder, setFirstPlaceHolder] = useState("")
  const [lastPlaceHolder, setLastPlaceHolder] = useState("")

  const dispatch = useDispatch()

  //global state
  const token = useSelector((state) => state.auth.token)
  const updateStatus = useSelector((state) => state.user.status)
  const save = (e) => {
    let datas = { firstName, lastName, token }
    token && dispatch(updateUserDatas({ datas }))
    updateStatus === "200" ? dispatch(fetchUserDatas(token)) : dispatch(abort())
  }
  const cancel = () => {
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
