const selectUsersSlice = (state) => state.users;

const selectUsers = (state) => selectUsersSlice(state).users;

export const usersSelectors = {
  selectUsers,
};
