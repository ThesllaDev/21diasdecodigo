import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";

import styles from "./Buttons.module.scss";

export default function Buttons({ value }) {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const handleClickBtn = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const handleClick = () => {
    const results = {
      ".": commaClick,
      "/": signClick,
      "-": signClick,
      "+": signClick,
      "*": signClick,
      "=": equalClick,
      RESET: resetClick,
      DEL: resetClick,
    };

    results[value] ? results[value]() : handleClickBtn();
  };

  return (
    <button onClick={handleClick} className={styles.buttons}>
      {value}
    </button>
  );
}
