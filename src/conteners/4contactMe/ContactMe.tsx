import React from "react";
import { ThemeDataType } from "../../assets/theme";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";
interface Iprops {
  theme: ThemeDataType;
}
const ContactMe = ({ theme }: Iprops) => {
  const resu = "<Resume/>"
  return (
    <div className=" bg-red-200 h-screen w-screen grid grid-flow-col grid-cols-3 place-items-center items-center">
      
      {/* div 1  */}

      <div className=" bg-green-200 h-full w-full grid justify-center items-center">
        <img
          className="profile-pic w-64"
          src={require(`../../assets/images/me306kb.jpg`)}
          alt=""
        />
      </div>

{/* div 2 */}

      <div className=" h-[60%] w-[60%] col-span-2 grid-rows-4 bg-blue-200 grid justify-center items-center p-[3%] py-[10%] ">
        <div className=" text-3xl grid justify-center ">Contact Me</div>
        
        <div className=" grid row-span-2 justify-center items-center " >
          <form action="" className=" grid gap-2 grid-flow-row  ">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button className=" justify-end grid"> Send</button>          </form>
        </div>
        
        <div className=" grid justify-end ">
          {" "}
          <a className=" border-4 p-[8%] w-[120px]  " href="./Resume.pdf">
            <a
              href={
                "https://drive.google.com/file/d/1vrH2TG_69x0BslVAYGnNDpzCPCczuPXb/view?usp=sharing/view"
              }
              target="_blank"
              rel="noreferrer"
            >
              {resu}
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
