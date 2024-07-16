import styles from "./Keypad.module.scss";

export default function Keypad({ children }) {
  return <section className={styles.keypad}>{children}</section>;
}
