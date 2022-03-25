import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const statusSlice = createSlice({
  //nom du slice
  name: "user",
  //state initial
  initialState: {
    // status: "400",
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
// export const { toggleStatus } = statusSlice.actions
const { actions, reducer } = statusSlice
export const { login, logout, auth } = actions
export default reducer
