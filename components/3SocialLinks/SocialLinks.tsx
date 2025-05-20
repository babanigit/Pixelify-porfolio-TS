// "use client";

// import { ThemeDataType } from "../../../assets/theme";
import { socialMediaLinks } from "@/assets/Links";
import Link from "next/link";

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
    <div className="grid gap-4 grid-cols-2 md:grid-cols-6 place-items-center mx-6 text-center font-bold">
      <Link
        href={socialMediaLinks.resume}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {Resume}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>

      <Link
        href={socialMediaLinks.linkedin}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {LinkedIn}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>

      <Link
        href={socialMediaLinks.github}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {GH}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>

      <Link
        href={socialMediaLinks.leetcode}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {LeetCode}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>

      <Link
        href={socialMediaLinks.instagram}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {Insta}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>

      <Link
        href={socialMediaLinks.instagram2}
        className="relative px-4 py-2 rounded group"
      >
        <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
          {DigiArt}
          <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
        </span>
      </Link>
    </div>
  );
};

export default SocialLinks;
