import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth"
import userSlice from "../features/user"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
})
