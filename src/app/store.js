import { configureStore } from "@reduxjs/toolkit"
import room from "../features/roomsTypes";
import userSlice from "../features/userSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    room,
    products: productSlice
  },
});