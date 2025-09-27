import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    favorites: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity || 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    addToFavorites: (state, action) => {
      const product = action.payload;
      if (!state.favorites.find(item => item.id === product.id)) {
        state.favorites.push(product);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, addToFavorites, removeFromCart, removeFromFavorites } = cartSlice.actions;
export default cartSlice.reducer;
