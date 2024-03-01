import React from "react";
import { ThemeDataType } from "../../assets/theme";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";

interface dataType {
  theme: ThemeDataType;
}

const Greeting = ({theme}: dataType) => {
  // const code = "</>";
  return (
    <>
      <div className=" h-screen w-full grid grid-cols-3  md:grid-cols-1 md:grid-rows-3">
        <div className="  h-full w-full grid col-span-2 gap-3 md:gap-8 place-items-center place-content-center md:row-span-2   ">
          <div className=" h-full w-full grid  place-items-center place-content-center gap-3 md:gap-1 grid-flow-col md:grid-flow-row   ">
            I'm <div className=" text-5xl font-bold">Aniket Panchal.</div>{" "}
            Developer <div className=" text-3xl font-bold">and</div> Digital
            Artist.
          </div>
          <div  className=" w-full h-full md:px-7"><SocialLinks theme={theme}/></div>
        </div>

        <div
        className= " h-full w-full grid justify-center items-center col-span-1 md:row-span-2  bg-red-400 bg-opacity-50 ">
        <img
          className=" w-28 grid justify-center items-center "
          src={require(`../../assets/png/mincraft3.png`)}
          alt="profile"
        /> 
        </div>
      </div>
    </>
  );
};

export default Greeting;
