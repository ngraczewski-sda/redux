import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { boardActions } from "../../redux/boardSlice";
import styles from "./Cell.module.css";

export const Cell = ({ index }) => {
  const cellPlayer = useSelector((state) => state.board[index]);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cellPlayer) {
      return;
    }

    dispatch(
      boardActions.put({
        player: currentPlayer,
        cellIndex: index,
      })
    );
  };

  return (
    <div className={styles.cell} onClick={handleClick}>
      {cellPlayer}
    </div>
  );
};
