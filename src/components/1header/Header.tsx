import React,{useState} from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";

interface Iprops {
  theme: ThemeDataType;
  setTheme:(value:string)=>void
}

const Header = ({ theme,setTheme }: Iprops) => {


    const name = "<Aniket/>"


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
      <div className=" bg-red-400 w-screen h-14 fixed top-0 bg-opacity-0 grid grid-flow-col justify-between items-center px-3 text-xl ">
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
