"use client";
import React, { useEffect, useState } from "react";
import { ExperienceItem } from "@/models/experence";
import Link from "next/link";

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
    <div className="w-full px-4 sm:px-8 py-6">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Experience</h2> */}

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-600 italic">{exp.duration}</span>
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
              <div className="mt-2 group">
                <Link
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                >
                  {vg}
                  <span className="block h-0.5 bg-blue-600 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
