import { createSelector } from "@reduxjs/toolkit";
import { generatePastelColor } from "utils/generatePastelColor";

const selectColorsSlice = (state) => state.colors;

const selectUserColor = createSelector(
  selectColorsSlice,
  (state, param) => param,
  (colors, user) => colors[user] ?? generatePastelColor()
);

export const colorsSelectors = {
  selectUserColor,
};
