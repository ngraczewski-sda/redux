const selectUsers = (state) => state.users.users;
const selectActiveUserId = (state) => state.users.activeUserId;

export const usersSelectors = {
  selectUsers,
  selectActiveUserId,
};
