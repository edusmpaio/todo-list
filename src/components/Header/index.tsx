import { AiOutlinePlusCircle } from "react-icons/ai";

import todoLogo from "../../assets/logo.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="ToDo Logo" />
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
