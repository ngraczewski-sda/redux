import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions";
import { Button } from "../Button/Button";

export const ResetGame = () => {
  const dispatch = useDispatch();
  const resetGame = () => dispatch(actions.resetGame());
  return <Button onClick={resetGame}>Reset game</Button>;
};
