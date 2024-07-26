import { BLOG_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNumberOfWords: builder.query({
      query: () => ({
        url: `${BLOG_URL}/numberofwords`,
        credentials: "include",
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
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getBlog: builder.query({
      query: (orderId) => ({
        url: `${BLOG_URL}/blogs/${orderId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${BLOG_URL}/updateblog/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/deleteblog/${id}`, // Adjust the URL if your backend uses a different route
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getUserBlog: builder.query({
      query: () => ({
        url: `${BLOG_URL}/usersblog`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getLatest: builder.query({
      query: () => ({
        url: `${BLOG_URL}/getlatest`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getRecent: builder.query({
      query: () => ({
        url: `${BLOG_URL}/getrecent`,
        credentials: "include",
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
  useDeleteBlogMutation,
  useGetUserBlogQuery,
  useGetLatestQuery,
  useGetRecentQuery,
} = blogApiSlice;
