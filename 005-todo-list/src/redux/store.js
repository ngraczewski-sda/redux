import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "src/features/users/redux/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
