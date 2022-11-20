import { useSelector } from "react-redux";
import styles from "./Task.module.css";

export const Task = ({ id }) => {
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === id)
  );

  return (
    <div className={styles.task}>
      {task.name}
      <input type="checkbox" checked={task.complete} />
    </div>
  );
};
