import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    error: null,
    userId: localStorage.getItem('user'),
    signingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const postUser = createAsyncThunk("user/create", async ({ name, surname, phone, login, password }, thunkAPI) => {
    try {
        const res = await axios.post(`http://localhost:4000/user`, {name, surname, phone, login, password})
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


export const postLogin = createAsyncThunk("auth/SignUp", async ({login, password}, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:4000/login", {login, password});
        const data = await response.data
        console.log({ data });
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", parseJwt(data.token).id)
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
        .addCase(postLogin.fulfilled, (state, action) => {
            state.signingIn = false;
            state.token = action.payload
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.signingIn = false;
            state.error = action.payload
        })
    }
});

export default userSlice.reducer;