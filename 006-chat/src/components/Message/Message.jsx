import { classNames } from "utils/classNames";
import styles from "./Message.module.css";

export const Message = ({ content, user, className }) => {
  const color = "white";

  return (
    <div
      className={classNames(styles.container, className)}
      style={{ backgroundColor: color }}
    >
      <div className={styles.content}>{content}</div>
      <div className={styles.author}>{user}</div>
    </div>
  );
};
