import axios from "axios"
import { useSelector } from "react-redux"

const baseURL = "http://localhost:3001/api/v1"
export const getToken = (email, password) => {
  axios
    .post(`${baseURL}/user/login`, {
      email,
      password,
    })
    .then((res) => {
      let token = res.data.body.token
      console.log(token)
      return token
    })
    .catch((err) => `getToken error ${err}`)
}
export const getUser = (token) => {
  axios({
    method: "post",
    url: `${baseURL}/user/profile`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res)
      let data = res.data.body
      return data
    })
    .catch((err) => console.log(err))
}
