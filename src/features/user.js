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
    await axios({
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
  }
)
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    editName: false,
  },
  reducers: {
    editName: (state) => {
      state.editName = true
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
        editName: false,
      }
    },
    [fetchUserDatas.rejected]: () => {
      console.log("Rejected !")
    },
  },
})

export const { editName } = userSlice.actions
export default userSlice.reducer
