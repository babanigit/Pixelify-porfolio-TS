"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExperienceItem } from "@/models/experence";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const vg: string = "<github/>";

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch("assets/data/getExperience.json");
        const data: ExperienceItem[] = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error("Failed to fetch experience data:", err);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="h-auto w-full grid grid-cols-4 place-items-center p-3">
      {/* Experience Info Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        <div className="text-4xl">Experience</div>

        {/* map will come here */}

        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="grid h-auto w-[70%] border-2 rounded-md p-6 space-y-4 bg-white/10 backdrop-blur-md">
              <div className="grid grid-cols-2 ">
                <div className="text-3xl font-bold">{exp.role}</div>
                <div className="text-right">{exp.duration}</div>
              </div>

              <div className="flex justify-center text-xl text-center group">
                <Link
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-blue-600/80 transition-colors duration-300"
                >
                  {"<" + exp.company + "/>"}
                  <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                </Link>
              </div>

              <div className="text-center text-md text-gray-500">
                {exp.location}
              </div>

              <div className="flex flex-wrap gap-2 justify-center text-sm text-white/80">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-300/80 text-black px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-left space-y-2 list-disc list-inside">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {exp!.github && (
                <div className="flex justify-end">
                  <div className="text-right flex justify-center group ">
                    <Link
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:text-blue-600/80 transition-colors duration-300"
                    >
                      {vg}
                      <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* image section  */}
      <div className="grid place-items-center bg-purple-400/50 h-full w-full rounded-full p-4">
        <Image
          className="w-36"
          src={`/assets/png/mario.png`}
          alt="experience image"
          width={144}
          height={144}
        />
        {/* <div className="text-4xl mt-2">Experience</div> */}
      </div>
    </div>
  );
};

export default Experience;
