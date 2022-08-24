import { configureStore } from "@reduxjs/toolkit"
import room from "../features/roomsTypes";
import userSlice from "../features/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    room,
  },
});