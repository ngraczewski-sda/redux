import { useState } from "react";
import { useSelector } from "react-redux";
import { messagesSelectors } from "redux/messagesSelectors";
import { classNames } from "utils/classNames";
import styles from "./NewMessage.module.css";

export const NewMessage = ({ className }) => {
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert(
      JSON.stringify({
        user,
        content,
      })
    );

    setContent("");
  };

  const postError = useSelector(messagesSelectors.selectPostError);

  return (
    <form
      className={classNames(styles.container, className)}
      onSubmit={handleSubmit}
    >
      <div className={styles.input}>
        <textarea
          className={styles.input}
          value={content}
          onChange={handleContentChange}
        />
        {postError && <div className={styles.error}>{postError}</div>}
      </div>

      <button className={styles.button} type="submit">
        send
      </button>
      <span className={styles.by}>by</span>
      <input
        className={styles.author}
        value={user}
        onChange={handleUserChange}
      />
    </form>
  );
};
