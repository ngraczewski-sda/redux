import { createSlice } from "@reduxjs/toolkit";
import { generatePastelColor } from "utils/generatePastelColor";
import { getUnique } from "utils/getUnique";
import { messagesActions } from "./messagesActions";

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    admin: generatePastelColor(),
    user: generatePastelColor(),
  },
  reducers: {},
  extraReducers: {
    [messagesActions.fetchMessagesSuccess]: (state, action) => {
      const users = action.payload.map((message) => message.user);
      const uniqueUsers = getUnique(users);

      uniqueUsers.forEach((user) => {
        if (state[user]) {
          return;
        }
        state[user] = generatePastelColor();
      });
    },
  },
});

export const colorsReducer = colorsSlice.reducer;
