import { ThemeDataType } from "../../assets/theme";
import { socialMediaLinks } from "../../assets/Links";

interface Iprops {
  theme: ThemeDataType;
}

const SocialLinks = ({ theme }: Iprops) => {
  const LinkedIn = "<LinkedIn/>";
  const GH = "<GitHub/>";
  const Insta = "<Instagram/>";
  const LeetCode = "<LeetCode/>";
  const resume = "<Resume/>";
  const digiart = "<Arts  />";

  return (
    <>
      <div className=" grid h-auto w-auto place-content-center grid-flow-col gap-3     ">
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.resume} target="_blank">
            {resume}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.linkedin} target="_blank">
            {LinkedIn}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.github} target="_blank">
            {GH}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.instagram} target="_blank">
            {Insta}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.leetcode} target="_blank">
            {LeetCode}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.instagram2} target="_blank">
            {digiart}
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
