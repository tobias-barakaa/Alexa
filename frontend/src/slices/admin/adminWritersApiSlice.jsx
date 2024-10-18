import { HIRE_WRITERS } from '../../constants';
import { apiSlice } from '../apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
           getWriters: builder.query({
      query: () => ({
        url: `${HIRE_WRITERS}`, 

        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),

  }),
});

export const { 
  useGetWritersQuery
} = adminApiSlice;
