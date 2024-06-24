import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "./slices/productSlice"
export const store = configureStore({
    reducer: {
        products: productsReducers
    }
})