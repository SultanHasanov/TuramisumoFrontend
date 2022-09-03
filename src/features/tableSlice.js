import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tables: [],
  error: null,
};

const user = localStorage.getItem("user");

export const getTable = createAsyncThunk("get/table", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:4000/table`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const patchTableBooking = createAsyncThunk(
  "table/booking",
  async (data, thunkAPI) => {
    try {
      console.log({ data });
      await axios.patch(`http://localhost:4000/table/${data}`, {});
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTable.fulfilled, (state, action) => {
      state.tables = action.payload;
      console.log(state.tables);
    });
    builder.addCase(patchTableBooking.fulfilled, (state, action) => {
      state.tables = action.payload;
      console.log(state.tables);
    });

  },
});

export default tableSlice.reducer;
