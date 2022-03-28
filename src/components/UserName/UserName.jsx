import React from "react"
import "./userName.scss"
import { useDispatch, useSelector } from "react-redux"
import { getUserDatas } from "../../features/user"

const UserName = () => {
  let firstName = useSelector((state) => state.user.firstName)
  let lastName = useSelector((state) => state.user.lastName)
  const dispatch = useDispatch()

  return (
    <div className="userName">
      <p>{`${firstName} ${lastName}`}</p>
      <button className="edit-button" onClick={() => dispatch(getUserDatas())}>
        Edit Name
      </button>
    </div>
  )
}

export default UserName
