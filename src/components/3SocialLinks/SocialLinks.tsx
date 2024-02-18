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

  return (
    <>
      <div className=" grid h-auto w-auto place-content-center grid-flow-col gap-8     ">
        <div className="  w-auto h-auto   ">
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
          >
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
      </div>
    </>
  );
};

export default SocialLinks;
