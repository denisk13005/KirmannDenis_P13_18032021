import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { editName } from "../../features/user"
import "./name.scss"
/**
 * Name and Edit Button
 * @returns {ReactElement}
 */
const Name = () => {
  const firstname = useSelector((state) => state.user.firstName)
  const lastname = useSelector((state) => state.user.lastName)
  const dispatch = useDispatch()
  return (
    <div className="name">
      <p>{`${firstname} ${lastname}`}</p>
      <button className="edit-button" onClick={() => dispatch(editName())}>
        Edit Name
      </button>
    </div>
  )
}

export default Name
