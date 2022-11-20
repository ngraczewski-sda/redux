import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";
import { boardActions } from "./boardSlice";

const initialState = "O";

const currentPlayerSlice = createSlice({
  name: "currentPlayer",
  initialState,
  reducers: {},
  extraReducers: {
    [boardActions.put]: (state) => (state === "X" ? "O" : "X"),
    [actions.resetGame]: () => initialState,
  },
});

export const currentPlayerActions = currentPlayerSlice.actions;
export const currentPlayerReducer = currentPlayerSlice.reducer;
