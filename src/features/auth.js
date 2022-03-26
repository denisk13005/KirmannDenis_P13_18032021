import { createSlice } from "@reduxjs/toolkit"

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
      state = action.payload
      return state
    },
    logout: (state) => {
      state = {}
      return state
    },
  },
})

export const { logout, getToken } = authSlice.actions
export default authSlice.reducer
