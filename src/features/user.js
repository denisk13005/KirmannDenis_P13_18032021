import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const baseURL = "http://localhost:3001/api/v1"

/**
 * Async Function  for fetching user datas
 * @param {string} token user token
 * @returns {Object} userDatas
 */
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
    console.log(res.status.toString())
    return { body: res.data.body, status: res.status }
  }
)

/**
 * async function for updating user name
 * @param {object} datas first and last name changed
 * @returns {string} request status
 *
 */
export const updateUserDatas = createAsyncThunk(
  "user/updateUserDatas",
  async ({ datas }) => {
    const res = await axios({
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
    return res.status
  }
)

/**
 * slice user of redux store
 * @return {Object} redux store modified
 */
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
    resetUser: (state) => {
      state = { firstName: "", lastName: "", editName: false }
      return state
    },
    abort: (state) => {
      state.editName = false
      return state
    },
  },
  extraReducers: {
    [fetchUserDatas.pending]: () => {
      console.log("Pending")
    },
    [fetchUserDatas.fulfilled]: (state, { payload }) => {
      console.log(payload)
      console.log("Fetch Successfully !")
      return {
        firstName: payload.body.firstName,
        lastName: payload.body.lastName,
        id: payload.body.id,
        createdAt: payload.body.createdAt,
        updatedAt: payload.body.updatedAt,
        status: payload.status,
        editName: false,
      }
    },
    [fetchUserDatas.rejected]: () => {
      console.log("Rejected !")
    },
    [updateUserDatas.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: payload,
      }
    },
  },
})

export const { editName, resetUser, abort } = userSlice.actions
export default userSlice.reducer
