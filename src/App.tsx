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

  function completeTaskById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks
        tasks={tasks}
        completeTaskById={completeTaskById}
        deleteTaskById={deleteTaskById}
      />
    </>
  );
}

export default App;
