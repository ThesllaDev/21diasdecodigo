import { useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function MainContainer({ children }) {
  const [toggleTheme, setToggleTheme] = useState(false);

  const toggleDarkMode = () => {
    setToggleTheme(!toggleTheme);
  };

  return (
    <div
      className={toggleTheme ? "bg-white text-black" : "bg-black text-white"}
    >
      <Menu theme={toggleDarkMode} />
      <>{children}</>
      <Footer />
    </div>
  );
}

export default MainContainer;
