import { apiSlice } from "../apiSlice";
import { ORDER_URL, PAYPAL_URL } from "../../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    orderArticle: builder.mutation({
        query: (details) => ({
          url: `${ORDER_URL}`,
          method: 'POST',
          body: {...details},
         credentials: 'include',

     })
      }),
      getOrderById: builder.query({
        query: (id) => ({
            url: `${ORDER_URL}/${id}`,
            credentials: "include",

        }),
        keepUnusedDataFor: 5,
      }),
      payOrder: builder.mutation({
        query: ({orderId, details}) => ({
          url: `${ORDER_URL}/${orderId}/pay`,
          method: 'PUT',
          body: {...details},
          credentials: 'include',
        })
      }),
      getPayPalClientId: builder.query({
        query: () => ({
          url: `${PAYPAL_URL}`,
          credentials: 'include',
        }),
        keepUnusedDataFor: 5,
      })
    }),
});

export const {
  useOrderArticleMutation,
  useGetOrderByIdQuery, 
  usePayOrderMutation,
  useGetPayPalClientIdQuery
} = usersApiSlice;
