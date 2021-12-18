import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import cartReducer from "./CartSlice";
import productsReducer from "./ProductsSlice"
export default configureStore({
  reducer:{
    user:userReducer,
    cart:cartReducer,
    products:productsReducer
  }
})