import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./account.scss"

const Account = ({ amount }) => {
  const [balance, setbalance] = useState("balance or current")
  //useSelector(userDatas)

  return (
    <div className="accountContainer">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  )
}

export default Account
