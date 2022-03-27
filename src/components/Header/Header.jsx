import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import argentBankLogo from "../../assets/argentBankLogo.png"
import { logout } from "../../features/auth"
import SignIn from "../../pages/SignIn/SignIn"

import "./header.scss"

const Header = () => {
  let user = useSelector((state) => state.userName)

  //to SignIn
  const [logged, setLogged] = useState(false)
  //user LastName
  const [userName, setUserName] = useState("")
  //take the state

  const dispatch = useDispatch()
  //when the state status changed change logged to true
  useEffect(() => {
    if (user) {
      setLogged(true)
      setUserName(user.firstName)
    } else {
      setLogged(false)
    }
  }, [user])
  console.log(user)
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
