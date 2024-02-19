
import React,{useState} from "react";
// import Popup from "reactjs-popup";
import { ThemeDataType } from "../../assets/theme";
import { Certification } from "../../assets/CertificateLinks";
import PopupCertification from "./PopupCertification";
interface Iprops {
  theme: ThemeDataType;
  certprop: Certification;
}
const CertificateCard = ({ theme, certprop }: Iprops) => {

  const[trigg,setTrigg] = useState(false);


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
              style={{ borderColor: theme.text }}
              className=" border border-spacing-2 px-[2%] "
              onClick={()=>(setTrigg(!trigg))}
            >
              view certification
            </button>

            <PopupCertification trigger={trigg} setTrigg={setTrigg} trigg={trigg} >
              <h1>this is my pop up</h1>
            </PopupCertification>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateCard;
