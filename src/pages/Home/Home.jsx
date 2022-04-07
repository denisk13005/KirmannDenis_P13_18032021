import React, { useState } from "react"
import bankTree from "../../assets/bank-tree.jpeg"
import bill from "../../assets/icon-money.png"
import msg from "../../assets/icon-chat.png"
import security from "../../assets/icon-security.png"
import "./home.scss"
import Spinner from "../../components/Spinner/Spinner"
import { useEffect } from "react"

const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000)

    return () => {
      clearTimeout()
    }
  }, [])

  return loading ? (
    <main id="homeContainer">
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
      <section className="features">
        <div className="feature">
          <img src={msg} alt="" />
          <h3>You are our #1 priority</h3>
          <p>
            Need to talk to a reprensentative ? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature">
          <img src={bill} alt="" />
          <h3>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature">
          <img src={security} alt="" />
          <h3>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  ) : (
    <Spinner />
  )
}

export default Home
