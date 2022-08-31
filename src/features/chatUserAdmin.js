import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import socketClient from 'socket.io-client'
const initialState = {
  error: null,
  userId: localStorage.getItem('user'),
  signingIn: false,
  signingUp: false,
  tokenAdmin: localStorage.getItem('tokenAdmin'),
  socket: socketClient('http://localhost:4000')
}

export const createAdmin = createAsyncThunk(
  'create/admin',
  async ({ name, surname, login, password }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:4000/create/admin`, {
        name,
        surname,
        login,
        password,
      })
      const data = await response.data
      localStorage.setItem('tokenAdmin', data.token)
      const json = await response.json()
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      }
      return json
    } catch (e) {
      thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const loadAdmin = createAsyncThunk(
  'auth/admin',
  async ({ login, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:4000/login/admin', {
        login,
        password,
      })
      const data = await response.data
     
      localStorage.setItem('tokenAdmin', data.token)
     
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
      console.log(error)
    }
  }
)

const chatUserAdmin = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createAdmin.pending, (state, action) => {
        state.signingUp = true
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.signingUp = false
        state.tokenAdmin = action.payload
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.signingUp = false
        state.error = action.payload
      })
      .addCase(loadAdmin.pending, (state, action) => {
        state.signingIn = true
      })
      .addCase(loadAdmin.fulfilled, (state, action) => {
        state.signingIn = false
        state.tokenAdmin = action.payload
      })
      .addCase(loadAdmin.rejected, (state, action) => {
        state.signingIn = false
        state.error = action.payload
      })
  },
})

export default chatUserAdmin.reducer
