import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/v1/products",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
