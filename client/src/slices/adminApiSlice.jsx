import { apiSlice } from './apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminApiSlice;
