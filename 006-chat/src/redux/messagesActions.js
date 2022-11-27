import { getMessages, postMessages } from "api/messagesApi";
import { messagesSlice } from "./messagesSlice";

const fetchMessages = () => async (dispatch) => {
  try {
    dispatch(messagesSlice.actions.fetchMessagesStart());

    const response = await getMessages();

    if (response.status === 200) {
      dispatch(
        messagesSlice.actions.fetchMessagesSuccess(await response.json())
      );
      return;
    }

    throw new Error();
  } catch (e) {
    dispatch(
      messagesSlice.actions.fetchMessagesFailure({ error: "Unknown error" })
    );
  }
};

const postMessage = (message) => async (dispatch) => {
  try {
    dispatch(messagesSlice.actions.postMessageStart());

    const response = await postMessages(message);

    if (response.status === 201) {
      dispatch(messagesSlice.actions.postMessageSuccess());
      return;
    }

    if (response.status === 400) {
      dispatch(messagesSlice.actions.postMessageFailure(await response.json()));
      return;
    }

    throw new Error();
  } catch (e) {
    dispatch(
      messagesSlice.actions.postMessageFailure({ error: "Unknown error" })
    );
  }

  dispatch(fetchMessages());
};

export const messagesActions = {
  ...messagesSlice.actions,
  fetchMessages,
  postMessage,
};
