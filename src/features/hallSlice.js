import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTable } from "./tableSlice";

export const changeTableBooking = createAsyncThunk(
  "table/change/booking",
  async (data, dispatch) => {
      console.log({ data });
    await axios.post(`http://localhost:4000/table/change`, { id:data.id, booking:data.booking});
  }
);
