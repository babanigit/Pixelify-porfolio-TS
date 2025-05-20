"use client";

import Image from "next/image";
import { projects } from "@/assets/Project";
import { ThemeDataType } from "@/assets/theme";

import mario from "../../assets/png/mario.png"; // Make sure this is imported properly
import heart from "../../assets/png/heart.png"; // Make sure this is imported properly

// interface Iprops {
//   theme: ThemeDataType;
// }

const ProjectPage = () => {
  const GH = "<GitHub Link/>";

  return (
    <>
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4 p-4">
        
        {/* Side Image */}
        <div className="flex flex-col items-center justify-center bg-red-400/50 rounded-full p-4">
          <Image
            src={heart}
            alt="heart"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="text-2xl mt-2">Top Three Projects</div>
        </div>

        {/* Project Cards */}
        <div className="md:col-span-5 grid gap-4">
          {projects.page1.map((pro, index) => (
            <div
              key={index}
              // style={{ borderColor: theme.text }}
              className="border-2 p-4 rounded-3xl w-full"
            >
              <div className="text-center text-2xl font-semibold">
                {pro.title}
              </div>
              <div className="text-right text-xl italic">
                {pro.language_used}
              </div>
              <div className="my-2">
                <a
                  href={pro.project_link}
                  target="_blank"
                  rel="noreferrer"
                  // style={{ borderColor: theme.text }}
                  className="border rounded-md px-3 py-1 inline-block"
                >
                  {GH}
                </a>
              </div>
              <div className="text-lg grid gap-1">
                <div>{pro.dev1}</div>
                <div>{pro.dev2}</div>
                <div>{pro.dev3}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4 p-4">
        {/* Side Image */}
        <div className="flex items-center justify-center bg-red-400/50 bg-opacity-50 rounded-full p-4">
          <Image
            src={mario}
            alt="mario"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Project Cards */}
        <div className="md:col-span-5 grid gap-4">
          {projects.page2.map((pro2, index) => (
            <div
              key={index}
              // style={{ borderColor: theme.text }}
              className="border-2 p-4 rounded-3xl w-full"
            >
              <div className="text-center text-2xl font-semibold">
                {pro2.title}
              </div>
              <div className="text-right text-xl italic">
                {pro2.language_used}
              </div>
              <div className="my-2">
                <a
                  href={pro2.project_link}
                  target="_blank"
                  rel="noreferrer"
                  // style={{ borderColor: theme.text }}
                  className="border rounded-md px-3 py-1 inline-block"
                >
                  {GH}
                </a>
              </div>
              <div className="text-lg grid gap-1">
                <div>{pro2.dev1}</div>
                <div>{pro2.dev2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
