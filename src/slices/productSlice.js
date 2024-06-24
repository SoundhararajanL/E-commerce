import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products :[],
    selectedProducts:{} ,
}

const productsSlice = createSlice({
    name  : 'productsSlice',
    initialState,
    reducers:{
        setSelectedProducts:(state,action)=>{
            state.selectedProducts = action.payload;
        }
    }

})


export const {setSelectedProducts} = productsSlice.actions 
export default productsSlice.reducer