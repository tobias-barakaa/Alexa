import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentArticle: null,
  error: null,
};

const articleCreationSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCurrentArticle: (state, action) => {
      state.currentBlog = action.payload;
    },
    clearCurrentArticle: (state) => {
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

export const { setCurrentArticle, clearCurrentArticle, setError, clearError } = articleCreationSlice.actions;

export default articleCreationSlice.reducer;