import { useRef, useState } from "react";

import styles from "./challenge-18.module.scss";

import { generatePassword } from "../../../public/utils/form.util";
import HeaderProject from "../../../components/HeaderProject";

export default function PasswordGenerator() {
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();

  const [passwordLenght, setPasswordLenght] = useState(8);

  const [password, setPassword] = useState("********");

  const handleChange = (e) => {
    setPasswordLenght(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPassword = generatePassword(
      numberRef.current.checked,
      symbolsRef.current.checked,
      lengthRef.current.value || 8
    );

    setPassword(newPassword);
  };

  return (
    <>
      <HeaderProject
        id="18"
        title="Desenvolva um gerador de senhas aleatórias"
      />
      <form onSubmit={handleSubmit} className={styles.main}>
        <h1>Generate a random password</h1>
        <section>
          <h2>{password}</h2>
          <div className={styles.container}>
            <label htmlFor="number">Password Lenght: {passwordLenght}</label>
            <input
              type="number"
              max={72}
              min={8}
              name="password-length"
              ref={lengthRef}
              style={{ maxWidth: "6ch" }}
              value={passwordLenght}
              onChange={handleChange}
            />
            <div className={styles.container__options}>
              <label htmlFor="numbers">Include numbers? </label>
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                ref={numberRef}
              />
            </div>
            <div className={styles.container__options}>
              <label htmlFor="symbols">Include symbols? </label>
              <input
                type="checkbox"
                name="symbols"
                id="symbols"
                ref={symbolsRef}
              />
            </div>
            <button className="btn">Generate</button>
          </div>
        </section>
      </form>
    </>
  );
}
