import { counterMarkup } from "./counter";
import { store, increment, decrement } from "./store";

document.body.innerHTML = counterMarkup;

store.subscribe(() => {
  const counterElement = document.querySelector(".counter");
  if (counterElement) {
    counterElement.innerHTML = store.getState();
  }
});

const incrementButton = document.querySelector(".counter-increment");
incrementButton?.addEventListener("click", () => {
  store.dispatch(increment(1));
});

const decrementButton = document.querySelector(".counter-decrement");
decrementButton?.addEventListener("click", () => {
  store.dispatch(decrement(1));
});
