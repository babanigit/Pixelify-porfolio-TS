"use client";

import Image from "next/image";
// import { ThemeDataType } from "../../assets/theme";
// import { socialMediaLinks } from "../../assets/Links";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";

// interface Iprops {
//   theme: ThemeDataType;
// }

// Import static image paths
import meImg from "../../assets/png/pngegg.png";
import iconImg from "../../assets/png/pngegg.png";

const ContactMe = () => {
  const resu = "<Resume/>";
  const send = "<Send/>";

  return (
    <div className="h-screen w-screen grid grid-flow-col grid-cols-3 place-items-center p-3">
      {/* Image Left */}
      <div className="h-full w-full grid justify-center items-center bg-purple-400 bg-opacity-50 rounded-full">
        <Image
          className="w-64 rounded-full"
          src={meImg}
          alt="profile img"
          width={256}
          height={256}
        />
      </div>

      {/* Form Right */}
      <div
        // style={{ borderColor: theme.text }}
        className="h-[60%] w-auto col-span-2 grid-rows-4 border-4 rounded-md grid items-center p-[3%]"
      >
        <div className="h-full text-3xl grid grid-flow-col justify-center gap-3 items-center row-span-1">
          <div>Contact</div>
          <div>
            <Image className="w-20" src={iconImg} alt="profile icon" width={80} height={80} />
          </div>
        </div>

        <div className="h-full grid row-span-2">
          <form action="" className="grid gap-2 grid-flow-row place-items-end">
            <input
              type="text"
              // style={{ background: theme.body, borderColor: theme.text }}
              placeholder="your email"
              className="border px-[2%] border-5 rounded-md border-white w-full"
            />
            <input
              type="text"
              // style={{ background: theme.body, borderColor: theme.text }}
              placeholder="message"
              className="h-[100px] px-[2%] border border-5 rounded-md border-white w-full"
            />
            <button
              // style={{ borderColor: theme.text }}
              className="w-[20%] grid border border-5 rounded-md"
            >
              {send}
            </button>
          </form>
        </div>

        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
