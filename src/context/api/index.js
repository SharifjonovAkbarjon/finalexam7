import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQueryWithRetry = retry(fetchBaseQuery({
    baseUrl: "https://headphones-server.onrender.com/",
}), { maxRetries: 3 });

export const baseQuery = (args, api, extraOptions) => {
    return baseQueryWithRetry(args, api, extraOptions);
};
