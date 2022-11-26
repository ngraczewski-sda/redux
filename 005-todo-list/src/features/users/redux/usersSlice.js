import { v4 } from "uuid";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  activeUserId: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const username = action.payload;
      const newUser = {
        id: v4(),
        username,
      };

      state.users.push(newUser);

      if (!state.activeUserId) {
        state.activeUserId = newUser.id;
      }
    },
  },
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
