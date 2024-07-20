import { ARTICLES } from "../constants";
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: ARTICLES,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
    orderArticles: builder.mutation({
      query: (data) => ({
        url: ARTICLES,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,

    }),
  }),
});

export const { useGetArticlesQuery, useOrderArticlesMutation } = articlesApiSlice;