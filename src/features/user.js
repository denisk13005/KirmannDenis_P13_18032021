import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUserDatas: (state, action) => {
      state = state.payload
      return state
    },
  },
})

export const { getUserDatas } = userSlice.actions
export default userSlice.reducer
