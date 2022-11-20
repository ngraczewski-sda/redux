import "./index.css";
import { counter } from "./counter";
import { actions, store } from "./store";

document.body.innerHTML = counter;

store.subscribe(() => {
  document.querySelector(".counter").innerText = store.getState();
});

document.querySelector(".counter-increment")?.addEventListener("click", () => {
  store.dispatch(actions.increment());
});

document.querySelector(".counter-decrement")?.addEventListener("click", () => {
  store.dispatch(actions.decrement());
});
