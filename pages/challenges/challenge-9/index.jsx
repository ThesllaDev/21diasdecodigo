import HeaderProject from "../../../components/HeaderProject";
import styles from "./challenge-09.module.scss";

export default function Loading() {
  return (
    <>
      <HeaderProject id="9" title="Crie uma animação de loading" />
      <main className={styles.container}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </main>
    </>
  );
}
