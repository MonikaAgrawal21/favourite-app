// favoritesSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      console.log(action, "action");
      state.items.push(action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;

export default favoritesSlice.reducer;
