"use client";
import React, { useEffect, useState } from "react";
import { ExperienceItem } from "@/models/experence";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const vg = "<View GitHub/>";

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
    <div className="bg-gray-50 w-full px-4 sm:px-8 py-6">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Experience</h2> */}

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-2  border-green-500/50 rounded-md p-4 gap-2 grid bg-white hover:shadow-lg hover:border-blue-500/50   shadow-sm  transition duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-600 italic">
                {exp.duration}
              </span>
            </div>

            {/* Company + Location */}
            <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-base text-gray-700 mb-2">
              <span className="font-medium text-blue-600">
                {"<" + exp.company + "/>"}
              </span>
              <span>{exp.location}</span>
            </div>

            {/* Tech Stack */}
            {exp.techStack && exp.techStack.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Highlights */}
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800 mb-2">
              {exp.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* GitHub Link */}
            {exp.github && (
              <div className="group w-fit">
                <div className="flex flex-col items-start w-fit">
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 sm:px-0 sm:py-0 bg-gray-100 sm:bg-transparent rounded-lg sm:rounded-none hover:bg-gray-200 sm:hover:bg-transparent text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm sm:text-base font-medium"
                  >
                    <Github size={16} className="sm:hidden" />
                    <span className="hidden sm:inline">
                      &lt;View on GitHub/&gt;
                    </span>
                    <span className="sm:hidden">View on GitHub</span>
                    <ExternalLink size={14} className="opacity-70 sm:hidden" />
                  </a>

                  {/* Underline animation only on desktop */}
                  <span className="hidden sm:block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300 w-full"></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
