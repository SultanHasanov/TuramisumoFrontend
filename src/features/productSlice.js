import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: [],
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

export const getCategory = createAsyncThunk("get/category", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:4000/category");
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductsBank = createAsyncThunk("get/bank", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:4000/category/${id}`);
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
      builder
      .addCase(getProductsBank.fulfilled, (state, action) => {
        state.products = action.payload.productId;
        state.loadingProducts = false;
      })
      builder
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loadingProducts = false;
      })
  },
});

export default productSlice.reducer;
