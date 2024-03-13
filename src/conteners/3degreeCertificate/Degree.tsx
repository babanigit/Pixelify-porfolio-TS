import React from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";

import { education } from "../../assets/EducationLinks";

interface Iprops {
  theme: ThemeDataType;
}
const Degree = ({ theme }: Iprops) => {
  const web = "<University Website/>";
  return (
    <>
      {/* add place-items-center to place all child div in center */}
      <div className=" h-screen w-full grid grid-flow-col grid-cols-4 place-items-center p-3">
        <div className=" grid place-items-center bg-red-400 bg-opacity-50  h-full w-full place-content-center rounded-full ">
          <div>
            <img
              className=" w-36 "
              src={require(`../../assets/png/mario2.png`)}
              alt="profile_img"
            />
          </div>
          <div className="text-4xl "> Degree </div>
        </div>

        <div className="grid col-span-3 place-items-center w-full gap-3">

          {education.map((edu) => {
            return (
              <>
                <div
                  style={{ borderColor: theme.text }}
                  className=" grid h-auto w-[70%] border-2 rounded-md p-[2%] "
                >
                  <div className="  w-full grid  text-3xl grid-flow-col font-bold">
                    <div>{edu.title} </div>
                    <div className=" grid justify-end" > {edu.year} </div>
                  </div>
                  <div className="  bg-red-40 grid justify-center items-center text-2xl">
                    {edu.subtitle}
                  </div>
                  <div className="  bg-red-40 grid justify-start items-center text-xl ">
                    <div>
                     {edu.dev1}
                    </div>
                    <div>
                      {edu.dev2}
                    </div>
                  </div>
                  <div className="  bg-red-40 grid justify-end items-center p-[2%]">
                    <NavLink to={edu.link}> {web} </NavLink>{" "}
                  </div>
                </div>
              </>
            );
          })}


        </div>

      </div>
    </>
  );
};

export default Degree;
