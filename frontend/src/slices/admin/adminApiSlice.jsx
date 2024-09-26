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
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),

    // Mutation to upload the file for an article
    uploadArticleFile: builder.mutation({
      query: ({ article_id, user_id, file, status }) => {
        const formData = new FormData();
        formData.append('article_id', article_id);
        formData.append('user_id', user_id);
        formData.append('file', file);
        formData.append('status', status); // Include status in the form data

        return {
          url: `${ADMIN_ARTICLE_URL}/upload`,
          method: 'POST',
          body: formData,
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { 
  useAdminLoginMutation, 
  useGetArticlesQuery, 
  useGetArticleByIdQuery, 
  useUploadArticleFileMutation 
} = adminApiSlice;
