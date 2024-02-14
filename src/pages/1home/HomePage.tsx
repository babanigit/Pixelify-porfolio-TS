// import React from "react";
// import Header from "../../components/1header/Header";

import { ThemeDataType } from "../../assets/theme";
import HeaderPart1 from "../../components/1header/HeaderPart1";
import Headerpart2 from "../../components/1header/Headerpart2";
import Greeting from "../../conteners/1greeting/Greeting";
import Skills from "../../conteners/2skills/Skills";

interface datatype {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const HomePage = ({ theme, setTheme }: datatype) => {
  return (
    <div>
      <div>
        <HeaderPart1 theme={theme} />
        <Headerpart2 theme={theme} setTheme={setTheme} />
      </div>
      <div>
        <Greeting theme={theme} />
      </div>
      <div>
        <Skills theme={theme} />
      </div>
    </div>
  );
};

export default HomePage;
