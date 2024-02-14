


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links2 = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/theyashpatel",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed top-[35%] left-0 hidden flex-col lg:flex">
      <ul>
        {links2.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "ml-[-100px] flex h-14 w-40 items-center justify-between bg-violet-500 duration-300 hover:ml-[-10px] hover:rounded-md" +
              " " +
              style
            }
          >
            <as
              href={href}
              className="flex w-full items-center justify-between p-5 text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </as>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;