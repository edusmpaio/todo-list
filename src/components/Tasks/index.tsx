import { Task } from "../Task";
import { taskType } from "../../App";

import styles from "./tasks.module.css";

type tasksProps = {
  tasks: taskType[];
  completeTaskById: (taskId: string) => void;
  deleteTaskById: (taskId: string) => void;
};

export function Tasks({ tasks, completeTaskById, deleteTaskById }: tasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            completeTaskById={completeTaskById}
            deleteTaskById={deleteTaskById}
          />
        ))}
      </div>
    </section>
  );
}
