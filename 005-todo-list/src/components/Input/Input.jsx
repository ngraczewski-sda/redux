import { classNames } from "../../utils/classNames";
import styles from "./Input.module.css";

export const Input = ({ className, id, label, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={classNames(className, styles.input)} {...props} />
    </div>
  );
};
