import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const baseURL = "http://localhost:3001/api/v1"
/**
 * Async function for fetch user token
 * @returns {String} userToken
 */
export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  async ({ value }) => {
    let response = await axios.post(`${baseURL}/user/login`, {
      email: value.username,
      password: value.password,
    })
    if (value.checked) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: value.username, password: value.password })
      )
    }

    return response.data.body.token
  }
)

/**
 * Slice auth of redux store
 * @return {Object} redux store modified
 */

const authSlice = createSlice({
  //nom du slice
  name: "auth",
  //state initial
  initialState: {
    token: "",
    isLoaded: false,
  },
  reducers: {
    logout: (state) => {
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

export const { logout } = authSlice.actions
export default authSlice.reducer
