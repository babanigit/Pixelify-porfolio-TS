import React from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";

interface Iprops {
  theme: ThemeDataType;
  // setTheme:(value:string) => void;
}

const HeaderPart1 = ({ theme }: Iprops) => {
  const name = "<Aniket/>"
  return (
    <>
      <div
        style={{background:theme.body}}
        className="  fixed top-0 left-0 w-[150px] h-[50px] bg-opacity-0 grid grid-flow-col  justify-center items-center text-xl"
      >
        <div>
          <button><NavLink to="/"> {name} </NavLink></button>
        </div>
      </div>
    </>
  );
};

export default HeaderPart1;
