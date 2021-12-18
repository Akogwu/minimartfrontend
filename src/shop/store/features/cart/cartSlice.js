import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  cartItems:{}
}

const cartSlice = createSlice({
  name:"cart",
  initialState:initialState,
  reducers:{
    addItemToCart: state=>{
      state.cartItems =  payload;
    }
  }
})

export const {addItemToCart} = cartSlice.actions;
export const getAllCartItems = (state) => state.cartItems.cartItems;
export default cartSlice.reducer;