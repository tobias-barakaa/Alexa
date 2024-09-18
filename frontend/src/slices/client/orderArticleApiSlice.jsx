import { PAYPAL_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    payOrder: builder.mutation({
        query: ({orderId, details}) => ({
          url: `${PAYPAL_URL}`,
          method: 'PUT',
          body: {...details}
        })

      }),
      getPayPalClientId: builder.query({
        query: () => ({
            url: `${PAYPAL_URL}`,
        }),
        keepUnusedDataFor: 5,
      })
    }),
});

export const { 
  usePayOrderMutation,
  useGetPayPalClientIdQuery,

} =
  usersApiSlice;