import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import SignIn from "../../pages/SignIn/SignIn"

import "./header.scss"

const Header = () => {
  const [logged, setLogged] = useState(true)
  const [userName, setUserName] = useState("Tony")
  //useSelector(logged,userName)

  const logOut = () => {
    //vider le local storage peut être
    window.location = "/"
  }
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
          <div className="logOut" onClick={logOut}>
            <i className="fa fa-sign-out"></i>
            <p>Sign Out</p>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
