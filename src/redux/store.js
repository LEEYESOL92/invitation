import { configureStore } from "@reduxjs/toolkit";

import { itemListReducer } from "./features/itemSlice";

const store = configureStore({
  reducer: {
    items: itemListReducer
  }
});

export default store;
