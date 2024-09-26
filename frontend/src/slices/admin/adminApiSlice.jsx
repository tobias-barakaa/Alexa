import { ADMIN_URL, ADMIN_ARTICLE_URL } from '../../constants';
import { apiSlice } from '../apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: `${ADMIN_URL}/login`,
        method: 'POST',
        body: credentials,
        credentials: 'include',
      }),
    }),

    getArticles: builder.query({
      query: () => ({
        url: ADMIN_ARTICLE_URL,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getArticleById: builder.query({
      query: (id) => ({
        url: `${ADMIN_ARTICLE_URL}/${id}`,
        credentials: "include"
      }),
      keepUnusedDataFor: 5,
    }),
  }),
  
  
});

export const { useAdminLoginMutation, 
  useGetArticlesQuery,
  useGetArticleByIdQuery
 } = adminApiSlice;
