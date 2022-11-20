import React from "react";
import styles from "./Counter.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions, counterSelectors } from "../../redux/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch(); //store.dispatch
  const counter = useSelector(counterSelectors.selectCounter);
  const incrementsCount = useSelector(counterSelectors.selectIncrementsCount);
  const decrementsCount = useSelector(counterSelectors.selectDecrementsCount);
  const totalOperationsCount = useSelector(
    counterSelectors.selectTotalOperationsCount
  );

  const handleIncrementClick = () => {
    dispatch(counterActions.increment(1));
  };

  const handleDecrementClick = () => {
    dispatch(counterActions.decrement(1));
  };

  const handleResetClick = () => {
    dispatch(counterActions.reset());
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div>
        <Button onClick={handleIncrementClick}>Increment</Button>
        <Button onClick={handleDecrementClick}>Decrement</Button>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
      <div>
        <div>Number of increments: {incrementsCount}</div>
        <div>Number of decrements: {decrementsCount}</div>
        <div>Total number of operations: {totalOperationsCount}</div>
      </div>
    </div>
  );
};
