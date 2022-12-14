const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  messages: undefined,
  fetchError: undefined,
  postError: undefined,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    fetchMessagesStart: () => {},
    fetchMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.fetchError = undefined;
    },
    fetchMessagesFailure: (state, action) => {
      state.fetchError = action.payload;
      state.messages = undefined;
    },
    postMessageStart: (state) => {
      state.postError = undefined;
    },
    postMessageSuccess: () => {},
    postMessageFailure: (state, action) => {
      state.postError = action.payload.error;
    },
  },
});

export const messagesReducer = messagesSlice.reducer;
