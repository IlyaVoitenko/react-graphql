import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reduces/modal";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
