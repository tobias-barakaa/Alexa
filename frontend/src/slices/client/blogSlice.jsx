import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBlog: null,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setCurrentBlog, clearCurrentBlog, setError, clearError } = blogSlice.actions;

export default blogSlice.reducer;