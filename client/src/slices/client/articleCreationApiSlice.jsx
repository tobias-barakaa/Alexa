import { ARTICLE_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getNumberOfWords: builder.query({
      query: () => `${ARTICLE_URL}/numberofwords`,
      keepUnusedDataFor: 5,
    }),
    getTimeFrame: builder.query({
      query: () => `${ARTICLE_URL}/timeframe`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useGetNumberOfWordsQuery,
  useGetTimeFrameQuery,
} = articleApiSlice;
