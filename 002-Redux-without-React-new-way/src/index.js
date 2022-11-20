import "./index.css";
import { counter } from "./counter";
import { store, actions } from "./store";

document.body.innerHTML = counter;

store.subscribe(() => {
  const counter = document.querySelector(".counter");
  if (counter) {
    counter.innerHTML = store.getState();
  }
});

document.querySelector(".counter-increment")?.addEventListener("click", () => {
  store.dispatch(actions.increment(1));
});

document.querySelector(".counter-decrement")?.addEventListener("click", () => {
  store.dispatch(actions.decrement(1));
});

document.querySelector(".counter-reset")?.addEventListener("click", () => {
  store.dispatch(actions.reset());
});

document.querySelector(".counter-random")?.addEventListener("click", () => {
  store.dispatch(actions.random());
});
