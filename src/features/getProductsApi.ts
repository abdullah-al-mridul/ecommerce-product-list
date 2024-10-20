import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductsApi = createApi({
  reducerPath: "getProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});
export const { useGetAllProductsQuery } = getProductsApi;
