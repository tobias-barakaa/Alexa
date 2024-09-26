import { apiSlice } from "../apiSlice";
import { ORDER_URL, PAYPAL_URL } from "../../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    orderArticle: builder.mutation({
      query: (details) => ({
        url: `${ORDER_URL}/articles`,
        method: "POST",
        body: { ...details },
        credentials: "include",
      }),
    }),
    updateArticle: builder.mutation({
      query: ({ id, ...articleData }) => ({
        url: `${ORDER_URL}/article/request/edit/${id}`, // Replace with your correct endpoint
        method: "PUT", // Or PATCH depending on your use case
        body: articleData, // Ensure this sends as JSON
        credentials: "include", // Include credentials for cookies
      }),
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/articles/getone/${id}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getAllUsersArticles: builder.query({
      query: () => ({
        url: `${ORDER_URL}/articles/request/getall`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getUpdatedOrderById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/article/all/request/getone/${id}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getUserOrders: builder.query({
      query: () => ({
        url: `${ORDER_URL}/userorders`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/article/request/deleteone/${id}`, // Your delete API endpoint
        method: "DELETE",
        credentials: "include", // Pass the user credentials if required
      }),
    }),
    getUnpaidArticlesByUser: builder.query({
      query: () => ({ url: `${ORDER_URL}/articles/request/drafts/all`, credentials: "include" }),
      keepUnusedDataFor: 5,
    }),
    getUserOrdersByCount: builder.query({
      query: () => ({
        url: `${ORDER_URL}/count`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getPendingOrdersByCount: builder.query({
      query: () => ({
        url: `${ORDER_URL}/countpending`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getPublishedOrdersByCount: builder.query({
      query: () => ({
        url: `${ORDER_URL}/countpublished/count`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getProcessingOrdersByCount: builder.query({
      query: () => ({
        url: `${ORDER_URL}/countprocessing`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getRecentArticles: builder.query({
      query: () => ({
        url: `${ORDER_URL}/articles/recent`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    getRecentArticleById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/article/edit/getone/${id}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDER_URL}/articles/${orderId}/pay`,
        method: "PUT",
        body: { ...details },
        credentials: "include",
      }),
      invalidatesTags: ["Order"],
    }),
    getPayPalClientId: builder.query({
      query: () => ({
        url: `${PAYPAL_URL}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useOrderArticleMutation,
  useGetOrderByIdQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetUserOrdersQuery,
  useGetUserOrdersByCountQuery,
  useGetPendingOrdersByCountQuery,
  useGetPublishedOrdersByCountQuery,
  useGetProcessingOrdersByCountQuery,
  useGetRecentArticlesQuery,
  useGetRecentArticleByIdQuery,
  useUpdateArticleMutation,
  useGetUpdatedOrderByIdQuery,
  useDeleteArticleMutation,
  useGetUnpaidArticlesByUserQuery,
  useGetAllUsersArticlesQuery,
} = usersApiSlice;
