"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { education } from "../../assets/EducationLinks";
import { certificate } from "../../assets/CertificateLinks";

import marioImage from "../../assets/png/mario2.png";
import CertificateCard from "./CertificateCard";

const EducationAndCertificate = () => {
  const universityWebsiteLabel = "<University Website/>";

  return (
    <div className="h-auto w-full grid grid-flow-col grid-cols-4 place-items-center p-3">
      {/* Left: Education + Certificate Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        {/* Education Section */}
        <div className="text-4xl  mb-2">Education</div>
        {education && education.length > 0 ? (
          education.map((edu, index) => (
            <div
              key={index}
              className="grid w-[70%] border-2 rounded-md p-4 gap-2 "
            >
              <div className="flex justify-between text-3xl font-bold">
                <div>{edu.title}</div>
                <div>{edu.year}</div>
              </div>
              <div className="text-2xl text-center">{edu.subtitle}</div>
              <div className="text-xl">
                <div>{edu.dev1}</div>
                <div>{edu.dev2}</div>
              </div>
              <div className="flex justify-end">
                <Link
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {universityWebsiteLabel}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No education data available.</div>
        )}

        {/* Certificate Section */}
        <div className="text-4xl  mt-4">Certifications</div>
        {certificate && certificate.certifications.length > 0 ? (
          certificate.certifications.map((cert) => (
            <div
              key={cert.title}
              className="w-[70%] border-2 p-3 rounded-md"
            >
              <CertificateCard certprop={cert} />
            </div>
          ))
        ) : (
          <div>No certificates found.</div>
        )}
      </div>

      {/* Right: Profile Section */}
      <div className="grid place-items-center bg-red-400/50 h-full w-full rounded-full">
        <Image
          className="w-36 rounded-full"
          src={marioImage}
          alt="profile_img"
          width={144}
          height={144}
        />
        <div className="text-4xl mt-2 font-bold">Education & Certificate</div>
      </div>
    </div>
  );
};

export default EducationAndCertificate;
