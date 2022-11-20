import React from "react";
import styles from "./Counter.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions, counterSelectors } from "../../redux/counterSlice";
import { store } from "../../redux/store";

export const Counter = () => {
  const dispatch = useDispatch(); //store.dispatch
  const counter = useSelector(counterSelectors.selectCounter);

  const handleIncrementClick = () => {
    dispatch(counterActions.increment(1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div>
        <Button onClick={handleIncrementClick}>Increment</Button>
        {/* <Button onClick={decrement}>Decrement</Button> */}
      </div>
    </div>
  );
};
