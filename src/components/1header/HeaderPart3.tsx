import React from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";

interface Iprops {
  theme: ThemeDataType;
}

const HeaderPart3 = ({ theme }: Iprops) => {
  const contact = "<Contact and Resume/>";
  const eduCert = "<Education and Certification/>";
  const project = "<Projects/>";
  const home = "<Home/>";

  return (
    <>
      <div className=" bg-red-400 w-screen h-14 fixed bottom-0 bg-opacity-0 grid grid-flow-col justify-between items-center px-3 text-xl ">
        <div>
          <div>
            <NavLink to="/projects">{project}</NavLink>
          </div>
          <div>
            <NavLink to="/eduCert">{eduCert}</NavLink>
          </div>
        </div>
        <div className=" grid text-right">
          <div>
            <NavLink to="/home">{home}</NavLink>
          </div>
          <div>
            <NavLink to="/contact">{contact}</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPart3;
