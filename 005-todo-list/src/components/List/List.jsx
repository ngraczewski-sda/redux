import { classNames } from "../../utils/classNames";
import styles from "./List.module.css";

export const List = ({ className, children, ordered, emptyMessage }) => {
  if (!children || children?.length === 0) {
    return <div className={styles.emptyMessage}>{emptyMessage}</div>;
  }
  if (ordered) {
    return <ul className={classNames(className, styles.list)}>{children}</ul>;
  }
  return <ol className={classNames(className, styles.list)}>{children}</ol>;
};
