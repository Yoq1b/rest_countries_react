// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./DarkMode";

export const store = configureStore({
  reducer: {
    mode: darkModeSlice.reducer,
  },
});
