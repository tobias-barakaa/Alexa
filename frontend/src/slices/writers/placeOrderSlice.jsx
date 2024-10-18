import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {
    projectType: '',
    title: '',
    description: '',
    budget: '',
    deadline: '',
    requirements: ''
  }
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
      localStorage.setItem('formData', JSON.stringify(action.payload));
    },
    clearFormData(state) {
      state.formData = {
        projectType: '',
        title: '',
        description: '',
        budget: '',
        deadline: '',
        requirements: ''
      };
      localStorage.removeItem('formData');
    }
  }
});

export const { setFormData, clearFormData } = projectSlice.actions;

export default projectSlice.reducer;
