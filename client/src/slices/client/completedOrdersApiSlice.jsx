import { COMPLETED } from "../../constants";
import { apiSlice } from "../apiSlice";

export const completedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getcompletedOrder: builder.query({
      query: (fieldId) => `${COMPLETED}/${fieldId}`,
      credentials: "include",
    }),
    keepUnusedDataFor: 5,

    
  }),
});

export const {
  useGetcompletedOrderQuery
} = completedApiSlice;
