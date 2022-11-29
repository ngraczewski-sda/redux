import { useSelector } from "react-redux";
import { colorsSelectors } from "redux/colorsSelectors";
import { classNames } from "utils/classNames";
import styles from "./Message.module.css";

export const Message = ({ content, user, className }) => {
  const color = useSelector((state) =>
    colorsSelectors.selectUserColor(state, user)
  );

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
