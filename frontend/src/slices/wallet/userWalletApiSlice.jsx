import { apiSlice } from "../apiSlice";
import { WALLET_URL } from "../../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
   getUserTransactions: builder.query({
        query: () => ({
            url: `${WALLET_URL}`,
            credentials: "include",

        }),
        keepUnusedDataFor: 5,
      }),
      

    }),
});

export const {
    useGetUserTransactionsQuery  
} = usersApiSlice;
