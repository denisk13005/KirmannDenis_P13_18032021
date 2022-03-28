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
export const updateUserDatas = createAsyncThunk(
  "user/updateUserDatas",
  async ({ datas }) => {
    console.log(datas)
    let res = await axios({
      method: "put",
      url: `${baseURL}/user/profile`,
      headers: {
        authorization: `Bearer ${datas.token}`,
      },
      data: {
        firstName: datas.firstName,
        lastName: datas.lastName,
      },
    }).catch((err) => console.log(err))
    console.log(res)
  }
)
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
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
      return {
        firstName: payload.firstName,
        lastName: payload.lastName,
        id: payload.id,
        createdAt: payload.createdAt,
        updatedAt: payload.updatedAt,
      }
    },
    [fetchUserDatas.rejected]: () => {
      console.log("Rejected !")
    },
  },
})

export const { getUserDatas } = userSlice.actions
export default userSlice.reducer
