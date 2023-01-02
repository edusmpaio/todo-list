import { useState, FormEvent } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import todoLogo from "../../assets/logo.svg";

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
      <img src={todoLogo} alt="ToDo Logo" />
      <form onSubmit={handleNewTaskAddition}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
