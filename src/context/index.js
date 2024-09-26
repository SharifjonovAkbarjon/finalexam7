import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/product-api";
import counterSlice from "./counter-slice";
import cartSlice from "./cart-slice";

export const store = configureStore({
    reducer: {
        // wishlist,
        cart: cartSlice,
        counter: counterSlice,
        [ api.reducerPath ] : api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})