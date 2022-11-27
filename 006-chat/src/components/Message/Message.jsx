import styles from "./Message.module.css";

export const Message = ({ content, user }) => {
  const color = "white";

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.content}>{content}</div>
      <div className={styles.author}>{user}</div>
    </div>
  );
};
