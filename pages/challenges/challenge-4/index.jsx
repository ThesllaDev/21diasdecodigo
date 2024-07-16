import Wrapper from "../../../components/challenge-4-components/Wrapper/Wrapper";
import Screen from "../../../components/challenge-4-components/Screen/Screen";
import Keypad from "../../../components/challenge-4-components/Keypad/Keypad";
import Buttons from "../../../components/challenge-4-components/Buttons/Buttons";
import CalcProvider from "./context/CalcContext";
import HeaderProject from "../../../components/HeaderProject";

const btnValues = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "/", "*"],
  ["RESET", "="],
];

export default function Calculator() {
  return (
    <>
      <HeaderProject id="04" title="Crie uma calculadora" />
      <CalcProvider>
        <Wrapper>
          <Screen />
          <Keypad>
            {btnValues.flat().map((btn, i) => (
              <Buttons key={i} value={btn}></Buttons>
            ))}
          </Keypad>
        </Wrapper>
      </CalcProvider>
    </>
  );
}
