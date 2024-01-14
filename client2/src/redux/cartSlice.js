import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.some(
        (item) => item.product._id === action.payload.product._id
      );

      if (product) {
        state.products.map((item) =>
          item.product._id === action.payload.product._id
            ? (item.quantity += action.payload.quantity)
            : { ...item }
        );
      } else {
        state.products.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },

    removeFromCart: (state, action) => {
      const indexDelete = state.products.findIndex(
        (el) => el.product._id === action.payload
      );

      state.products.splice(indexDelete, 1);
    },

    increase: (state, action) => {
      state.products.map((item) =>
        item.product._id === action.payload._id
          ? (item.quantity += 1)
          : { ...item }
      );
    },

    decrease: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload.id
          ? item.quantity > 1
            ? (item.quantity -= 1)
            : item.quantity
          : { ...item }
      );
    },

    resetCart: (state) => {
      state.products = [];
    },

    deleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});
export const { resetCart, decrease, increase, deleteProduct, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
