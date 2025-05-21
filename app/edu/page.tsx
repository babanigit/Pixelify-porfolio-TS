"use client"; // Required for usePathname & useEffect in app directory

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import EducationIntro from "../../containers/3degreeCertificate/EducationIntro";
import Certificate from "../../containers/3degreeCertificate/Certificate";
import Degree from "../../containers/EducationAndCertificates";

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
      <Degree  />
      <Certificate  />
    </div>
  );
};

export default Education;
