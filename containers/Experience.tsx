"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import expImg from "../assets/png/mario.png"; // Add a new image or reuse marioImage

const experience = {
  role: "Angular Developer, Internship",
  duration: "July 2024 - September 2024",
  company: "Markets Mojo, Stock Research Organization, Mumbai",
  github: "https://github.com/babanigit/markets_mojo_v16",
  highlights: [
    "Migrated old Angular pages to Angular 16 + TypeScript, boosting performance.",
    "Integrated Highcharts for Data Visualization, improving insights by 30%.",
    "Leveraged Chrome DevTools to enhance debugging and profiling efficiency.",
  ],
};

const Experience = () => {
  return (
    <div className="h-auto w-full grid grid-cols-4 place-items-center p-3">
      {/* Profile Image Section */}
      <div className="grid place-items-center bg-purple-400/50 h-full w-full rounded-full p-4">
        <Image
          className="w-36"
          src={expImg}
          alt="experience image"
          width={144}
          height={144}
        />
        <div className="text-4xl mt-2">Experience</div>
      </div>

      {/* Experience Info Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        <div className="text-4xl">Experience</div>

        <div className="grid h-auto w-[70%] border-2 rounded-md p-6 space-y-4">
          <div className="grid grid-cols-2 text-3xl font-bold">
            <div>{experience.role}</div>
            <div className="text-right">{experience.duration}</div>
          </div>

          <div className="text-2xl text-center">{experience.company}</div>

          <div className="text-left text-lg space-y-2 list-disc list-inside">
            {experience.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </div>

          <div className="text-right text-blue-600 underline">
            <Link
              href={experience.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
