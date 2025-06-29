"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceItem {
  role: string;
  duration: string;
  company: string;
  location: string;
  github: string;
  companyLink: string;
  techStack: string[];
  highlights: string[];
  image: string;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

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
              <div className="grid grid-cols-2 text-3xl font-bold">
                <div>{exp.role}</div>
                <div className="text-right">{exp.duration}</div>
              </div>

              <div className="text-2xl text-center">
                <Link
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {exp.company}
                </Link>
              </div>

              <div className="text-center italic text-md text-gray-200">
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

              <ul className="text-left text-lg space-y-2 list-disc list-inside">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="text-right text-blue-600 underline">
                <Link
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </Link>
              </div>
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
