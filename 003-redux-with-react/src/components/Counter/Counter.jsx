import React from "react";
import styles from "./Counter.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/counterSlice";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};
