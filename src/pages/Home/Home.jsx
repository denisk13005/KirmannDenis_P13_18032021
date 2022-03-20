import React from "react"
import bankTree from "../../assets/bank-tree.jpeg"
import "./home.scss"

const Home = () => {
  return (
    <section className="homeSection">
      <img src={bankTree} alt="plant" />
      <div className="textContainer">
        <h2>
          No fees.
          <br />
          No minimum deposit.
          <br />
          High interest rates.
        </h2>
        <p>
          Open a savings account with <br />
          Argent Bank today!
        </p>
      </div>
    </section>
  )
}

export default Home
