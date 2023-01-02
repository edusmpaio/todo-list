import { taskType } from "../../App";

import { HiOutlineTrash } from "react-icons/hi";
import checkIcon from "../../assets/check-icon.svg";

import styles from "./task.module.css";

type taskProps = {
  task: taskType;
  completeTaskById: (taskId: string) => void;
};

export function Task({ task, completeTaskById }: taskProps) {
  function onComplete() {
    completeTaskById(task.id);
  }

  return (
    <div className={styles.task}>
      <button onClick={onComplete} className={styles.checkButton}>
        {task.isCompleted ? <img src={checkIcon} alt="check" /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.completed : ""}>{task.title}</p>
      <button className={styles.deleteButton}>
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
}
