import { createContext, useState } from "react";

export const CalcContext = createContext();

export default function CalcProvider({ children }) {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = { calc, setCalc };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
}
