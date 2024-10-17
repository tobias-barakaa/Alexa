import { USERS_URL, WRITER_SIGN_IN, WRITER_SIGN_UP } from "../../constants";
import { apiSlice } from "../apiSlice";

export const writersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginWriter: builder.mutation({
      query: (data) => ({
        url: `${WRITER_SIGN_IN}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    registerWriter: builder.mutation({
      query: (data) => ({
        url: `${WRITER_SIGN_UP}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    writerProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    logoutWriter: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {  
  useRegisterWriterMutation, 
  useLoginWriterMutation,
  useWriterProfileMutation,
  useLogoutWriterMutation,
} =
  writersApiSlice;
