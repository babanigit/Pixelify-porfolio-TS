"use client";

import Image from "next/image";
import { projects } from "@/assets/Project";

import mario from "../assets/png/mario.png"; // Make sure this is imported properly
import heart from "../assets/png/heart.png"; // Make sure this is imported properly
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProjectPage = () => {
  const GH = "<GitHub Link/>";

  const [project, setProject] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await fetch("/assets/data/getProjects.json");
      const data = await res.json();

      console.log("project data is:- ", data);

      setProject(data);
    };

    fetchEducation();
  }, []);

  const router = useRouter();

  return (
    <>
      <div className=" w-full flex justify-center items-center gap-3 ">
        <h1 className="text-4xl"> Projects</h1>{" "}
        <div>
          <button
            className=" border-2 p-2 rounded-2xl bg-green-400/40 cursor-grab "
            onClick={() => router.push(`/projects`)}
          >
            Get all Projects
          </button>
        </div>{" "}
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4 p-4">
        {/* Side Image */}
        <div className="flex flex-col items-center justify-center bg-red-400/50 rounded-full p-4">
          {/* <Image
            src={heart}
            alt="heart"
            width={100}
            height={100}
            className="object-contain"
          /> */}
          {/* <div className="text-2xl mt-2">Top Three Projects</div> */}
        </div>

        {/* Project Cards */}
        <div className="md:col-span-5 grid gap-6">
          {project.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="border-2 p-5 rounded-lg  hover:shadow-md transition-all duration-300"
            >
              <div className="text-center text-3xl font-semibold mb-2">
                {project.title}
              </div>

              <div className="text-right text-sm italic text-gray-600 mb-3">
                {project.date_created}
              </div>

              <div className="text-base font-medium text-indigo-600 mb-2">
                Tech Stack: {project.tech_stack}
              </div>

              <div className="mb-3">
                {project.description.map((line, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">
                    • {line}
                  </p>
                ))}
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags!.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Status:</span> {project.status}
              </div>

              <div className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Highlight:</span>{" "}
                {project.highlight}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
                >
                  View on GitHub
                </a>

                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
                  >
                    Live Link
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className=" flex justify-center ">
            <button
              className=" border-2 p-2 rounded-2xl bg-green-400/40 cursor-grab "
              onClick={() => router.push(`/projects`)}
            >
              Get all Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
