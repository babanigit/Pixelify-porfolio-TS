"use client";

import Image from "next/image";
import mario4 from "../../assets/png/mario4.png"; // Make sure this is imported properly

// import { ThemeDataType } from "@/assets/theme";

// interface Iprops {
//   theme: ThemeDataType;
// }

const Skills = () => {
  return (
    <div className="w-full min-h-screen grid gap-6 grid-rows-auto md:grid-cols-4 md:grid-rows-1 p-4">
      {/* Image and Intro Section */}
      <div className="md:col-span-1 flex flex-col justify-center items-center bg-pink-400/50 p-6 rounded-full">
        <Image
          src={mario4}
          alt="profile"
          width={100}
          height={100}
          className="mb-4"
        />
        <h2 className="text-center text-3xl font-semibold">
          Here's what I do...
        </h2>
      </div>

      {/* Skills Section */}
      <div className="md:col-span-3 grid gap-4 justify-center items-center text-center text-lg md:text-2xl">
        <p>~ MERN Stack Development</p>
        <p>~ Building responsive websites using Next.js and TypeScript</p>
        <p>~ Developing mobile applications using React Native</p>
        <p>~ Integrating APIs</p>
      </div>
    </div>
  );
};

export default Skills;
