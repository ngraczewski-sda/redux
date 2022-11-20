import React from "react";
import { useSelector } from "react-redux";
import styles from "./CurrentPlayer.module.css";

export const CurrentPlayer = () => {
  const currentPlayer = useSelector((state) => state.currentPlayer);

  return (
    <div className={styles.currentPlayer}>Current player: {currentPlayer}</div>
  );
};
