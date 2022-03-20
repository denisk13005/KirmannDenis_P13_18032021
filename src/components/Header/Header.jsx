import React from "react"
import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import SignIn from "../SignIn/SignIn"

import "./header.scss"

const Header = () => {
  return (
    <header>
      <img src={argentBankLogo} alt="bank logo" />
      <NavLink className="signIn" to="/signin">
        <i class="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </header>
  )
}

export default Header
