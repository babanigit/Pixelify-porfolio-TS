"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { ThemeDataType } from "../../../assets/theme";
import { education } from "../../assets/EducationLinks";

import marioImage from "../../assets/png/mario2.png";

import CertificateCard from "./CertificateCard";
import { certificate } from "../../assets/CertificateLinks";

// interface Iprops {
//   theme: ThemeDataType;
// }

const Degree = () => {
  const web = "<University Website/>";

  return (
    <div className="h-auto w-full grid grid-flow-col grid-cols-4 place-items-center p-3">
      {/* Education Info Section */}
      <div className="grid col-span-3 place-items-center w-full gap-3">
        <div className="text-4xl">Education</div>
        {education.map((edu, index) => (
          <div
            key={index}
            // style={{ borderColor: theme.text }}
            className="grid h-auto w-[70%] border-2 rounded-md p-[2%]"
          >
            <div className="w-full grid text-3xl grid-flow-col font-bold">
              <div>{edu.title}</div>
              <div className="grid justify-end">{edu.year}</div>
            </div>
            <div className="grid justify-center items-center text-2xl">
              {edu.subtitle}
            </div>
            <div className="grid justify-start items-center text-xl">
              <div>{edu.dev1}</div>
              <div>{edu.dev2}</div>
            </div>
            <div className="grid justify-end items-center p-[2%]">
              <Link href={edu.link} target="_blank" rel="noopener noreferrer">
                {web}
              </Link>
            </div>
          </div>
        ))}

        <div className="text-4xl">Certifications</div>

        {certificate.certifications.map((cert) => (
          <div key={cert.title} className="grid h-auto w-[70%] ">
            <CertificateCard certprop={cert} />
          </div>
        ))}
      </div>

      {/* right Profile Section */}
      <div className="grid place-items-center bg-red-400/50 h-full w-full place-content-center rounded-full">
        <div>
          <Image
            className="w-36"
            src={marioImage}
            alt="profile_img"
            width={144}
            height={144}
          />
        </div>
        <div className="text-4xl">Degree</div>
      </div>
    </div>
  );
};

export default Degree;
