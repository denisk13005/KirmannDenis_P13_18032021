import React from "react"
import { useState } from "react"
import "./editUserName.scss"

const EditUserName = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const save = () => {
    console.log("save")
    // dispatch(put)

    window.location = "/user"
  }

  const cancel = () => {
    console.log("cancel")

    window.location = "/user"
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
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          id="firstName"
          placeholder="Jarvis"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
