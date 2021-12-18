import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productReducer from "./cart/productSlice";

export  const store = configureStore({
  reducer:productReducer
});