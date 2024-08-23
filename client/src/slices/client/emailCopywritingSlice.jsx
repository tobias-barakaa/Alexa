// emailCopywritingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // your initial state here
};

export const emailCopywritingSlice = createSlice({
  name: 'emailCopywriting',
  initialState,
  reducers: {
    // your reducers here
  },
});

export const { actions } = emailCopywritingSlice;
export default emailCopywritingSlice.reducer;
