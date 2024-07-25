import { BLOG_URL } from "../../constants";
import { apiSlice } from '../apiSlice';

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getNumberOfWords: builder.query({
        query: () => ({
            url: `${BLOG_URL}/numberofwords`,
            credentials: 'include',

        }),
        keepUnusedDataFor: 5,
    }),
    getTimeFrame: builder.query({
        query: () => ({
            url: `${BLOG_URL}/timeframe`,
        }),
    }),
    getCategories: builder.query({
        query: () => ({
            url: `${BLOG_URL}/categories`,
        }),
    }),
    createBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/createblog`,
        method: 'POST',
        body: data,
        credentials: 'include',

      }),
      keepUnusedDataFor: 5
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/updateblog`,
        method: 'PUT',
        body: data,
        credentials: 'include',

      }),
      keepUnusedDataFor: 5
    })
  })
});
export const { useGetNumberOfWordsQuery, useGetTimeFrameQuery,useGetCategoriesQuery, useCreateBlogMutation } = blogApiSlice;

