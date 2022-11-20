import { createStore } from "redux";

// action type
const INCREMENT = "action-types/increment";
const DECREMENT = "action-types/decrement";
const RESET = "action-types/reset";

// action creators
const increment = (increase) => ({
  type: INCREMENT,
  payload: increase,
});

const decrement = (decrease) => ({
  type: DECREMENT,
  payload: decrease,
});

const reset = () => ({
  type: RESET,
});

const initialState = 5;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === INCREMENT) {
    return Math.min(state + payload, 10);
  }

  if (type === DECREMENT) {
    return state - payload;
  }

  if (type === RESET) {
    return initialState;
  }

  return state;
};

const store = createStore(reducer);

const actions = {
  increment,
  decrement,
  reset,
};

export { store, actions };
