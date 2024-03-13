import React,{useEffect} from "react";
// import Header from "../../components/1header/Header";
import { useLocation } from 'react-router-dom';


import { ThemeDataType } from "../../assets/theme";
import Header from "../../components/1header/Header";
// import HeaderPart1 from "../../components/1header/HeaderPart1";
// import Headerpart2 from "../../components/1header/Headerpart2";
import HeaderPart3 from "../../components/1header/HeaderPart3";

import Greeting from "../../conteners/1greeting/Greeting";
import Skills from "../../conteners/2skills/Skills";

interface datatype {
  theme: ThemeDataType;
  // setTheme: (value: string) => void;
}

const HomePage = ({ theme }: datatype) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div>
        <Header theme={theme} />
        {/* <HeaderPart1 theme={theme} />
        <Headerpart2 theme={theme} setTheme={setTheme} /> */}
        <HeaderPart3 theme={theme} />
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
