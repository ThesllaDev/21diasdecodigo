import { useEffect, useState } from "react";

import HeaderProject from "../../../components/HeaderProject";

import styles from "./challenge-17.module.scss";

export default function KeyBoardEvents() {
  const [keyPressed, setKeyPressed] = useState("");
  const [keyEvent, setKeyEvent] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    setKeyPressed(e.key);

    if (e.key === " ") {
      setKeyPressed("Space");
    }

    setKeyEvent(e.code);
  };

  return (
    <>
      <HeaderProject
        id="17"
        title="Desenvolva um site que capture os eventos do teclado e exiba na tela o evento e a tecla pressionada"
      />
      <main className={styles.main}>
        <h1 className="text-center">Pressione uma tecla do seu teclado para ser exibida</h1>
        <output>
          <h2>Tecla: {keyPressed}</h2>
          <h3>Evento: {keyEvent}</h3>
        </output>
      </main>
    </>
  );
}
