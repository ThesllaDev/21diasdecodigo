import { useContext } from "react";
import { CalcContext } from "../../../pages/challenges/challenge-4/context/CalcContext";

import styles from "./Screen.module.scss";

export default function Screen() {
  const { calc } = useContext(CalcContext);

  return <div className={styles.screen}>{calc.num ? calc.num : calc.res}</div>;
}
