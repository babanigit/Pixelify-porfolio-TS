"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
// import { ThemeDataType } from "@/assets/theme";

// import HeaderPart3 from "@/components/1header/HeaderPart3";
import ProjectPage from "@/containers/ProjectPage";
// import Header from "@/components/1header/Header";

// interface IProps {
//   theme: ThemeDataType;
// }

const Projects = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
 
      <ProjectPage  />
    </div>
  );
};

export default Projects;
