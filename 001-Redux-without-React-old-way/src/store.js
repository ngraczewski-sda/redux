import { createStore } from "redux";

// action type
const INCREMENT = "action-types/increment";
const DECREMENT = "action-types/decrement";

// action creators
const increment = (increase) => ({
  type: INCREMENT,
  payload: increase,
});

const decrement = (decrease) => ({
  type: DECREMENT,
  payload: decrease,
});

// action
const incrementAction = {
  type: INCREMENT,
  payload: 5,
};

const reducer = (state = 0, action) => {
  const { type, payload } = action;

  if (type === INCREMENT) {
    return Math.min(state + payload, 10);
  }

  if (type === DECREMENT) {
    return state - payload;
  }

  return state;
};

const store = createStore(reducer);

export { store, incrementAction, INCREMENT, increment, decrement };
