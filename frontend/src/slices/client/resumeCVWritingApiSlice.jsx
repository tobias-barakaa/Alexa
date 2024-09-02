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
