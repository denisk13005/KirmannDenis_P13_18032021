import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { baseURL } from "../utils/axios"

export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  async ({ value }) => {
    let response = await axios.post(`${baseURL}/user/login`, {
      email: value.username,
      password: value.password,
    })
    console.log(response.data.body.token)
    return response.data.body.token
  }
)

const authSlice = createSlice({
  //nom du slice
  name: "auth",
  //state initial
  initialState: {
    username: "tony@stark.com",
    password: "password123",
    token: "",
    isLoaded: false,
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload
      return state
    },
    logout: (state) => {
      state = {}
      return state
    },
  },
  extraReducers: {
    [fetchToken.pending]: () => {
      console.log("Pending")
    },
    [fetchToken.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully !")
      return { ...state, auth: payload }
    },
    [fetchToken.rejected]: () => {
      console.log("Rejected !")
    },
  },
})

export const { logout, getToken } = authSlice.actions
export default authSlice.reducer
