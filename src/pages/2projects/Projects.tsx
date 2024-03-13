import React,{useEffect} from "react";
import { ThemeDataType } from "../../assets/theme";
// import HeaderPart1 from "../../components/1header/HeaderPart1";
// import Headerpart2 from "../../components/1header/Headerpart2";
import HeaderPart3 from "../../components/1header/HeaderPart3";
import ProjectPage from "../../conteners/5projectcontents/ProjectPage";
import Header from "../../components/1header/Header";
// import ProjectPage2 from "../../conteners/5projectcontents/ProjectPage2";

import { useLocation } from 'react-router-dom';


interface Iprops {
  theme: ThemeDataType;
  // setTheme: (value: string) => void;
}

const Projects = ({ theme, }: Iprops) => {

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return (
    <>
      <div>
        <div>
          {/* <HeaderPart1 theme={theme} /> */}
          <Header theme={theme}/>
          <HeaderPart3 theme={theme} />
        </div>
        <div className="">
          <ProjectPage theme={theme} />
          {/* <ProjectPage2 theme={theme} /> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
