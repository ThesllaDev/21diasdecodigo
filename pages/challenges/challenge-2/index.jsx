import HeaderProject from "../../../components/HeaderProject";
import styles from "../challenge-2/challenge-2.module.scss";

export default function HelloWorldPage() {
  const challengeId = 2;
  const challengeTitle =
    "Faça um Hello World customizado com fontes, cores e imagens";

  return (
    <>
      <HeaderProject id={challengeId} title={challengeTitle} />
      <main className={styles.container}>
        <h1 className={styles.glitch} data-text="Hello World!">
          Hello World!
        </h1>
      </main>
    </>
  );
}
