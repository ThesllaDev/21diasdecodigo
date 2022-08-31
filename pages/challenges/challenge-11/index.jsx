import Image from "next/image";
import MicrosoftLogo from "./img/microsoft_logo.svg";
import IconSignInOptions from "./img/signin-options.svg";

import styles from "./challenge-11.module.scss";

export default function Login() {
  return (
    <main className={styles.main}>
      <section className={styles.login}>
        <header>
          <Image src={MicrosoftLogo} alt="Microsoft Logo" />
        </header>
        <h1>Entrar</h1>
        <input type="text" placeholder="Email, telefone ou Skype" />
        <p>
          Não tem uma conta? <a href="#">Crie uma!</a>
        </p>
        <a href="#">Não consegue acessar sua conta?</a>
        <footer>
          <button className={styles.btn__back}>Voltar</button>
          <button className={styles.btn__advance}>Avançar</button>
        </footer>
      </section>
      <section className={styles.options}>
        <Image src={IconSignInOptions} alt="Key Icon Sign in options" />
        <h2>Opções de entrada</h2>
      </section>
    </main>
  );
}
