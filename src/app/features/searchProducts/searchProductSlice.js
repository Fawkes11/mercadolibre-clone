import { createSlice } from "@reduxjs/toolkit";



export const searchProductsSlice = createSlice({
    name: "searchProducts",
    initialState: [],
    reducers: {
        addSearchProducts: (state, action) => {
            return [...action.payload]
        }
    }
})

export const { addSearchProducts } = searchProductsSlice.actions

export default searchProductsSlice.reducer 