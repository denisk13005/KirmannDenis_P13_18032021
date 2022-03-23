import { createSlice } from "@reduxjs/toolkit"

const statusSlice = createSlice({
  //nom du slice
  name: "status",
  //state initial
  initialState: {
    status: "disconnected",
  },
  reducers: {
    toggleStatus: (state) => {
      state.status === "disconnected"
        ? (state.status = "connected")
        : (state.status = "disconnected")
      return state
    },
  },
})
// export const { toggleStatus } = statusSlice.actions
const { actions, reducer } = statusSlice
export const { toggleStatus } = actions
export default reducer
