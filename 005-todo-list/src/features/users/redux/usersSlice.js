const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  activeUserId: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
