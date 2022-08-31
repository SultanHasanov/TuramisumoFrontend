import { configureStore } from "@reduxjs/toolkit"
import room from "../features/roomsTypes";
import userSlice from "../features/userSlice";
import chatUserAdmin from "../features/chatUserAdmin";
export const store = configureStore({
  reducer: {
    user: userSlice,
    room,
    chatUserAdmin,
  },
})