import { ARTICLES } from "../constants";
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: ARTICLES,
      }),
      keepUnusedDataFor: 5,
      credentials: 'include'
    }),
    orderArticles: builder.mutation({
      query: (data) => ({
        url: ARTICLES,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useOrderArticlesMutation } = articlesApiSlice;
