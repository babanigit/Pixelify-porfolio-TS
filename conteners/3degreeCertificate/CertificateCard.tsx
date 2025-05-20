"use client";

import React, { useState } from "react";
// import { ThemeDataType } from "../../../assets/theme";
import { Certification } from "../../assets/CertificateLinks";

interface Iprops {
  // theme: ThemeDataType;
  certprop: Certification;
}

const CertificateCard = ({ certprop }: Iprops) => {
  const [trigg, setTrigg] = useState(false);

  return (
    <div
      // style={{ borderColor: theme.text }}
      className="w-auto h-auto place-items-center grid grid-flow-row border-2 rounded-md p-3 "
    >
      <div className="grid place-items-center text-3xl">{certprop.title}</div>

      <div className="grid place-items-center">
        <div>{certprop.dev1}</div>
        <div>{certprop.dev2}</div>
      </div>

      <div className="w-full flex justify-end">
        <button
          // style={{ borderColor: theme.text, backgroundColor: theme.body }}
          className="border rounded-md px-[2%]"
        >
          <a
            href={certprop.certificate_link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            PDF Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
