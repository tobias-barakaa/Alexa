import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    projectType: '',
    projectDescription: '',
    duration: '6hrs',
    wordCount: 'under-100',
    cost: 0,
  },
  errors: {},
  status: 'Pending',
  error: null,
};

const emailCopywritingSlice = createSlice({
  name: 'emailCopywriting',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetForm(state) {
      state.formData = initialState.formData;
      state.errors = {};
      state.status = 'Pending';
      state.error = null;
    },
  },
});

export const {
  setFormData,
  setErrors,
  setStatus,
  setError,
  resetForm,
} = emailCopywritingSlice.actions;

export default emailCopywritingSlice.reducer;
