import { configureStore } from "@reduxjs/toolkit"
import statusSlice from "../features/status"

export const store = configureStore({
  reducer: {
    user: statusSlice,
  },
})
