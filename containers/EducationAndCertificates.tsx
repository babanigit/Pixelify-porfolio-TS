"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import marioImage from "@/assets/png/mario2.png";

import {
  ICertificate,
  IEducation,
  IEducationAndCertificate,
} from "@/models/educationAndCertificate";

const EducationAndCertificate = () => {
  const universityWebsiteLabel = "<University Website/>";
  const certificateLabel = "<Certificate/>";

  const [education, setEducation] = useState<IEducation[]>([]);
  const [certificate, setCertificate] = useState<ICertificate[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/babanigit/6e1f45b979154bc109323ef4afafa909/raw/977bd6f4415b0e038d55357796994aa2910d58d6/getEduAndCerti.json"
      );
      const data: IEducationAndCertificate = await res.json();
      setEducation(data.Educations);
      setCertificate(data.Certificates);
    };

    fetchEducation();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 p-4 bg-gray-50">
      {/* Left Section: Education + Certificates */}
      <div className="md:col-span-3 flex flex-col items-center gap-6 order-2 md:order-1">
        {/* Education Section */}
        <div className="text-3xl font-bold text-center">Education</div>

        {education.length > 0 ? (
          education.map((edu, index) => (
            <div
              key={index}
              className="w-full max-w-xl border-2 border-purple-500/50 rounded-md p-4 gap-2 grid bg-white hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">{edu.title}</div>
                <div className="text-sm text-gray-600">{edu.year}</div>
              </div>
              <div className="text-center text-lg">{edu.subtitle}</div>
              <div className="space-y-1 text-gray-700 text-sm">
                {edu.details.map((point, i) => (
                  <div key={i}>- {point}</div>
                ))}
              </div>

              <div className="flex flex-wrap justify-end items-center gap-4 text-sm mt-2">
                <div className="group">
                  <Link
                    href={edu.Uni_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-blue-600/80 transition-colors duration-300"
                  >
                    {universityWebsiteLabel}
                    <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href={edu.Certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-blue-600/80 transition-colors duration-300"
                  >
                    {certificateLabel}
                    <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                  </Link>
                </div>
                {edu.grade && <div className="text-gray-600">{edu.grade}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>Loading education data...</div>
        )}

        {/* Certificate Section */}
        <div className="text-3xl font-bold text-center mt-4">
          Certifications
        </div>
        {certificate.length > 0 ? (
          certificate.map((cert, index) => (
            <div
              key={index}
              className="w-full max-w-xl border-2 border-purple-500/50 rounded-md p-4 bg-white hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="grid gap-2">
                <div className="text-2xl font-semibold text-center">
                  {cert.title}
                </div>
                <div className="text-lg text-center text-gray-600">
                  {cert.subtitle}
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Issued By:</strong> {cert.issued_by}
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Issue Date:</strong> {cert.issue_date}
                </div>

                <div className="text-sm text-gray-700 space-y-1">
                  {cert.description.map((point, i) => (
                    <div key={i}>• {point}</div>
                  ))}
                </div>

                <div className="text-sm mt-2">
                  <strong>Skills:</strong>{" "}
                  <span className="italic text-blue-600">
                    {cert.skills.join(", ")}
                  </span>
                </div>

                <div className="flex justify-end group">
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noreferrer"
                    className="group-hover:text-blue-600/80 transition-colors duration-300"
                  >
                    {certificateLabel}
                    <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No certificates found.</div>
        )}
      </div>

      {/* Right Icon/Visual Section */}
      <div className=" hidden md:grid place-items-center bg-purple-500/50 h-32 w-32 sm:h-40 sm:w-40 md:h-full md:w-full rounded-full p-3 sm:p-4 order-1 md:order-2 shadow-lg">
        <Image
          className="object-cover rounded-full"
          src={marioImage}
          width={100}
          height={100}
          alt="profile image"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 140px"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default EducationAndCertificate;
