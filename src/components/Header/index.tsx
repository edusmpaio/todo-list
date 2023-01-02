import { useState, FormEvent } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";

type headerProps = {
  addTask: (taskTitle: string) => void;
};

export function Header({ addTask }: headerProps) {
  const [title, setTitle] = useState("");

  function handleNewTaskAddition(e: FormEvent) {
    e.preventDefault();

    if (title !== "") addTask(title);

    setTitle("");
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>to-do list</h1>
      <form onSubmit={handleNewTaskAddition}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          <span>Criar</span>
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
