import { createSlice } from "@reduxjs/toolkit";

const initialState = 666;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

const selectCounter = (state) => state.counter;

export const counterSelectors = {
  selectCounter,
};
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
