import React from "react";
import { ThemeDataType } from "../../assets/theme";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";

interface dataType {
  theme: ThemeDataType;
}

const Greeting = ({theme}: dataType) => {
  const code = "</>";
  return (
    <>
      <div className=" h-screen w-full grid grid-cols-3 md:h-screen sm:grid-flow-row ">
        <div className=" grid col-span-2  place-content-center gap-5 ">
          <div className=" h-full w-full grid  place-items-center gap-3 grid-flow-col  ">
            I'm <div className=" text-5xl font-bold">Aniket Panchal.</div>{" "}
            Developer <div className=" text-3xl font-bold">and</div> Digital
            Artist.
          </div>
          <div ><SocialLinks theme={theme}/></div>
        </div>

        <div
        // style={{opacity:theme.bg1}}
        className= {" h-full w-full grid justify-center items-center  col-span-1 bg-red-400 bg-opacity-50 " + { }}>
        <img
          className=" w-28 grid justify-center items-center "
          src={require(`../../assets/png/mincraft3.png`)}
          alt="profile image"
        /> 
        </div>
      </div>
    </>
  );
};

export default Greeting;
