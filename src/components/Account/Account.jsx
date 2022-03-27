import React from "react"
import "./account.scss"

const Account = ({ amount }) => {
  return (
    <div className="accountContainer">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{"balance or current"}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  )
}

export default Account
