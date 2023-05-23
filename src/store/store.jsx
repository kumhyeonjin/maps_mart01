import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartStore";
import hot from "./hotDataStore";

export default configureStore({
  reducer: {
    cart: cart.reducer,
    hot: hot.reducer,
  },
});
