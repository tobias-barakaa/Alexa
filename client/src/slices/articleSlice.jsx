import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepOneData: {
    description: '',
    category: '',
    authorTone: '',
    numberOfWords: '',
  },
  stepTwoData: {
    keywords: '',
    quantity: 1,
    authorTone: 'friendly',
    duration: '3hrs',
    description: '',
  },
  totalCost: 0,
};

const articleSlice = createSlice({
  name: 'article', // A unique name for your slice
  initialState,
  reducers: {
    // Define reducer functions here to update state based on actions
    updateStepOneData(state, action) {
      state.stepOneData = { ...state.stepOneData, ...action.payload }; // Update specific fields
    },
    updateStepTwoData(state, action) {
      state.stepTwoData = { ...state.stepTwoData, ...action.payload }; // Update specific fields
    },
    updateTotalCost(state, action) {
      state.totalCost = action.payload; // Update total cost directly
    },
    // You can add more reducers here for other actions
  },
});

export const { updateStepOneData, updateStepTwoData, updateTotalCost } = articleSlice.actions;
export default articleSlice.reducer;
