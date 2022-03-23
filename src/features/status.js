import { createSlice } from "@reduxjs/toolkit"

const statusSlice = createSlice({
  //nom du slice
  name: "status",
  //state initial
  initialState: {
    status: "disconnected",
  },
  reducers: {
    connectedStatus: (state) => {
      state.status = "connected"
      return state
    },
    disconnectedStatus: (state) => {
      state.status = "disconnected"
      return state
    },
  },
})
// export const { toggleStatus } = statusSlice.actions
const { actions, reducer } = statusSlice
export const { connectedStatus, disconnectedStatus } = actions
export default reducer
