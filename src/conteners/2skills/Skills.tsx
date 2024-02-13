import React from "react";
import { ThemeDataType } from "../../assets/theme";

interface Iprops {
  theme: ThemeDataType;
}

const Skills = ({ theme }: Iprops) => {
  return (
    <>
      <div className=" h-screen w-screen grid gap-4   grid-cols-4 grid-flow-col">
        <div className=" grid justify-center items-center col-span-1 text-5xl p-8">
          Here's what I do...
        </div>
        <div className=" col-span-3 grid gap-4 grid-rows-6 justify-center items-center">
          <div className=" gird row-span-1"></div>
          <div className=" text-2xl">~ MERN Stack Development</div>
          <div className=" text-2xl">~ Building responsive website using NEXT.js and typeSCRIPT</div>
          <div className=" text-2xl">~ Developing mobile applications using REACT native</div>
          <div className=" text-2xl">~ Integrating APIs</div>
          <div className=" gird row-span-1"></div>

        </div>
      </div>
    </>
  );
};

export default Skills;
