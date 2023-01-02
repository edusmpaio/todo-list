import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export type taskType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
