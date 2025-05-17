import React, { useState } from "react";
// import Popup from "reactjs-popup";
import { ThemeDataType } from "../../../assets/theme";
import { Certification, certificate } from "../../../assets/CertificateLinks";
import PopupCertification from "./PopupCertification";
interface Iprops {
  theme: ThemeDataType;
  certprop: Certification;
}
const CertificateCard = ({ theme, certprop }: Iprops) => {
  const [trigg, setTrigg] = useState(false);

  return (
    <div
      style={{ borderColor: theme.text }}
      className=" w-[80%] h-auto place-items-center grid grid-flow-row border-2 rounded-md  px-[3%] py-[2%] "
    >
      <div className=" grid place-items-center text-3xl">
        {certprop.title}{" "}
      </div>
      <div className="  grid place-items-center">
        <div>{certprop.dev1} </div>
        <div>{certprop.dev2}</div>

      </div>
      <div className=" w-full flex justify-end   ">
        {/* <a
              href={certprop.certificate_link}
              style={{ borderColor: theme.text }}
              className=" border border-spacing-2 px-[2%] "
              target="_blank"
            >
              pdf Link
            </a> */}
        <button
          style={{ borderColor: theme.text,  backgroundColor:theme.body }}
          className=" border  rounded-md  px-[2%] "
          // onClick={() => setTrigg(!trigg)}
        >
           <a
                        href={certprop.certificate_link}
                        style={{ borderColor: theme.text }}
                        // className=" border border-spacing-2 px-[2%] "
                        target="_blank" rel="noreferrer"
                      >
                        pdf Link
                      </a>
        </button>



        {/* <PopupCertification trigger={trigg} setTrigg={setTrigg} trigg={trigg} theme={theme} >
          <div
          style={{backgroundColor:theme.body}}
          className=" h-full w-full grid  grid-flow-col grid-cols-4 grid-rows-2 gap-2 p-2  ">
            {certificate.certifications2.map((cert) => {
              return (
                <>
                  <div
                    style={{ borderColor: theme.text }}
                    className=" w-auto h-auto grid grid-flow-row border-2 px-[3%] py-[2%] "
                  >
                    <div className=" grid justify-center items-center text-3xl bg-yellow-600 bg-opacity-70 rounded-xl">
                      {cert.title}{" "}
                    </div>
                    <div className="  grid place-items-center">
                      <div>{cert.dev1} </div>
                      <div>{cert.dev2}</div>

                    </div>
                    <div className=" w-full flex justify-end   ">
                      <a
                        href={cert.certificate_link}
                        style={{ borderColor: theme.text }}
                        className=" border border-spacing-2 px-[2%] "
                        target="_blank" rel="noreferrer"
                      >
                        pdf Link
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </PopupCertification> */}


      </div>
    </div>
  );
};

export default CertificateCard;
