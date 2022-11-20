import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import styles from "./TasksList.module.css";

export const TasksList = () => {
  const taskIds = useSelector((state) => state.tasks.map((task) => task.id));

  return (
    <div className={styles.tasksListContainer}>
      <div className={styles.tasksListHeader}>To Do:</div>
      <div className={styles.tasksList}>
        {taskIds.map((id) => (
          <Task key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
