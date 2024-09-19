import { apiSlice } from "../apiSlice";
import { ORDER_URL } from "../../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    orderArticle: builder.mutation({
        query: (details) => ({
          url: `${ORDER_URL}/order`,
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
      })
    }),
});

export const {
  useOrderArticleMutation,
  useGetOrderByIdQuery, 
} = usersApiSlice;
