import { NewMessage } from "components/NewMessage/NewMessage";
import { useMessagesPoll } from "hooks/useMessagesPoll";
import { useScrollToBottomOnChange } from "hooks/useScrollToBottomOnChange";
import styles from "./Chat.module.css";

export const Chat = () => {
  const messages = []; // podmień na selektor
  const ref = useScrollToBottomOnChange(messages?.length);

  useMessagesPoll();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.messages} ref={ref}>
          {/* tutaj dodaj wiadomości */}
        </div>

        <NewMessage className={styles.newMessage} />
      </div>
    </div>
  );
};
