"use client"; // Required for usePathname & useEffect in app directory

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import EducationIntro from "@/containers/EducationIntro";
import Certificate from "@/containers/Certificate";
import Degree from "@/containers/EducationAndCertificates";


const Education = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <EducationIntro  />
      <Degree  />
      <Certificate  />
    </div>
  );
};

export default Education;
