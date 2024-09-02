import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    summary: '',
  },
  experiences: [],
  educations: [],
  skills: '',
  languages: '',
  certifications: '',
  achievements: '',
  error: null,
  successMessage: '',
};

const resumeCVWritingSlice = createSlice({
  name: 'resumeCVWriting',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    setExperiences: (state, action) => {
      state.experiences = action.payload;
    },
    setEducations: (state, action) => {
      state.educations = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setCertifications: (state, action) => {
      state.certifications = action.payload;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const {
  setPersonalInfo,
  setExperiences,
  setEducations,
  setSkills,
  setLanguages,
  setCertifications,
  setAchievements,
  setError,
  setSuccessMessage,
  resetForm,
} = resumeCVWritingSlice.actions;

export default resumeCVWritingSlice.reducer;
