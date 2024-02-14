import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ThemeDataType } from "../../assets/theme";

interface Iprops {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const Headerpart2 = ({ theme, setTheme }: Iprops) => {
  const [currTheme, setCurrTheme] = useState(theme.name);

  function changeTheme() {
    if (currTheme === "light") {
      setTheme("dark");
      // localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      setTheme("light");
      // localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  return (
    <>
      <div
        style={{ background: theme.body }}
        className="  fixed top-0 right-0 w-[200px] h-[50px] bg-emerald-20 grid grid-flow-col  justify-evenly items-center text-xl"
      >
        <div>
          <button>div 1</button>
        </div>
        <div>
          <button onClick={changeTheme}>
            {theme.name === "light" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Headerpart2;
