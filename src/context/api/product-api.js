import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './index';

export const api = createApi({
    reducerPath: 'productApi', 
    baseQuery, 
    endpoints: (build) => ({
        getProduct: build.query({
            query: (params) => ({
                url: "/products",
                params,
            }),
            providesTags: ["Product"],
        }),
        getCategory: build.query({
            query: (query) => ({
              url: `/products?${query}`,
            }),
            providesTags: ["Products"],
          }),
        getProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["Product"],
        }),
         getBrands: build.query({
            query: (params) => ({
                url: "/brands",
                params,
            }),
        }),
        getColors: build.query({
            query: (params) => ({
                url: "/colors",
                params,
            }),
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/product",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/product/${id}`,
                method: "PUT", // or "PATCH"
                body,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useGetProductByIdQuery,
    useGetColorsQuery,
    useGetBrandsQuery,
    useGetCategoryQuery,
} = api;
