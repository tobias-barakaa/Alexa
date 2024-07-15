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
    name: 'article',
    initialState,
    reducers: {
      
      setStepOneData(state, action) {
        state.stepOneData = action.payload;
      },
      setStepTwoData(state, action) {
        state.stepTwoData = action.payload;
      },
      setTotalCost(state, action) {
        state.totalCost = action.payload;
      },
    },
  });
  
  export const { setStepOneData, setStepTwoData, setTotalCost } = articleSlice.actions;
  
  export default articleSlice.reducer;
