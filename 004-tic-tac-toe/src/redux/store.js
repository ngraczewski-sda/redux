import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./boardSlice";
import { currentPlayerReducer } from "./currentPlayerSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    currentPlayer: currentPlayerReducer,
  },
});
