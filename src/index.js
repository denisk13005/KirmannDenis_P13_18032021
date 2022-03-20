import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Dashboard from "./pages/Dashboard/Dashboard"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
ReactDOM.render(
  <React.StrictMode>
    <App />
    <PageNotFound />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
)
