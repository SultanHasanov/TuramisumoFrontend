import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  delivery: localStorage.getItem("delivery"),
  loadingCart: false,
  cart: [],
  error: null,
};

const user = localStorage.getItem("user")

export const getCart = createAsyncThunk("get/cart", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:4000/cart/${user}`);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});


export const addProductInCart = createAsyncThunk("cart/add", async (product, thunkAPI) => {
    try {
        const res = await axios.post(`http://localhost:4000/cart/${user}`, {product})
        const json = await res.json()
        if(json.error){
            return thunkAPI.rejectWithValue(json.error)
        }
        return json
    }
    catch(e) {
        thunkAPI.rejectWithValue(e.message)
    }
})


export const deleteProductFromBasket = createAsyncThunk("delete/cart", async (productId, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:4000/cart/${user}`, {data: {product: productId}})
        console.log(productId)
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})

export const clearBasket = createAsyncThunk("clear/cart", async (_, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:4000/cart/clear/${user}`)
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})

export const productInc = createAsyncThunk("inc/cart", async (product, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/cart/inc/${user}`, {product})
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})

export const productDec = createAsyncThunk("dec/cart", async (product, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/cart/dec/${user}`, {product})
        return response.data
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue(error.message)
    }
})

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    restTable: (state, action) => {
        localStorage.setItem("delivery", "table")
    },
    restRoom: (state, action) => {
        localStorage.setItem("delivery", "room")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state, action) => {
        state.loadingCart = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loadingCart = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.payload;
      });
      builder
      .addCase(addProductInCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loadingCart = false;
      })
      builder
      .addCase(deleteProductFromBasket.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      builder
      .addCase(productInc.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      builder
      .addCase(productDec.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      builder
      .addCase(clearBasket.fulfilled, (state, action) => {
        state.cart.products = []
        state.cart.mainPrice = 0
        console.log(state.cart)
      })
  },
});

export const { restRoom, restTable } = cartSlice.actions;

export default cartSlice.reducer;