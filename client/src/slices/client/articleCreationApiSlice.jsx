import { BLOG_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/createarticle`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getNumberOfWords: builder.query({
      query: () => `${BLOG_URL}/numberofwords`,
      keepUnusedDataFor: 5,
    }),
    getTimeFrame: builder.query({
      query: () => `${BLOG_URL}/timeframe`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useGetNumberOfWordsQuery,
  useGetTimeFrameQuery,
} = articleApiSlice;
