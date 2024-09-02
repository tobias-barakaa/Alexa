import { ADMIN_USERS_URL } from "../../constants";
import { apiSlice } from '../apiSlice';

export const adminUsersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
        query: () => ({
            url: ADMIN_USERS_URL,
            credentials: 'include',
        }),
        keepUnusedDataFor: 5,
        }),
        deleteUser: builder.mutation({
        query: (data) => ({
            url: ADMIN_USERS_URL,
            method: 'DELETE',
            body: data,
            credentials: 'include',
        }),
        keepUnusedDataFor: 5,
        }),
    }),
    });

export const { useGetUsersQuery, useDeleteUserMutation } = adminUsersApiSlice;
