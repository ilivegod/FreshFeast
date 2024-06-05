import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import cartReducer from "./Slices/CartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
