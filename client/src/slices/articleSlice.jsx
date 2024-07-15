import { createSlice } from "@reduxjs/toolkit";

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
  name: "article",
  initialState,
  reducers: {
    updateStepOneData: (state, action) => {
      state.stepOneData = action.payload;
    },
    updateStepTwoData: (state, action) => {
      state.stepTwoData = action.payload;
    },
    calculateTotalCost: (state) => {
      const baseCost = 10;
      let wordCountCost = 0;
      if (state.stepOneData.numberOfWords && state.stepOneData.numberOfWords.includes('-')) {
        wordCountCost = parseInt(state.stepOneData.numberOfWords.split('-')[1], 10) / 100;
      }
      state.totalCost = baseCost + wordCountCost * state.stepTwoData.quantity;
    },
  },
});

export const { updateStepOneData, updateStepTwoData, calculateTotalCost } = articleSlice.actions;

export default articleSlice.reducer;
