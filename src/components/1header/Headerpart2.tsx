import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
        className="  fixed top-0 right-0 w-[200px] h-[50px] grid grid-flow-col  place-items-center text-xl"
      >
        {/* <div>
          <div>div1</div>
          <div ><NavLink to="/projects">
            project
            </NavLink></div>


         
        </div> */}
        <div>
          <button onClick={changeTheme}>
            {theme.name === "light" ? "<darkTheme/>" : "<lightTheme/>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Headerpart2;
