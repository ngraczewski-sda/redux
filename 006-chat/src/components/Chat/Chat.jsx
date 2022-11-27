import { Message } from "components/Message/Message";
import { NewMessage } from "components/NewMessage/NewMessage";
import { useMessagesPoll } from "hooks/useMessagesPoll";
import { useScrollToBottomOnChange } from "hooks/useScrollToBottomOnChange";
import { memo } from "react";
import { useSelector } from "react-redux";
import { messagesSelectors } from "redux/messagesSelectors";
import styles from "./Chat.module.css";

export const Chat = memo(() => {
  const messages = useSelector(messagesSelectors.selectMessages);
  const ref = useScrollToBottomOnChange(messages?.length);

  useMessagesPoll();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.messages} ref={ref}>
          {messages?.map((message) => (
            <Message
              key={message.content}
              content={message.content}
              user={message.user}
            />
          ))}
        </div>

        <NewMessage className={styles.newMessage} />
      </div>
    </div>
  );
});
