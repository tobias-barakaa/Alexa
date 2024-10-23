import { ORDER_WRITER, USERS_URL, VIEW_PROFILE, WRITER_SIGN_IN, WRITER_SIGN_UP, ORDER_WRITER_GET, ORDER_WRITER_GET_ONE, ORDER_WRITER_JOBS } from "../../constants";
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
    getWriterProfileByUsername: builder.query({
      query: (username) => ({
        url: `${VIEW_PROFILE}/${username}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    placeOrder: builder.mutation({
      query: (details) => ({
        url: `${ORDER_WRITER}`,
        method: "POST",
        body: { ...details },
        credentials: "include",
      }),
    }),
    getLimitedOrders: builder.query({
      query: () => ({
        url: `${ORDER_WRITER_GET}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),

    getManager: builder.query({
      query: (managerId) => ({
        url: `${ORDER_WRITER_GET_ONE}/get-manager/${managerId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getNewJobs: builder.query({
      query: () => ({
        url: `${ORDER_WRITER_JOBS}`,
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
    })
  }),
});

export const {  
  useRegisterWriterMutation, 
  useLoginWriterMutation,
  useWriterProfileMutation,
  useLogoutWriterMutation,
  useGetWriterProfileByUsernameQuery,
  usePlaceOrderMutation,
  useGetLimitedOrdersQuery,
  useGetManagerQuery,
  useGetNewJobsQuery
} =
  writersApiSlice;
