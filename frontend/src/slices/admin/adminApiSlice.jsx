import { ADMIN_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: `${ADMIN_URL}/login`,
        method: 'POST',
        body: credentials,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminApiSlice;
