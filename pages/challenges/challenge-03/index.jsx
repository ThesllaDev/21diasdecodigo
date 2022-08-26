import styles from "./challenge-03.module.scss";

export default function AnimatedButton() {
  return (
    <main className={styles.container}>
      <a href="#" className={styles.btn_pixeled}>
        Pixel Button
      </a>
    </main>
  );
}
