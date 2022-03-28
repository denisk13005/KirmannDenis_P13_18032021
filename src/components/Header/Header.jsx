import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import { logout } from "../../features/auth"

import "./header.scss"

const Header = () => {
  let firstname = useSelector((state) => state.user.firstName)
  let logged = useSelector((state) => state.auth.isLoaded)

  //to SignIn
  //user LastName
  //take the state

  const dispatch = useDispatch()
  //when the state status changed change logged to true

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
          <p>{firstname}</p>
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
