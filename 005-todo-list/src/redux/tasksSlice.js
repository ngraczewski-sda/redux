import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [
  { id: v4(), name: "Take out trash", complete: false },
  { id: v4(), name: "Cook dinner", complete: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
