"use client"; // Required for usePathname & useEffect in app directory

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import EducationIntro from "../../conteners/3degreeCertificate/EducationIntro";
import Certificate from "../../conteners/3degreeCertificate/Certificate";
import Degree from "../../conteners/3degreeCertificate/Degree";

interface Iprop {
  theme: any; // Replace with correct type if available
}

const Education = ({ theme }: Iprop) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <EducationIntro  />
      {/* <Degree theme={theme} />
      <Certificate theme={theme} /> */}
    </div>
  );
};

export default Education;
