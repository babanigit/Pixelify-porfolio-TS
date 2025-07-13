import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface IProjectProp {
  project: ProjectItem[];
  limit: number;
}

const ProjectCard = ({ project, limit }: IProjectProp) => {
  return (
    <>
      {/* Project Cards Container */}
      <div className="md:col-span-5 w-full">
        {/* Grid Layout - Responsive */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1">
          {project.slice(0, limit).map((project, index) => (
            <div
              key={index}
              className="border-2 border-green-500/50 p-4 sm:p-5 md:p-6 rounded-lg hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 bg-white h-fit"
            >
              {/* Project Title */}
              <div className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-gray-800 line-clamp-2">
                {project.title}
              </div>

              {/* Date */}
              <div className="text-right text-xs sm:text-sm italic text-gray-600 mb-3 sm:mb-4">
                {project.date_created}
              </div>

              {/* Tech Stack */}
              <div className="text-sm sm:text-base font-medium text-indigo-600 mb-3 sm:mb-4">
                <span className="block sm:inline">Tech Stack:</span>
                <span className="block sm:inline sm:ml-2 font-normal text-gray-700 mt-1 sm:mt-0">
                  {project.tech_stack}
                </span>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-5">
                {project.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 last:mb-0"
                  >
                    <span className="text-indigo-500 mr-2">•</span>
                    {line}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mb-4 sm:mb-5">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags!.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-blue-200 hover:bg-blue-200 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status and Highlight */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Status:</span>
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      project.status?.toLowerCase() === "completed"
                        ? "bg-green-100 text-green-800"
                        : project.status?.toLowerCase() === "in progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">
                    Highlight:
                  </span>
                  <span className="ml-2 text-gray-700">
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* GitHub Link */}
                <div className="group">
                  <a
                    href={project.project_link}
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
                  <span className="hidden sm:block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                </div>

                {/* Live Link */}
                {project.live_link && (
                  <div className="group">
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 sm:px-0 sm:py-0 bg-blue-100 sm:bg-transparent rounded-lg sm:rounded-none hover:bg-blue-200 sm:hover:bg-transparent text-blue-700 hover:text-blue-600 transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                      <ExternalLink size={16} className="sm:hidden" />
                      <span className="hidden sm:inline">
                        &lt;Live Link/&gt;
                      </span>
                      <span className="sm:hidden">Live Demo</span>
                      <ExternalLink
                        size={14}
                        className="opacity-70 sm:hidden"
                      />
                    </a>
                    <span className="hidden sm:block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {project.length === 0 && (
          <div className="text-center py-12 sm:py-16 text-gray-500">
            <div className="text-4xl sm:text-5xl mb-4">📁</div>
            <p className="text-lg sm:text-xl font-medium mb-2">
              No projects found
            </p>
            <p className="text-sm sm:text-base">
              Check back later for updates!
            </p>
          </div>
        )}

        {/* Show More Indicator */}
        {project.length > limit && (
          <div className="text-center mt-8 sm:mt-12 text-gray-500">
            <p className="text-sm sm:text-base">
              Showing {limit} of {project.length} projects
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
