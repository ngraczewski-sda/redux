import { createAction, configureStore, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");
const reset = createAction("reset");
const random = createAction("random");

const initialState = 0;
const reducer = createReducer(initialState, {
  [increment.type]: (state, action) => {
    const { payload } = action;
    return Math.min(state + payload, 10);
  },
  [decrement.type]: (state, { payload }) => {
    return state - payload;
  },
  [reset.type]: () => {
    return initialState;
  },
  [random.type]: (state) => {
    const step = Math.floor((Math.random() - 0.5) * 20);
    return state + step;
  },
});

const actions = {
  increment,
  decrement,
  reset,
  random,
};

const store = configureStore({
  reducer,
});

export { store, actions };
