import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    coupon: "",
    items: [],
  },
  reducers: {
    cartAddItem: (state, action) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      if (existingItem === -1) {
        // Add item to cart if not found
        state.items = [...state.items, { amount: 1, id: action.payload }];
      } else {
        // Increment item amount if found
        state.items[existingItem].amount++;
      }
    },
    cartDeleteItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex !== -1) {
        // Delete item if found
        state.items.splice(itemIndex, 1);
      }
    },
    cartSetItemAmount: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        // If item found: set amount or delete if payload amount is 0
        if (action.payload.amount === 0) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex] = {
            amount: action.payload.amount,
            id: action.payload.id,
          };
        }
      }
    },
  },
});

export const { cartAddItem, cartDeleteItem, cartSetItemAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
