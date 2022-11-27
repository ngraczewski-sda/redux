import { getMessages } from "api/messagesApi";
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

export const messagesActions = {
  ...messagesSlice.actions,
  fetchMessages,
};
