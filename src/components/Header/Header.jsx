import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import { logout } from "../../features/status"
import SignIn from "../../pages/SignIn/SignIn"

import "./header.scss"

const Header = () => {
  //to SignIn
  const [logged, setLogged] = useState(false)
  //user LastName
  const [userName, setUserName] = useState("Tony")
  //take the state
  let user = useSelector((state) => state.user)

  const dispatch = useDispatch()
  //when the state status changed change logged to true
  useEffect(() => {
    user.status === "connected" ? setLogged(true) : setLogged(false)
  }, [user])

  return (
    <header>
      <NavLink to="/">
        <img src={argentBankLogo} alt="bank logo" />
      </NavLink>
      {!logged ? (
        <NavLink className="signIn" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      ) : (
        <div className="signOut">
          <i className="fa fa-user-circle"></i>
          <p>{userName}</p>
          <NavLink to="/">
            <div className="logOut" onClick={() => dispatch(logout())}>
              <i className="fa fa-sign-out"></i>
              <p>Sign Out</p>
            </div>
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Header
