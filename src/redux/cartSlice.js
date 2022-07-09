import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItem = state.items?.find(
        item => item.id === action.payload.id
      );

      let updatedItems;

      if (!existingCartItem) {
        updatedItems = state.items.concat(action.payload);
      } else {
        updatedItems = state.items.map(item => {
          if (item.id === existingCartItem.id) {
            return {
              ...item,
              amount: item.amount + action.payload.amount,
            };
          } else return { ...item };
        });
      }

      const updatedState = {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      localStorage.setItem("cart", updatedState);

      return updatedState;
    },

    removeItem(state, action) {
      const existingCartItem = state.items?.find(
        item => item.id === action.payload
      );

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => {
          return item.id !== action.payload;
        });
      } else {
        updatedItems = state.items.map(item => {
          if (item.id === existingCartItem.id) {
            return {
              ...item,
              amount: existingCartItem.amount - 1,
            };
          } else return { ...item };
        });
      }

      const updatedState = {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      localStorage.setItem("cart", updatedState);

      return updatedState;
    },

    clearCart() {
      return initialCartState;
    },

    loadCart() {
      return JSON.parse(localStorage.getItem("cart"));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
