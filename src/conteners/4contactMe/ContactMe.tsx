import React from "react";
import { ThemeDataType } from "../../assets/theme";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";
interface Iprops {
  theme: ThemeDataType;
}
const ContactMe = ({ theme }: Iprops) => {
  const resu = "<Resume/>";
  return (
    <div className="  h-screen w-screen grid grid-flow-col grid-cols-3 place-items-center items-center">
      {/* div 1  */}

      <div className="  h-full w-full grid justify-center items-center">
        <img
          className="profile-pic w-64"
          src={require(`../../assets/images/me306kb.jpg`)}
          alt=""
        />
      </div>

      {/* div 2 */}

      <div className=" bg-gray-400 h-[60%] w-[60%] col-span-2 grid-rows-4  grid items-center p-[3%] ">

        <div className=" h-full  text-3xl grid justify-center items-center  row-span-1 ">
          Contact Me
        </div>

        <div className=" h-full grid row-span-2  ">
          <form action="" className=" grid gap-2 grid-flow-row place-items-end ">
            <input type="text" style={{background:theme.body}} placeholder="your email" className="border border-5 border-white w-full " />
            <input type="text" style={{background:theme.body}} placeholder="message" className=" h-[100px] border border-5 border-white w-full " />
            <button 
            style={{borderColor:theme.body}}
            className=" w-[20%]  grid border border-5 "> Send</button>{" "}
          </form>
        </div>

        <div className=" h-full grid justify-end items-center  ">
          {" "}
          <a 
                      style={{borderColor:theme.body}}

          className=" border-4 p-[8%] w-[120px]  " href="./Resume.pdf">
            <a
              // href={
              //   "https://drive.google.com/file/d/1vrH2TG_69x0BslVAYGnNDpzCPCczuPXb/view?usp=sharing/view"
              // }
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
