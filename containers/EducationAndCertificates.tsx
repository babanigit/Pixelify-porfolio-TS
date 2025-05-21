"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import marioImage from "../assets/png/mario2.png";
import CertificateCard from "./3degreeCertificate/CertificateCard";
import { EducationItem } from "@/models/education";
import { CertificationItem } from "@/models/certificate";

const EducationAndCertificate = () => {
  const universityWebsiteLabel = "<University Website/>";
  const certificateLabel = "<Certificate/>";

  const [education, setEducation] = useState<EducationItem[]>([]);
  const [certificate, setCertificate] = useState<CertificationItem[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await fetch("/assets/data/getEducations.json");
      const data = await res.json();

      console.log("education data is:- ", data);

      setEducation(data);

      const res2 = await fetch("/assets/data/getCertificates.json");
      const data2 = await res2.json();

      console.log("certificate data is:- ", data2);

      setCertificate(data2);
    };

    fetchEducation();
  }, []);

  return (
    <div className="h-auto w-full grid grid-flow-col grid-cols-4 place-items-center p-3">
      {/* Left: Education + Certificate Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        {/* Education Section */}
        <div className="text-4xl  mb-2">Education</div>

        {education.length > 0 ? (
          education.map((edu, index) => (
            <div
              key={index}
              className="grid w-[70%] border-2 rounded-md p-4 gap-2"
            >
              <div className="flex justify-between text-3xl font-bold">
                <div>{edu.title}</div>
                <div>{edu.year}</div>
              </div>
              <div className="text-2xl text-center">{edu.subtitle}</div>
              <div className="text-base space-y-1">
                {edu.details.map((point, i) => (
                  <div key={i}>- {point}</div>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <Link
                  href={edu.Uni_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {universityWebsiteLabel}
                </Link>
                <Link
                  href={edu.Certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {certificateLabel}
                </Link>
                {edu.grade && <div>{edu.grade}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>Loading education data...</div>
        )}

        {/* Certificate Section */}
        <div className="text-4xl mt-4">Certifications</div>
        {certificate && certificate.length > 0 ? (
          certificate.map((cert, index) => (
            <div key={index} className="w-[70%] border-2 p-4 rounded-md mb-4">
              <div className="grid gap-2">
                <div className="text-3xl font-semibold text-center">
                  {cert.title}
                </div>
                <div className="text-2xl text-center text-gray-600">
                  {cert.subtitle}
                </div>

                <div className="text-lg font-medium">
                  Issued By: {cert.issued_by}
                </div>
                <div className="text-sm text-gray-500">
                  Issue Date: {cert.issue_date}
                </div>

                <div className="text-base space-y-1">
                  {cert.description.map((point, i) => (
                    <div key={i}>• {point}</div>
                  ))}
                </div>

                <div className="text-base mt-2">
                  <strong>Skills:</strong>{" "}
                  <span className="italic text-blue-600">
                    {cert.skills.join(", ")}
                  </span>
                </div>

                <div className="flex justify-end">
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1 border rounded-md text-blue-600 hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No certificates found.</div>
        )}
      </div>

      {/* Right: Profile Section */}
      <div className="grid place-items-center bg-red-400/50 h-full w-full rounded-full">
        {/* <Image
          className="w-36 rounded-full"
          src={marioImage}
          alt="profile_img"
          width={144}
          height={144}
        /> */}
        <div className="text-4xl mt-2 font-bold">Education & Certificate</div>
      </div>
    </div>
  );
};

export default EducationAndCertificate;
