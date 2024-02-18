import React from "react";
import { ThemeDataType } from "../../assets/theme";
import { Certification } from "../../assets/CertificateLinks";
interface Iprops {
  theme: ThemeDataType;
  certprop: Certification;
}
const CertificateCard = ({ theme, certprop }: Iprops) => {
  return (
    <>
      <div>
        <div
          style={{ borderColor: theme.text }}
          className=" w-auto h-auto grid grid-flow-row border border-3 px-[3%] py-[2%] "
        >
          <div className=" grid justify-center items-center text-3xl">
            {certprop.title}{" "}
          </div>
          <div className="  grid place-items-center">
            <div>{certprop.dev1} </div>
            <div>
            {certprop.dev2}
            </div>
          </div>
          <div className=" w-full flex justify-end   ">
            {/* <div
              style={{ borderColor: theme.text }}
              className=" border-3 border w-[10%] h-[50%] items-center justify-center flex"
            > */}
              <a href={certprop.certificate_link}
                            style={{ borderColor: theme.text }}

              className=" border border-spacing-2 px-[2%] "  target="_blank" >
                pdf Link
              </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateCard;
