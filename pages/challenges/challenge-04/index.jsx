import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import Keypad from "./components/Keypad/Keypad";
import Buttons from "./components/Buttons/Buttons";
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "/", "*"],
  ["RESET", "="],
];

export default function Calculator() {
  return (
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
  );
}
