import { useSelector } from "react-redux";
import { colorsSelectors } from "redux/colorsSelectors";
import styles from "./Message.module.css";

export const Message = ({ content, user }) => {
  const color = useSelector((state) =>
    colorsSelectors.selectUserColor(state, user)
  );

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.content}>{content}</div>
      <div className={styles.author}>{user}</div>
    </div>
  );
};
