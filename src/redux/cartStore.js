import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
export const cartStore = configureStore({
  reducer: {
    wishlistReducer :wishlistSlice,
    cartReducer :cartSlice
},  

})