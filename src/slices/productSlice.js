import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProducts: {},
    orderList: [],
};

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProducts = action.payload;
        },
        addBuyToList: (state, action) => {
            const id = Math.random().toString(36).substr(2, 9);
            const buyOrder = { ...action.payload, id };
            state.orderList.push(buyOrder);
        },
    },
});

export const { setSelectedProducts, addBuyToList } = productsSlice.actions;
export default productsSlice.reducer;
