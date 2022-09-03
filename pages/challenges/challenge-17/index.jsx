import { useEffect, useState } from "react";

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

    console.log(e.key);
    console.log(e.code);
  };

  return (
    <main className={styles.main}>
      <h1>Pressione uma tecla do seu teclado para ser exibida</h1>
      <output>
        <h2>Tecla: {keyPressed}</h2>
        <h3>Evento: {keyEvent}</h3>
      </output>
    </main>
  );
}
