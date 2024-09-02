import { ADMIN_BLOG_URL } from "../../constants";
import { apiSlice } from '../apiSlice';

export const adminUsersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       createBlog: builder.mutation({
            query: (newBlog) => ({
              url: `${ADMIN_BLOG_URL}`,
              method: 'POST',
              body: newBlog,
              credentials: 'include',
            }),
            invalidatesTags: ['Blogs'],
          }),
        getBlogs: builder.query({
        query: () => ({
            url: `${ADMIN_BLOG_URL}`,
            credentials: 'include',
        }),
        keepUnusedDataFor: 5,
        
        }),

        getBlogsId: builder.query({
            query: (blogId) => ({
              url: `${ADMIN_BLOG_URL}/${blogId}`,
              credentials: 'include',
            }),
            keepUnusedDataFor: 5,
          }),
          
        
        deleteUser: builder.mutation({
        query: (data) => ({
            url: ADMIN_BLOG_URL,
            method: 'DELETE',
            body: data,
            credentials: 'include',
        }),
        keepUnusedDataFor: 5,
        }),
    }),
    });

export const { useGetBlogsQuery,useGetBlogsIdQuery, useDeleteUserMutation } = adminUsersApiSlice;
