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
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `${ARTICLE_URL}/deletearticle/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    
  }),
});

export const {
  useCreateArticleMutation,
  useDeleteArticleMutation
} = articleApiSlice;
