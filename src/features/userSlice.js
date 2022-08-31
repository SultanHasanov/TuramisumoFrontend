import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    error: null,
    userId: localStorage.getItem('user'),
    signingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
    user: {}
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};


export const postUser = createAsyncThunk("user/create", async ({ name, cash, surname, phone, card, login, password, age, startDate, endDate, id }, thunkAPI) => {
    try {
        const res = await axios.post(`http://localhost:4000/user/${id}`, {name, cash, surname, card, phone, login, password, age, startDate, endDate})
        if(res.data.error){
            console.log(res.data.error)
            return thunkAPI.rejectWithValue(res.data.error)
        }
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", parseJwt(res.data.token).id)
        return thunkAPI.fulfillWithValue(res.data)
    }
    catch(e) {
        thunkAPI.rejectWithValue(e.message)
    }
})


export const getUser = createAsyncThunk("user/get", async (_, thunkAPI) => {
    try {
        const userId = thunkAPI.getState().user.userId
        const res = await axios.get(`http://localhost:4000/user/${userId}`)
        return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
        console.log(error.message)
    }
})



export const postLogin = createAsyncThunk("auth/SignUp", async ({login, password}, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:4000/login", {login, password});
        const data = await response.data
        console.log({ data });
        return thunkAPI.fulfillWithValue(data);
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
        console.log(error)
    }
})



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(postUser.fulfilled, (state, action) => {
            state.signingIn = false;
            state.token = action.payload
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.signingIn = false;
            state.error = action.payload
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
});

export default userSlice.reducer;