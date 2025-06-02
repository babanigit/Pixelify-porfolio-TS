import Projects_Client from "@/components/Projects_Client";
import React, { Suspense } from "react";

const Projects = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects_Client />
      </Suspense>
    </div>
  );
};

export default Projects;
