import { Task } from "../Task";

import styles from "./tasks.module.css";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      <div className={styles.taskList}>
        <Task />
        <Task />
      </div>
    </section>
  );
}
