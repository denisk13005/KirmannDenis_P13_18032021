import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { baseURL } from "../utils/axios"

export const fetchUserDatas = createAsyncThunk(
  "user/fetchUserDatas",
  async (token) => {
    let res = await axios({
      method: "post",
      url: `${baseURL}/user/profile`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).catch((err) => console.log(err))
    console.log(res.data.body)
    return res.data.body
  }
)
const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUserDatas: (state, action) => {
      state = action.payload
      return state
    },
  },
  extraReducers: {
    [fetchUserDatas.pending]: () => {
      console.log("Pending")
    },
    [fetchUserDatas.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfully !")
      return { ...state, state: payload }
    },
    [fetchUserDatas.rejected]: () => {
      console.log("Rejected !")
    },
  },
})

export const { getUserDatas } = userSlice.actions
export default userSlice.reducer
