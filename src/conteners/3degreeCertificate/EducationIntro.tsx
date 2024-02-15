import React from "react";
import { ThemeDataType } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}
const EducationIntro = ({ theme }: Iprops) => {
  return (
    <div className=" h-screen w-screen grid grid-flow-col grid-cols-3 ">
      <div className=" bg-blue-20 grid col-span-2 grid-flow-row text-center items-center py-[26%]">
        <div className=" text-6xl">Education</div>
        <div className=" text-3xl">Basic Qualification and Certifications</div>
        <div className=" text-xl">
          I actively participate in Hackathons, LeetCode and other tech-related
          activities.Below are some of my major certifications.
        </div>
      </div>

      <div className=" bg-red-20 grid  justify-center items-center">hello</div>
    </div>
  );
};

export default EducationIntro;
