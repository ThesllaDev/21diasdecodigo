import HeaderProject from "../../../components/HeaderProject";
import styles from "./challenge-03.module.scss";

export default function AnimatedButton() {
  return (
    <>
      <HeaderProject id="3" title="Crie um botão animado" />
      <main className={styles.container}>
        <button className={styles.btn_pixeled}>Pixel Button</button>
      </main>
    </>
  );
}
