import React from "react";
import { ThemeDataType } from "../../assets/theme";
import CertificateCard from "./CertificateCard";
import { certificate } from "../../assets/CertificateLinks";
interface Iprops {
  theme: ThemeDataType;
}

const Certificate = ({ theme }: Iprops) => {
  return (
    <div className=" h-screen w-full grid grid-flow-col place-items-center grid-cols-4">
      <div className="grid col-span-3 place-items-center w-full h-full  px-2  ">
        <div className=" grid gap-4 ">
          {certificate.certifications.map((cert) => {
            return (
              <>
                <div className=" place-items-center grid ">
                  <CertificateCard
                    key={cert.title}
                    certprop={cert}
                    theme={theme}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className=" grid place-items-center bg-yellow-400 bg-opacity-50 h-full w-full place-content-center ">
        <div>
          <img
            className=" w-20"
            src={require(`../../assets/png/mincraft1.png`)}
            alt="profile image"
          />
        </div>
        <div className="text-4xl">Certificates</div>
      </div>
    </div>
  );
};

export default Certificate;
