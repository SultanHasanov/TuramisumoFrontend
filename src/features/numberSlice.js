import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    numbers: [],
    loader: false,
    error: null
}



export const getNumbers = createAsyncThunk("get/numbers", async(_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/numbers");
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getNumbers.pending, (state, action) => {
            state.loader = true
        })
        .addCase(getNumbers.fulfilled, (state, action) => {
            state.numbers = action.payload
            state.loader = false
        })
        .addCase(getNumbers.rejected, (state, action) => {
            state.loader = false
            state.error = action.payload
        })
    }
})


export default numberSlice.reducer