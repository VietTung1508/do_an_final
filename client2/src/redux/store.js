import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import adminReducer from "./adminSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
    cart: cartReducer,
  },

  devTools: false,
});

export default store;
