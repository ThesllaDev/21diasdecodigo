import styles from "../challenge-02/challenge-02.module.scss";

export default function HelloWorld() {
  return (
    <main className={styles.container}>
      <h1 className={styles.glitch} data-text="hello world!">
        hello world!
      </h1>
    </main>
  );
}
