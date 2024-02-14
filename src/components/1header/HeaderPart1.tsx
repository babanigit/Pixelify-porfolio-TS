import React from "react";
import { ThemeDataType } from "../../assets/theme";

interface Iprops {
  theme: ThemeDataType;
  // setTheme:(value:string) => void;
}

const HeaderPart1 = ({ theme }: Iprops) => {
  return (
    <>
      <div
        // style={{background:theme.body}}
        className="  fixed top-0 left-0 w-[150px] h-[50px] bg-emerald-20 grid grid-flow-col  justify-center items-center text-xl"
      >
        <div>
          <button>Aniket</button>
        </div>
      </div>
    </>
  );
};

export default HeaderPart1;
