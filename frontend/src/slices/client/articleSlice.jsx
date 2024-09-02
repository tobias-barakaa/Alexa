import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const formData = JSON.parse(localStorage.getItem('formData')) || {
    description: '',
    category: '',
    author_tone: '',
    number_of_words: '',
    keywords: '',
    quantity: 1,
    duration: '3hrs',
    language: 'American English'
  };

  const totalCost = JSON.parse(localStorage.getItem('totalCost')) || 0;

  return {
    formData,
    totalCost
  };
};

const articleSlice = createSlice({
  name: 'article',
  initialState: getInitialState(),
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
      localStorage.setItem('formData', JSON.stringify(state.formData));
    },
    updateTotalCost(state, action) {
      state.totalCost = action.payload;
      localStorage.setItem('totalCost', JSON.stringify(state.totalCost));
    },
  },
});

export const { updateFormData, updateTotalCost } = articleSlice.actions;
export default articleSlice.reducer;
