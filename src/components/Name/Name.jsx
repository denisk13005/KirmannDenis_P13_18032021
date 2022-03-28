import React from "react"
import { useSelector } from "react-redux"

const Name = () => {
  const firstname = useSelector((state) => state.user.firstName)
  const lastname = useSelector((state) => state.user.lastName)
  return (
    <div className="name">
      <p>{`${firstname} ${lastname}`}</p>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}

export default Name
