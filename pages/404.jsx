import Image from "next/image";
import Error404 from "../public/Scarecrow.png";

import styles from "./404.module.scss";

export default function Custom404() {
  return (
    <>
      <header className={styles.page__header}>
        <h2>404 NOT FOUND</h2>
      </header>
      <main className={styles.main__content}>
        <Image
          src={Error404}
          alt="Error 404 image with a scarecrow and the numbers 404"
          className={styles.main__content__image}
        />
        <section>
          <h1 className={styles.main__content__title}>
            I have bad news for you
          </h1>
          <p className={styles.main__content__description}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <a href="./" className={styles.main__content__btn__homepage}>
            BACK TO HOMEPAGE
          </a>
        </section>
      </main>
      <footer className={styles.page__footer}>
        created by <a href="https://github.com/ThesllaDev">ThesllaDev</a> -{" "}
        <a
          href="http://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          devChallenges.io
        </a>
      </footer>
    </>
  );
}
