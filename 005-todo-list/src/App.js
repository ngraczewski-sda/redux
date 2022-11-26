import React from "react";
import { NewTask } from "./features/tasks/components/NewTask/NewTask";
import { TasksList } from "./features/tasks/components/TasksList/TasksList";
import { TasksSummary } from "./features/tasks/components/TasksSummary/TasksSummary";
import { UsersList } from "./features/users/components/UsersList/UsersList";
import { NewUser } from "./features/users/components/NewUser/NewUser";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.appHeader}>To-do App</h1>
      <NewTask />
      <TasksList />
      <TasksSummary />
      <NewUser />
      <UsersList />
    </div>
  );
}

export default App;
