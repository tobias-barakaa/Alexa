// emailCopywritingApi.js
import { EMAIL_COPYWRITING_URL } from '../../constants';
import { apiSlice } from '../apiSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailCopywritingApi = createApi({
  endpoints: (builder) => ({
    createEmailCopywriting: builder.mutation({
      query: (data) => ({
        url: `${EMAIL_COPYWRITING_URL}/create`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateEmailCopywritingMutation } = emailCopywritingApi;
import { RESUME_CV_WRITING_URL } from '../../constants';
import { apiSlice } from '../apiSlice';



export const resumeCVWritingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_CV_WRITING_URL}/create`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useSubmitResumeMutation } = resumeCVWritingApiSlice;

