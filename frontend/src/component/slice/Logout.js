import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import proxy from "../api"

export const logoutStudent = createAsyncThunk(
    'logout/logoutStudent',
    async (_, thunkAPI) => {
        try {
            await axios.post(                              
                `${proxy}auth/logout/`,
                { refresh: localStorage.getItem('refresh_token') },  
                { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }}
            )
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data) 
        }
    }
)

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        loading: false,
        success: false,
        error:   null,
    },
     reducers: {
        resetLogout: (state) => { state.success = false } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(logoutStudent.pending, (state) => {
                state.loading = true
                state.error   = null
            })
            .addCase(logoutStudent.fulfilled, (state) => {
                state.loading = false
                state.success = true
            })
            .addCase(logoutStudent.rejected, (state, action) => {
                state.loading = false
                state.error   = action.payload
            })
    }
})
export const { resetLogout } = logoutSlice.actions
export default logoutSlice.reducer