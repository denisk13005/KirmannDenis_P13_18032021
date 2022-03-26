import React from "react"
import { useState } from "react"
import "./editUserName.scss"

const EditUserName = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const save = (e) => {
    e.preventDefault()
    console.log("save")

    // dispatch(put)
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
        />
        <input
          type="text"
          id="firstName"
          placeholder="Jarvis"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
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
