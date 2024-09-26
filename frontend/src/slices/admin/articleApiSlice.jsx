import { apiSlice } from "../apiSlice";
import { ARTICLE_URL } from "../../constants";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    orderArticle: builder.mutation({
      query: (details) => ({
        url: `${ARTICLE_URL}/articles`,
        method: "POST",
        body: { ...details },
        credentials: "include",
      }),
    }),
    
    
  }),
});

export const {
  useOrderArticleMutation,
  
} = articleApiSlice;
