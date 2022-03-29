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
    value.checked && localStorage.setItem("token", response.data.body.token)
    return response.data.body.token
  }
)

const authSlice = createSlice({
  //nom du slice
  name: "auth",
  //state initial
  initialState: {
    token: "",
    isLoaded: false,
  },
  reducers: {
    logout: (state, initialState) => {
      state = { token: "", isLoaded: false }
      return state
    },
  },
  extraReducers: {
    [fetchToken.pending]: () => {
      console.log("Pending")
    },
    [fetchToken.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully !")
      return { ...state, token: payload, isLoaded: true }
    },
    [fetchToken.rejected]: () => {
      console.log("Rejected !")
    },
  },
})

export const { logout, getToken } = authSlice.actions
export default authSlice.reducer
