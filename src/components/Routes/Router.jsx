import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../../pages/Dashboard/Dashboard"
import Home from "../../pages/Home/Home"
import Header from "../Header/Header"
import SignIn from "../SignIn/SignIn"
import Footer from "../Footer/Footer"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
