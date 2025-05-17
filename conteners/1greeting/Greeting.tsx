"use client";

import Image from "next/image";
// import { ThemeDataType } from "../../../assets/theme"; // Adjust path if needed
import SocialLinks from "../../components/3SocialLinks/SocialLinks";
import mincraft3 from "../../assets/png/mincraft3.png"; // Make sure this is imported properly

// interface DataType {
//   theme: ThemeDataType;
// }

const Greeting = () => {
  return (
    <div className="h-screen w-full grid md:grid-cols-3 grid-cols-1 grid-rows-3 p-3">
      <div className="md:h-screen h-full w-full grid md:col-span-2 gap-6 md:gap-3 place-items-center place-content-center row-span-2 text-center md:text-left">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
          <span className="text-2xl md:text-3xl">I'm</span>
          <span className="text-4xl md:text-5xl font-bold text-blue-600">
            Aniket Panchal.
          </span>
        </div>

        {/* Subheading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
          <span className="text-2xl md:text-3xl">
            <u>Full Stack Developer</u>
          </span>
          <span className="text-xl md:text-3xl font-bold">and</span>
          <span className="text-2xl md:text-3xl">
            <u>Digital Artist.</u>
          </span>
        </div>

        {/* Social Links */}
        <SocialLinks/>
      </div>

      <div className="md:h-screen h-full w-full grid justify-center items-center col-span-1 md:row-span-2 bg-red-400/50 rounded-full">
        <Image
          className="w-28 grid justify-center items-center"
          src={mincraft3}
          alt="profile"
          width={112}
          height={112}
        />
      </div>
    </div>
  );
};

export default Greeting;
