import React from "react";
// import HeaderPart1 from "../../components/1header/HeaderPart1";
// import Headerpart2 from "../../components/1header/Headerpart2";
import HeaderPart3 from "../../components/1header/HeaderPart3";

import { ThemeDataType } from "../../assets/theme";
import ContactMe from "../../conteners/4contactMe/ContactMe";
import Header from "../../components/1header/Header";
interface Iprops {
  theme: ThemeDataType;
  // setTheme: (value: string) => void;
}
const Contact = ({ theme,}: Iprops) => {
  return (
    <>
      <div>
        <div>
          {/* <HeaderPart1 theme={theme} /> */}
          <Header theme={theme} />
          <HeaderPart3 theme={theme} />
        </div>
        <div>
          <ContactMe  theme={theme} />
        </div>
      </div>
    </>
  );
};

export default Contact;
