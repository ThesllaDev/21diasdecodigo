import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";

import { Textfit } from "react-textfit";

import styles from "./Screen.module.scss";

export default function Screen() {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className={styles.screen} max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
}
