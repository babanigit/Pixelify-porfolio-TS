"use client";

import React from "react";
import { FaTools } from "react-icons/fa";

const skills = {
  Languages: [
    "C/C++/C#",
    "Java Collections",
    "TypeScript/JavaScript",
    "Python",
    "SQL",
    "HTML/CSS",
  ],
  Frameworks: [
    "ASP.NET",
    "Angular",
    "Next.js",
    "Django",
    "Express.js",
    "Node.js",
    "React Native",
  ],
  Libraries: [
    "React.js",
    "Redux",
    "Axios",
    "Socket.io",
    "Tailwind CSS",
    "Chart.js/Highcharts",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "SSMS"],
  Tools: [
    "AWS EC2",
    "Postman",
    "Git",
    "Docker",
    "Firebase",
    "Linux/BASH",
    "Chrome DevTools",
  ],
  Concepts: [
    "MVC",
    "SSR",
    "Computer Networking (OSI/TCP/IP)",
    "JWT Authentication",
    "WebSockets",
  ],
};

const Skills = () => {
  return (
    <div className="h-auto w-full grid grid-cols-4 place-items-center p-3">
      {/* Skills Info Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        <div className="text-4xl">Skills</div>

        <div className="w-[70%] grid gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border-2 rounded-md p-4 bg-white/10 backdrop-blur-md"
            >
              <div className="text-2xl font-semibold mb-2">{category}</div>
              <div className="flex flex-wrap gap-3">
                {(items as string[]).map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-200/70 text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Icon/Visual Section */}
      <div className="grid place-items-center bg-yellow-400/50 h-full w-full rounded-full p-4">
        <FaTools size={64} />
        <div className="text-4xl mt-2">Skills</div>
      </div>
    </div>
  );
};

export default Skills;
