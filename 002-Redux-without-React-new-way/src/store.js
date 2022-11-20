import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");

const reducer = createReducer(0, {
  [increment.type]: (state) => state + 1,
  [decrement.type]: (state) => state - 1,
});

const store = configureStore({ reducer });

const actions = {
  increment,
  decrement,
};

export { store, actions };
