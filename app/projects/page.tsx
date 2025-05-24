"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Projects = () => {
  // const pathname = usePathname();
  const searchParams = useSearchParams(); // ← get the query params

  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [searchTag, setSearchTag] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/assets/data/getProjects.json");
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

      {/* Project Cards */}
      <div className="md:col-span-5 grid gap-6">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border-2 p-5 rounded-lg hover:shadow-md transition-all duration-300"
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
                {project.tags?.map((tag, i) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
