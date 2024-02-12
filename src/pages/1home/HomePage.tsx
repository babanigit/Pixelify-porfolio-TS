// import React from "react";
// import Header from "../../components/1header/Header";

import { ThemeDataType } from "../../assets/theme";
import Header2 from "../../components/1header/Header2";

interface datatype {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const HomePage = ({ theme, setTheme }: datatype) => {
  return (
    <div>
      <Header2 theme={theme} setTheme = {setTheme} />
      {/* <Header theme={theme} setTheme={setTheme} /> */}
    </div>
  );
};

export default HomePage;
