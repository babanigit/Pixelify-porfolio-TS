"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "./ProjectCard";

const Projects_Client = () => {
  // const pathname = usePathname();
  const searchParams = useSearchParams(); // ← get the query params

  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [searchTag, setSearchTag] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/assets/data/getProjects.json");
      // const res = await fetch("https://gist.githubusercontent.com/babanigit/fdf26ec31d044caccefc83d4349b5a67/raw/3f047a10b72b20a32adf30301a5df77f35de4098/getProjects.json");

      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const techFromURL = searchParams!.get("tech");
    if (techFromURL) {
      setSelectedTech(techFromURL);
    }
  }, [searchParams]);

  // Extract unique tech stack options
  const techOptions = [
    "All",
    ...new Set(
      projects
        .flatMap((project) => project.tech_stack.split(","))
        .map((s) => s.trim())
    ),
  ];

  // Filter projects based on tag search and tech stack dropdown
  const filteredProjects = projects.filter((project) => {
    const tagMatch = project.tags!.some((tag) =>
      tag.toLowerCase().includes(searchTag.toLowerCase())
    );
    const techMatch =
      selectedTech === "All" ||
      project.tech_stack.toLowerCase().includes(selectedTech.toLowerCase());
    return tagMatch && techMatch;
  });

  const router = useRouter();

  return (
    <div className="px-6 md:px-32 py-12 space-y-8">
      {/* Back Button - top-left */}
      <div className="w-full max-w-4xl flex justify-start mb-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search by Tag */}
        <input
          type="text"
          placeholder="Search by tag (e.g., JWT, MongoDB)..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
        />

        {/* Filter by Tech Stack */}
        <div className="flex flex-row gap-3  place-items-center w-full md:w-1/3">
          <label
            htmlFor="techStackSelect"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Filter by Tech Stack
          </label>
          <select
            id="techStackSelect"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            {techOptions.map((tech, i) => (
              <option key={i} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* project card */}
      <ProjectCard project={filteredProjects} limit={filteredProjects.length} />

    </div>
  );
};

export default Projects_Client;
