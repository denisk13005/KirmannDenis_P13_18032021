// import axios from "axios"
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"

// // export const baseURL = "http://localhost:3001/api/v1"
// // export const getUserDatas = async (email, password) => {
// //   let tok = await axios
// //     .post(`${baseURL}/user/login`, {
// //       email,
// //       password,
// //     })
// //     .catch((err) => console.log(err))
// //   let res = await axios({
// //     method: "post",
// //     url: `${baseURL}/user/profile`,
// //     headers: {
// //       authorization: `Bearer ${tok.data.body.token}`,
// //     },
// //   }).catch((err) => console.log(err))
// //   return res.data.body
// // }

// // export const fetchToken = (email, password) => {
// //   axios
// //     .post(`${baseURL}/user/login`, {
// //       email,
// //       password,
// //     })
// //     .then((res) => {
// //       console.log(res.data.body.token)
// //       return res.data.body.token
// //     })

// //     .catch((err) => `getToken error ${err}`)
// // }
// // export const getUserDatas = (token) => {
// //   axios({
// //     method: "post",
// //     url: `${baseURL}/user/profile`,
// //     headers: {
// //       authorization: `Bearer ${token}`,
// //     },
// //   })
// //     .then((res) => {
// //       console.log(res)
// //       let data = res.data.body
// //       return data
// //     })
// //     .catch((err) => console.log(err))
// // }
