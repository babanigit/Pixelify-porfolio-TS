import React from "react";

interface IProjectProp {
    project: ProjectItem[],
    limit: number
}

const ProjectCard = ({ project, limit }: IProjectProp) => {
    return (
        <>
            {/* Project Cards */}
            <div className="md:col-span-5 grid gap-6 ">
                {project.slice(0, limit).map((project, index) => (
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
            </div>
        </>
    );
};

export default ProjectCard;
