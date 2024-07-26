import { BLOG_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNumberOfWords: builder.query({
      query: () => ({
        url: `${BLOG_URL}/numberofwords`,
        credentials: "include", // This is typically for cookies, but may not be needed if using headers for JWT
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
        method: "POST",
        body: data,
        credentials: "include", // Same note as above
      }),
      keepUnusedDataFor: 5,
    }),
    getBlog: builder.query({
      query: (orderId) => ({
        url: `${BLOG_URL}/blogs/${orderId}`,
        credentials: "include", // Same note as above
      }),
      keepUnusedDataFor: 5,
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${BLOG_URL}/updateblog/${id}`,
        method: "PUT",
        body: data,
        credentials: "include", // Same note as above
      }),
      keepUnusedDataFor: 5,
    }),
    getUserBlog: builder.query({
        query: () => ({
          url: `${BLOG_URL}/usersblog`,
          credentials: "include", // Same note as above
        }),
        keepUnusedDataFor: 5,
      }),

      getLatest: builder.query({
        query: () => ({
          url: `${BLOG_URL}/getlatest`,
          credentials: "include", // Same note as above
        }),
        keepUnusedDataFor: 5,
      }),

      getRecent: builder.query({
        query: () => ({
          url: `${BLOG_URL}/getrecent`,
          credentials: "include", // Same note as above
        }),
        keepUnusedDataFor: 5,
      }),
  }),
});

export const {
  useGetNumberOfWordsQuery,
  useGetTimeFrameQuery,
  useGetCategoriesQuery,
  useCreateBlogMutation,
  useGetBlogQuery,
  useUpdateBlogMutation,
  useGetUserBlogQuery,
  useGetLatestQuery,
  useGetRecentQuery
} = blogApiSlice;
