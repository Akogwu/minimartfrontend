import {createSlice} from "@reduxjs/toolkit";

export const  productsSlice = createSlice({
  name:"products",
  initialState:{
    productList:[]
  },
  reducers:{
    productList:(state, action) =>{
      state.productList = action.payload;
    }
  }
})

export const getAllProducts = state => state.products.productList;
export const {productList} = productsSlice.actions;
export default productsSlice.reducer;