import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messagesActions } from "redux/messagesActions";
import { messagesSelectors } from "redux/messagesSelectors";
import { classNames } from "utils/classNames";
import styles from "./NewMessage.module.css";

export const NewMessage = ({ className, user, setUser }) => {
  const [content, setContent] = useState("");
  const messageRef = useRef();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(messagesActions.postMessage({ content, user }));

    setContent("");
    messageRef.current.focus();
  };

  const postError = useSelector(messagesSelectors.selectPostError);

  return (
    <form
      className={classNames(styles.container, className)}
      onSubmit={handleSubmit}
    >
      <div className={styles.input}>
        <textarea
          ref={messageRef}
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
