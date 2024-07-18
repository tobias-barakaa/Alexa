import { ARTICLES } from "../constants";
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: ARTICLES,
      }),
      keepUnusedDataFor: 5,
      credentials: 'include',
    }),
    orderArticles: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        return {
          url: ARTICLES,
          method: 'POST',
          body: data,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useGetArticlesQuery, useOrderArticlesMutation } = articlesApiSlice;
