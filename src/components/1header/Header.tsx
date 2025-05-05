import { useState, useContext } from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";
import { SetThemeContext } from "../../App";

interface Iprops {
  theme: ThemeDataType;
  // setTheme: (value: string) => void;
}

const Header = ({ theme }: Iprops) => {
  const [currTheme, setCurrTheme] = useState(theme.name);

  const setT = useContext(SetThemeContext);

  function changeTheme() {
    if (currTheme === "light") {
      setT("dark");
      // localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      setT("light");
      // localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const name = "<Aniket/>";

  return (
    <>
      <div className="  w-screen h-14 fixed top-0 bg-opacity-0 grid grid-flow-col justify-between items-center px-3 text-xl ">
        <div>
          <div>
            <NavLink to="/">{name}</NavLink>
          </div>
        </div>
        <div className=" grid text-right">
          <button onClick={changeTheme}>
            {theme.name === "light" ? "<darkTheme/>" : "<lightTheme/>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
