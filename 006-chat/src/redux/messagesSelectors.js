const selectMessagesSlice = (state) => state.messages;

const selectMessages = (state) => selectMessagesSlice(state).messages;

export const messagesSelectors = {
  selectMessages,
};
