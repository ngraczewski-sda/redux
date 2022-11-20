import { createAction, configureStore, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");

const initialState = 0;
const reducer = createReducer(initialState, {
  [increment.type]: (state, action) => {
    const { payload } = action;
    return Math.min(state + payload, 10);
  },
});

const actions = {
  increment,
};

const store = configureStore({
  reducer,
});

export { store, actions };
