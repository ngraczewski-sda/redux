import { counterMarkup } from "./counter";
import { store, actions } from "./store";
import "./index.css";

document.body.innerHTML = counterMarkup;

const setCounter = (value) => {
  const counterElement = document.querySelector(".counter");
  if (counterElement) {
    counterElement.innerHTML = value;
  }
};

setCounter(store.getState());
store.subscribe(() => {
  setCounter(store.getState());
});

const getStepValue = () => {
  const stepInput = document.querySelector('input[name="step"]');
  return Number(stepInput.value);
};

const incrementButton = document.querySelector(".counter-increment");
incrementButton?.addEventListener("click", () => {
  store.dispatch(actions.increment(getStepValue()));
});

const decrementButton = document.querySelector(".counter-decrement");
decrementButton?.addEventListener("click", () => {
  store.dispatch(actions.decrement(getStepValue()));
});

const resetButton = document.querySelector(".counter-reset");
resetButton?.addEventListener("click", () => {
  store.dispatch(actions.reset());
});
