import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const statusSlice = createSlice({
  //nom du slice
  name: "user",
  //state initial
  initialState: {
    status: "400",
  },
  reducers: {
    auth: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state = {}
      return state
    },
  },
})

export const { login, logout, auth } = statusSlice.actions
export default statusSlice.reducer
