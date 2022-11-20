import React from "react";
import { Board } from "../Board/Board";
import { CurrentPlayer } from "../CurrentPlayer/CurrentPlayer";
import { EndGameScreen } from "../EndGameScreen/EndGameScreen";
import { ResetGame } from "../ResetGame/ResetGame";
import styles from "./Game.module.css";

export const Game = () => {
  return (
    <div className={styles.game}>
      <CurrentPlayer />
      <Board />
      <EndGameScreen />
      <ResetGame />
    </div>
  );
};
