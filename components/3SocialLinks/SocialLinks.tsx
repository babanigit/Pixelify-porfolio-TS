// "use client";

// import { ThemeDataType } from "../../../assets/theme";
import { socialMediaLinks } from "@/assets/Links";

// interface IProps {
//   theme: ThemeDataType;
// }

const SocialLinks = () => {
  const LinkedIn = "<LinkedIn/>";
  const GH = "<GitHub/>";
  const Insta = "<Insta/>";
  const LeetCode = "<LeetCode/>";
  const Resume = "<Resume/>";
  const DigiArt = "<Arts/>";

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-6 place-items-center mx-6 text-center">
      <a
        href={socialMediaLinks.resume}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {Resume}
      </a>
      <a
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {LinkedIn}
      </a>
      <a
        href={socialMediaLinks.github}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {GH}
      </a>
      <a
        href={socialMediaLinks.leetcode}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {LeetCode}
      </a>
      <a
        href={socialMediaLinks.instagram}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {Insta}
      </a>
      <a
        href={socialMediaLinks.instagram2}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2  rounded hover:bg-gray-200 transition"
      >
        {DigiArt}
      </a>
    </div>
  );
};

export default SocialLinks;
