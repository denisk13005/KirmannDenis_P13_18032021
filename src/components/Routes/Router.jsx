import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from "../../pages/User/User"
import Home from "../../pages/Home/Home"
import Header from "../Header/Header"
import SignIn from "../../pages/SignIn/SignIn"
import Footer from "../Footer/Footer"
import PageNotFound from "../../pages/PageNotFound/PageNotFound"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
