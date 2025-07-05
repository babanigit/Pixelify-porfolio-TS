"use client";

import Image from "next/image";
// import { projects } from "@/assets/Project";

import mario from "@/assets/png/mario.png"; // Make sure this is imported properly
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import GetAllProjectButton from "@/components/GetAllProjectButton";
import ProjectCard from "@/components/ProjectCard";

const ProjectPage = () => {
  const GH = "<GitHub Link/>";

  const [project, setProject] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/babanigit/fdf26ec31d044caccefc83d4349b5a67/raw/3f047a10b72b20a32adf30301a5df77f35de4098/getProjects.json"
      );
      const data = await res.json();

      setProject(data);
    };

    fetchEducation();
  }, []);

  // const router = useRouter();

  return (
    <>
      <div className=" w-full flex justify-center items-center gap-3 ">
        <h1 className="text-4xl"> Projects</h1>{" "}
        <div>
          <GetAllProjectButton />
        </div>{" "}
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-4 p-4">
        {/* Side Image */}
        <div className="flex flex-col items-center justify-center bg-green-400/50 rounded-full p-4">
          <Image
            src={mario}
            alt="mario"
            width={100}
            height={100}
            className="object-contain"
          />
          {/* <div className="text-2xl mt-2">Top Three Projects</div> */}
        </div>

        {/* project card */}
        <ProjectCard project={project} limit={3} />

        <div className=" flex justify-center w-screen">
          <GetAllProjectButton />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
