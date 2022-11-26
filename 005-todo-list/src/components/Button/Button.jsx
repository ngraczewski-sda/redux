import { classNames } from "../../utils/classNames";
import styles from "./Button.module.css";

export const Button = ({ className, ...props }) => {
  return (
    <button
      className={classNames(className, styles.button)}
      {...props}
    ></button>
  );
};
