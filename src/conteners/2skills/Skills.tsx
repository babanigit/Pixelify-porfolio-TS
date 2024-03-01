import React from "react";
import { ThemeDataType } from "../../assets/theme";

interface Iprops {
  theme: ThemeDataType;
}

const Skills = ({ theme }: Iprops) => {
  return (
    <>
      <div className=" h-screen w-full grid gap-4 grid-cols-4 md:grid-cols-1 grid-flow-col md:grid-flow-row md:grid-rows-3">
        <div className=" grid md:col-span-3 place-items-center place-content-center p-8 bg-pink-400 bg-opacity-50 md:m-3   ">
          <div >
            <img
              className=" w-28 grid justify-center items-center "
              src={require(`../../assets/png/mario4.png`)}
              alt="profile"
            />
          </div>
          <div className=" grid md:grid-flow-row place  w-auto h-auto text-4xl ">
            Here's what I do...
          </div>
        </div>

        <div className=" col-span-3 md:row-span-2 grid gap-4 grid-rows-6 justify-center items-center">
          <div className=" gird row-span-1"></div>
          <div className=" text-2xl">~ MERN Stack Development</div>
          <div className=" text-2xl">
            ~ Building responsive website using NEXT.js and typeSCRIPT
          </div>
          <div className=" text-2xl">
            ~ Developing mobile applications using REACT native
          </div>
          <div className=" text-2xl">~ Integrating APIs</div>
          <div className=" gird row-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
