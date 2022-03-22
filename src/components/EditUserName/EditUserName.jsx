import React from "react"
import "./editUserName.scss"

const EditUserName = () => {
  return (
    <div className="editUserNameContainer">
      <div className="fieldContainer">
        <input type="text" id="lastName" />
        <input type="text" id="firstName" />
      </div>
      <div className="btnsContainer">
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default EditUserName
