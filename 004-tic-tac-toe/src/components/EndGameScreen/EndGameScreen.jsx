import React from "react";
import difference from "lodash/difference";
import { useSelector } from "react-redux";
import { Modal } from "../Modal/Modal";
import { ResetGame } from "../ResetGame/ResetGame";

const winningSets = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const won = (occupiedCells) => {
  return winningSets.some((set) => difference(set, occupiedCells).length === 0);
};

export const EndGameScreen = () => {
  const previousPlayer = useSelector((state) =>
    state.currentPlayer === "X" ? "O" : "X"
  );

  const occupiedCells = useSelector((state) =>
    state.board
      .map((cell, index) => (cell === previousPlayer ? index : null))
      .filter((cell) => cell !== null)
  );

  const emptyCellsCount = useSelector(
    (state) => state.board.filter((cell) => !cell).length
  );

  if (won(occupiedCells)) {
    return (
      <Modal
        message={`Player ${previousPlayer} won!`}
        actions={<ResetGame />}
      />
    );
  }

  if (emptyCellsCount === 0) {
    return <Modal message="It's a tie!" actions={<ResetGame />} />;
  }

  return null;
};
