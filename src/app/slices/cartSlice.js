import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    cartAppendItem: (state, action) => {
      state.cartItems = [...action.payload, ...state.cartItems];
    },
  },
});

export const { cartAppendItem } = cartSlice.actions;

export default cartSlice.reducer;
