import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 100,
  incrementsCount: 0,
  decrementsCount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
      state.incrementsCount++;
    },
    decrement: (state, action) => ({
      ...state,
      counter: state.counter - action.payload,
      decrementsCount: state.decrementsCount + 1,
    }),
    reset: () => initialState,
  },
});

const selectCounterSlice = (state) => state.counter;

const selectCounter = (state) => selectCounterSlice(state).counter;

const selectIncrementsCount = (state) => {
  return state.counter.incrementsCount;
};

const selectDecrementsCount = (state) => {
  return state.counter.decrementsCount;
};

const selectTotalOperationsCount = (state) => {
  const incrementsCount = selectIncrementsCount(state);
  const decrementsCount = selectDecrementsCount(state);

  return incrementsCount + decrementsCount;
};

export const counterSelectors = {
  selectCounter,
  selectIncrementsCount,
  selectDecrementsCount,
  selectTotalOperationsCount,
};
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
