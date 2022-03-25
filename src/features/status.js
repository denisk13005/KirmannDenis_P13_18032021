import { createSlice } from "@reduxjs/toolkit"

const statusSlice = createSlice({
  //nom du slice
  name: "user",
  //state initial
  initialState: {},
  reducers: {
    login: (state) => {
      state.status = "connected"
      state.name = "tony"
      return state
    },
    logout: (state) => {
      state = {}
      return state
    },
  },
})
// export const { toggleStatus } = statusSlice.actions
const { actions, reducer } = statusSlice
export const { login, logout } = actions
export default reducer
