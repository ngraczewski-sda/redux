import { createStore } from "redux";

// action type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creators
const increment = () => ({
  type: INCREMENT,
});
const decrement = () => ({
  type: DECREMENT,
});

const actions = {
  increment,
  decrement,
};

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }

    case DECREMENT: {
      return state - 1;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export { store, actions };
