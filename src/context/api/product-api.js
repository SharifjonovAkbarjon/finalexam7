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
        getProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["Product"],
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
} = api;
