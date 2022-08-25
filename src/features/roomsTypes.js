import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loadingRooms: false,
    rooms: [],
    error: null
}


export const getRooms = createAsyncThunk("get/rooms", async(_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:4000/room-type/all")
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})


const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRooms.pending, (state, action) => {
            state.loadingRooms = true
            
        })
        .addCase(getRooms.fulfilled, (state, action) => {
            state.rooms = action.payload
            state.loadingRooms = false
        })
        .addCase(getRooms.rejected, (state, action) => {
            state.error = action.payload
          
        })
    }
})


export default roomSlice.reducer