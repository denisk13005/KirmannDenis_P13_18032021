import React from "react"
import "./editUserName.scss"

const EditUserName = () => {
  return (
    <div className="editUserNameContainer">
      <div className="fieldContainer">
        <input type="text" id="lastName" placeholder="Tony" color="red" />
        <input type="text" id="firstName" placeholder="Jarvis" />
      </div>
      <div className="btnsContainer">
        <button className="btn saveBtn">Save</button>
        <button className="btn cancelBtn">Cancel</button>
      </div>
    </div>
  )
}

export default EditUserName
