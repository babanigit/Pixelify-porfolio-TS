"use client";

import Image from "next/image";
// import { ThemeDataType } from "../../../assets/theme";
import mincraft4 from "../../assets/png/mincraft4.png";

// interface Iprops {
//   theme: ThemeDataType;
// }

const EducationIntro = () => {
  return (
    <div className="h-screen w-full grid grid-flow-col grid-cols-3 p-3">
      <div className="bg-blue-20 grid col-span-2 grid-flow-row text-center items-center py-[26%] px-3">
        <div className="text-6xl">Education</div>
        <div className="text-3xl">Basic Qualification and Certifications</div>
        <div className="text-xl">
          I actively participate in Hackathons, LeetCode and other tech-related
          activities. Below are some of my major certifications.
        </div>
      </div>

      <div className="bg-red-20 grid justify-center items-center bg-green-400 bg-opacity-50 rounded-full">
        <Image
          className="w-28"
          src={mincraft4}
          width={112}
          height={112}
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default EducationIntro;
