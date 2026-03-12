import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import proxy from "../api";

const loginStudent = createAsyncThunk(
  'login/loginStudent',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${proxy}/auth/login/`, credentials);
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)

      const userResponse = await axios.get(`${proxy}/students/profile/`, {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
        },
      });
      return { ...response.data, user: userResponse.data };
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }   
    });

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    user: null,
    success: false,
    error: null,
  },
    reducers: {
        resetLogin: (state) => {   
            state.success = false
            state.error   = null
        }
    },
  extraReducers: (builder) => {
    builder
      .addCase(loginStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});
export const { resetLogin } = loginSlice.actions
export default loginSlice.reducer;
export { loginStudent };


