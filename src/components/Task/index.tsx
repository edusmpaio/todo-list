import { taskType } from "../../App";

import { HiOutlineTrash } from "react-icons/hi";
import checkIcon from "../../assets/check-icon.svg";

import styles from "./task.module.css";

type taskProps = {
  task: taskType;
};

export function Task({ task }: taskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkButton}>
        {task.isCompleted ? <img src={checkIcon} alt="check" /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.completed : ""}>{task.title}</p>
      <button className={styles.deleteButton}>
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
}
