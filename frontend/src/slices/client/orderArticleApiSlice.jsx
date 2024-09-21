import { apiSlice } from "../apiSlice";
import { ORDER_URL, PAYPAL_URL } from "../../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    orderArticle: builder.mutation({
        query: (details) => ({
          url: `${ORDER_URL}/articles`,
          method: 'POST',
          body: {...details},
         credentials: 'include',

     })
      }),
      getOrderById: builder.query({
        query: (id) => ({
            url: `${ORDER_URL}/articles/getone/${id}`,
            credentials: "include",

        }),
        keepUnusedDataFor: 5,
      }),
      getUserOrders: builder.query({
        query: () => ({
          url: `${ORDER_URL}/userorders`,
          credentials: 'include',
        }),
        keepUnusedDataFor: 5,
      }),
      getUserOrdersByCount: builder.query({
        query: () => ({
          url: `${ORDER_URL}/count`,
          credentials: 'include',
        }),
        keepUnusedDataFor: 5,
      }),
      getPendingOrdersByCount: builder.query({
        query: () => ({
          url: `${ORDER_URL}/countpending`,
          credentials: 'include',
        
        }),
        keepUnusedDataFor: 5,
      }),
      getCompletedOrdersByCount: builder.query({
        query: () => ({
          url: `${ORDER_URL}/countcompleted`,
          credentials: 'include',
        }),
        keepUnusedDataFor: 5,
      }),
      getProcessingOrdersByCount: builder.query({
        query: () => ({
          url: `${ORDER_URL}/countprocessing`,
          credentials: 'include',
        }),
        keepUnusedDataFor: 5,
      }),
      payOrder: builder.mutation({
        query: ({orderId, details}) => ({
          url: `${ORDER_URL}/articles/${orderId}/pay`,
          method: 'PUT',
          body: {...details},
          credentials: 'include',
        }),
        invalidatesTags: ['Order']

      }),
      getPayPalClientId: builder.query({
        query: () => ({
          url: `${PAYPAL_URL}`,
          credentials: 'include',
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
  useGetCompletedOrdersByCountQuery,
  useGetProcessingOrdersByCountQuery,
} = usersApiSlice;
