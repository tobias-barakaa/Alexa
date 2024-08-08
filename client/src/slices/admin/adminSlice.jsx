import { createSlice } from '@reduxjs/toolkit';
import { adminApiSlice } from './adminApiSlice';

const initialState = {
  user: null,
  error: null,
  status: 'idle', 
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(adminApiSlice.endpoints.adminLogin.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(adminApiSlice.endpoints.adminLogin.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addMatcher(adminApiSlice.endpoints.adminLogin.matchRejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
