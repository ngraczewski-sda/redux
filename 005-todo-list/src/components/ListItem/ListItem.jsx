import { classNames } from "../../utils/classNames";
import styles from "./ListItem.module.css";

export const ListItem = ({ className, children, ...props }) => {
  return (
    <li className={classNames(className, styles.listItem)} {...props}>
      {children}
    </li>
  );
};
