"use client";

import React from "react";
import Image from "next/image";
// import { ThemeDataType } from "../../../assets/theme";
import CertificateCard from "./CertificateCard";
import { certificate } from "../../assets/CertificateLinks";

import certImg from "../../assets/png/mincraft1.png";

// interface Iprops {
//   theme: ThemeDataType;
// }

const Certificate = () => {
  return (
    <div className="h-screen w-full grid grid-flow-col place-items-center grid-cols-4 p-3">
      {/* Certificate Cards */}
      <div className="grid col-span-3 place-items-center w-full h-full px-2">
        <div className="grid gap-4">
          {certificate.certifications.map((cert) => (
            <div key={cert.title} className="place-items-center grid">
              <CertificateCard certprop={cert} />
            </div>
          ))}
        </div>
      </div>

      {/* Right-side Image */}
      <div className="grid place-items-center bg-yellow-400/50 h-full w-full place-content-center rounded-full">
        <div>
          <Image
            className="w-20"
            src={certImg}
            alt="certificate image"
            width={80}
            height={80}
          />
        </div>
        <div className="text-4xl">Certificates</div>
      </div>
    </div>
  );
};

export default Certificate;
