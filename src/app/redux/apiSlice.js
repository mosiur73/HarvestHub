
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api-fresh-harvest.code-commando.com" }),
  tagTypes: ["Products", "Categories"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/v1/products",
      providesTags: ["Products"],
    }),
    getCategories: builder.query({
      query: () => "/api/v1/category",
      providesTags: ["Categories"],
    }),

     // ✅ Register User
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/api/v1/users/register",
        method: "POST",
        body: userData,
      }),
    }),
     // ✅ Login User
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useRegisterUserMutation, useLoginUserMutation } = apiSlice;
