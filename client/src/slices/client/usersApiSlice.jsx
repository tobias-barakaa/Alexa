import { USERS_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signin`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signout`,
        method: "POST",
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation, 
  useRegisterMutation, 
  useProfileMutation
  , useLogoutMutation
} =
  usersApiSlice;

// import { USERS_URL } from "../constants";
// import  {apiSlice} from './apiSlice';

// export const usersApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: (data) => ({
//                 url: USERS_URL + '/auth',
//                 method: 'POST',
//                 body: data,
//             }),
//             keepUnusedDataFor: 5
//         }),
//         register: builder.mutation({
//             query: (data) => ({
//                 url: USERS_URL + '/signup/',
//                 method: 'POST',
//                 body: data,
//             }),
//             keepUnusedDataFor: 5
//         })

//     })
// });

// export const { useLoginMutation, useRegisterMutation } = usersApiSlice;
