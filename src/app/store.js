import { configureStore } from "@reduxjs/toolkit";
import searchProductsReducer from "./features/searchProducts/searchProductSlice";

export const store = configureStore({
    reducer : {
        searchProducts: searchProductsReducer
    }
})