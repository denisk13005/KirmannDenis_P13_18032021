import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth"
import userSlice from "../features/user"

/**
 * redux store
 * @returns {Object} differents slices of store
 */
export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
})
