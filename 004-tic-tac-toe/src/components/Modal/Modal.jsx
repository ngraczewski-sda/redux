import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ message, actions }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalMessage}>{message}</div>
        <div className={styles.modalActions}>{actions}</div>
      </div>
    </div>
  );
};
