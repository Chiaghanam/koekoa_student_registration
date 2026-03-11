import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import proxy from "../api";
export const registerStudent = createAsyncThunk(
  'register/registerStudent',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${proxy}register/`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    
  },
    extraReducers: (builder) => {
    builder
      .addCase(registerStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default registerSlice.reducer;