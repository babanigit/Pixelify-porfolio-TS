// import React from "react";
// import Header from "../../components/1header/Header";

import { ThemeDataType } from "../../assets/theme";
import Header2 from "../../components/1header/Header2";
import Greeting from "../../conteners/1greeting/Greeting";
import Skills from "../../conteners/2skills/Skills";

interface datatype {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const HomePage = ({ theme, setTheme }: datatype) => {
  return (
    <div className="">
      <div className=" z-30 top-0  sticky ">
        <Header2 theme={theme} setTheme={setTheme} />
      </div>
      <div className="z-0 top-0">
        <Greeting theme={theme}  />
      </div>
      <div>
        <Skills theme={theme} />
      </div>
      {/* <Header theme={theme} setTheme={setTheme} /> */}
    </div>
  );
};

export default HomePage;
