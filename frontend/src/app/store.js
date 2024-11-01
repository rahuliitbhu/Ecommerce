import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product-list/productSlice";
import authReducer from "../features/auth/AuthenticationSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    user: authReducer,
    cart: cartReducer,
  },
});
