import styles from "./task.module.css";

import { HiOutlineTrash } from "react-icons/hi";
import checkIcon from "../../assets/check-icon.svg";

export function Task() {
  const isCompleted = false;

  return (
    <div className={styles.task}>
      <button className={styles.checkButton}>
        {isCompleted ? <img src={checkIcon} alt="check" /> : <div />}
      </button>
      <p className={isCompleted ? styles.completed : ""}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </p>
      <button className={styles.deleteButton}>
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
}
