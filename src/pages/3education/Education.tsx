import React from "react";
import HeaderPart1 from "../../components/1header/HeaderPart1";
import Headerpart2 from "../../components/1header/Headerpart2";
import HeaderPart3 from "../../components/1header/HeaderPart3";

import { ThemeDataType } from "../../assets/theme";
import EducationIntro from "../../conteners/3degreeCertificate/EducationIntro";
import Certificate from "../../conteners/3degreeCertificate/Certificate";
import Degree from "../../conteners/3degreeCertificate/Degree";

interface Iprop {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}
const Education = ({ theme, setTheme }: Iprop) => {
  return (
    <>
      <div
      // style={{background:theme.body}}
      >
        <div>
          <HeaderPart1 theme={theme} />
          <Headerpart2 theme={theme} setTheme={setTheme} />
          <HeaderPart3 theme={theme} />
        </div>

        <div>
          <EducationIntro theme={theme} />
          <Degree theme={theme} />
          <Certificate theme={theme} />
        </div>
      </div>
    </>
  );
};

export default Education;
