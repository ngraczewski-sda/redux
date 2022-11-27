import { createSlice } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
  name: "colors",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export const colorsReducer = colorsSlice.reducer;
