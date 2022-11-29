const selectMessagesSlice = (state) => state.messages;

const selectMessages = (state) => selectMessagesSlice(state).messages;

const selectPostError = (state) => selectMessagesSlice(state).postError;

export const messagesSelectors = {
  selectMessages,
  selectPostError,
};
