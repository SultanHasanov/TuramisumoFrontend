import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loadingProducts: false,
  products: [],
  error: null,
};

export const getProducts = createAsyncThunk("get/product", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:4000/product");
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loadingProducts = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loadingProducts = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
