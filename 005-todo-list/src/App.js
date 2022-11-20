import React from "react";
import { NewTask } from "./components/NewTask/NewTask";
import { TasksList } from "./components/TasksList/TasksList";
import { TasksSummary } from "./components/TasksSummary/TasksSummary";

function App() {
  return (
    <>
      <NewTask />
      <TasksList />
      <TasksSummary />
    </>
  );
}

export default App;
