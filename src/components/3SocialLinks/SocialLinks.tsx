import { ThemeDataType } from "../../assets/theme";
import { socialMediaLinks } from "../../assets/Links";

interface Iprops {
  theme: ThemeDataType;
}

const SocialLinks = ({ theme }: Iprops) => {
  const LinkedIn = "<LinkedIn/>";
  const GH = "<GitHub/>";
  const Insta = "<Insta/>";
  const LeetCode = "<LeetCode/>";
  const resume = "<Resume/>";
  const digiart = "<Arts  />";

  return (
    <>
      <div className=" grid h-auto w-auto place-content-center place-items-center gap-3  grid-flow-col md:grid-flow-row md:grid-cols-3 mx-6 ">
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.resume} target="_blank" rel="noreferrer">
            {resume}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer">
            {LinkedIn}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.github} target="_blank" rel="noreferrer">
            {GH}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.leetcode} target="_blank" rel="noreferrer">
            {LeetCode}
          </a>
        </div>
        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.instagram} target="_blank" rel="noreferrer">
            {Insta}
          </a>
        </div>

        <div className="  w-auto h-auto   ">
          <a href={socialMediaLinks.instagram2} target="_blank" rel="noreferrer">
            {digiart}
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
