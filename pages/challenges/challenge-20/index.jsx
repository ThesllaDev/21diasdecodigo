import { useState } from "react";

import styles from "./challenge-20.module.scss";
import HeaderProject from "../../../components/HeaderProject";

export default function EmojiPicker() {
  const [copySuccess, setCopySuccess] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setSelectedEmoji(copyMe);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <>
      <HeaderProject
        id="20"
        title="Desenvolva um site de emoji picker. Ao selecionar o emoji, é copiado para a área de transferência"
      />
      <main className={styles.main}>
        <section className={styles.emojis}>
          <h2 className="font-bold text-xl">
            Select the emoji below to copy to clipboard
          </h2>
          <div className={styles.emoji}>
            <button onClick={() => copyToClipBoard("🎉")}>🎉</button>
            <button onClick={() => copyToClipBoard("📚")}>📚</button>
            <button onClick={() => copyToClipBoard("🐛")}>🐛</button>
            <button onClick={() => copyToClipBoard("✨")}>✨</button>
            <button onClick={() => copyToClipBoard("💚")}>💚</button>
            <button onClick={() => copyToClipBoard("⚡")}>⚡</button>
            <button onClick={() => copyToClipBoard("📦")}>📦</button>
            <button onClick={() => copyToClipBoard("♻️")}>♻️</button>
            <button onClick={() => copyToClipBoard("💄")}>💄</button>
            <button onClick={() => copyToClipBoard("🧪")}>🧪</button>
          </div>
          <p>
            {copySuccess} {selectedEmoji}{" "}
          </p>
          <textarea
            name="pasteEmoji"
            id="pasteEmoji"
            cols="30"
            rows="5"
          ></textarea>
        </section>
      </main>
    </>
  );
}
