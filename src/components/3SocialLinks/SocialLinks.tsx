import React from "react";
import { ThemeDataType } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}
const SocialLinks = ({ theme }: Iprops) => {
    const LinkedIn = "<LinkedIn/>"
    const GH = "<GitHub/>"
    const Insta ="<Instagram/>"
    const LeetCode = "<LeetCode/>"
  return (
    <>
      <div className=" grid h-auto w-[480px] justify-evenly bg-blue-400 grid-flow-col gap-3     ">
        <div className=" bg-yellow-300 w-auto  " ><a href="https://www.linkedin.com/in/aniket-vilas-panchal/" target="_blank">{LinkedIn}</a></div>
        <div className=" bg-yellow-300 w-auto  " ><a href="" target="_blank">{GH}</a></div>
        <div className=" bg-yellow-300 w-auto  " ><a href="" target="_blank">{Insta}</a></div>
        <div className=" bg-yellow-300 w-auto  " ><a href="" target="_blank">{LeetCode}</a></div>
      </div>
    </>
  );
};

export default SocialLinks;
