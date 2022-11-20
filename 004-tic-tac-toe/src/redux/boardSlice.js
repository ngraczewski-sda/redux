import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";

const initialState = [null, null, null, null, null, null, null, null, null];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    put: (state, action) => {
      const { player, cellIndex } = action.payload;
      state[cellIndex] = player;
    },
  },
  extraReducers: {
    [actions.resetGame]: () => initialState,
  },
});

export const boardActions = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
