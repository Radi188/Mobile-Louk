import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutItem: [],
  },
  reducers: {
    addToCheckoutItem: (state: any, action: any) => {
      const itemInCart = state.checkoutItem.find(
        (item: any) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.checkoutItem.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCheckoutItem: (state: any, action: any) => {
      const removeFromCart = state.checkoutItem.filter(
        (item: any) => item.id !== action.payload.id
      );
      state.checkoutItem = removeFromCart;
    },
    incrementQuantity: (state: any, action: any) => {
      const itemInCart = state.checkoutItem.find(
        (item: any) => item.id == action.payload.id
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state: any, action: any) => {
      const itemInCart = state.checkoutItem.find(
        (item: any) => item.id == action.payload.id
      );
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.checkoutItem.filter(
          (item: any) => item.id !== action.payload.id
        );
        state.checkoutItem = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCheckoutItem,
  removeFromCheckoutItem,
  incrementQuantity,
  decrementQuantity,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
