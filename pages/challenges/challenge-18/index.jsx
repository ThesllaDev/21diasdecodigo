import { useRef, useState } from "react";

import styles from "./challenge-18.module.scss";

import { generatePassword } from "./utils/form.util";

export default function PasswordGenerator() {
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();

  const [password, setPassword] = useState("********");

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
    <form onSubmit={handleSubmit} className={styles.main}>
      <h1>Generate a secure password</h1>
      <section>
        <h2>{password}</h2>
        <div className={styles.container}>
          <label htmlFor="number">Password Lenght: </label>
          <input
            type="number"
            max={72}
            min={8}
            name="password-length"
            ref={lengthRef}
            style={{ maxWidth: "6ch" }}
          />
          <div className={styles.container__options}>
            <label htmlFor="numbers">Include numbers? </label>
            <input type="checkbox" name="numbers" ref={numberRef} />
          </div>
          <div className={styles.container__options}>
            <label htmlFor="symbols">Include symbols? </label>
            <input type="checkbox" name="symbols" ref={symbolsRef} />
          </div>
          <button className="btn">Generate</button>
        </div>
      </section>
    </form>
  );
}
