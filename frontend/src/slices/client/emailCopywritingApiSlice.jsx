// emailCopywritingApi.js
import { EMAIL_COPYWRITING_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

export const emailCopywritingApi = apiSlice.injectEndpoints({
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
