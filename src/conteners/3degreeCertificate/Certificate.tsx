import React from "react";
import { ThemeDataType } from "../../assets/theme";
import CertificateCard from "./CertificateCard";
import { certificate } from "../../assets/CertificateLinks";
interface Iprops {
  theme: ThemeDataType;
}

const Certificate = ({ theme }: Iprops) => {
  return (
    <div className=" h-screen w-screen  grid grid-flow-col grid-cols-4 place-items-center">
      <div className=" grid col-span-3  w-[90%] h-[75%]  items-center gap-[2%] p-[2%]  ">
        {certificate.certifications.map((cert) => {
          return (
            <>
              <CertificateCard key={cert.title} certprop={cert} theme={theme} />
            </>
          );
        })}
      </div>
      <div className=" grid place-items-center">
        <div>
          <img
            className=" w-20"
            src={require(`../../assets/png/mario3.png`)}
            alt="profile image"
          />
        </div>
        <div className="text-4xl">Certification</div>
      </div>
    </div>
  );
};

export default Certificate;
