import React from "react";
import times from "lodash/times";
import { Cell } from "../Cell/Cell";
import styles from "./Board.module.css";

export const Board = () => {
  return (
    <div className={styles.board}>
      {times(9).map((index) => (
        <Cell index={index} key={index} />
      ))}
    </div>
  );
};
