import { configureStore } from "@reduxjs/toolkit";
import { colorsReducer } from "./colorsSlice";
import { messagesReducer } from "./messagesSlice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    colors: colorsReducer,
  },
});
