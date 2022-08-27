import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
}
