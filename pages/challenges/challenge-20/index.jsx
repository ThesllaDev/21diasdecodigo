import { useState } from "react";

import styles from "./challenge-20.module.scss";

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
    <main className={styles.main}>
      <section className={styles.emojis}>
        <h2>Select the emoji below to copy to clipboard</h2>
        <div className={styles.emoji}>
          <button onClick={() => copyToClipBoard("๐")}>๐</button>
          <button onClick={() => copyToClipBoard("๐")}>๐</button>
          <button onClick={() => copyToClipBoard("๐")}>๐</button>
          <button onClick={() => copyToClipBoard("โจ")}>โจ</button>
          <button onClick={() => copyToClipBoard("๐")}>๐</button>
          <button onClick={() => copyToClipBoard("โก")}>โก</button>
          <button onClick={() => copyToClipBoard("๐ฆ")}>๐ฆ</button>
          <button onClick={() => copyToClipBoard("โป๏ธ")}>โป๏ธ</button>
          <button onClick={() => copyToClipBoard("๐")}>๐</button>
          <button onClick={() => copyToClipBoard("๐งช")}>๐งช</button>
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
  );
}
