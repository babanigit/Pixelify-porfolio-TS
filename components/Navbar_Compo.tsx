import React, { useState } from "react";
// import { Spinner } from "@heroui/react";
import Image from "next/image";

const navs = [
  // { name: "askAI", url: "#askai" },
  { name: "home", url: "#home" },
  { name: "experience", url: "#experience" },
  { name: "skills", url: "#skills" },
  { name: "education", url: "#education" },
  { name: "projects", url: "#projects" },
  { name: "connect", url: "#connect" },
  { name: "resume", url: "/resume" },
  { name: "portfolio", url: "/portfolio" },
];

interface NavbarProps {
  isAI: boolean;
}

const Navbar_Compo = ({ isAI }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Hamburger Button */}
        <button
          aria-label="Hamburger button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex gap-2 border-2 border-gray-300 rounded-md ">
            {isAI ? (
              <a
                href="#askai"
                className="hover:text-blue-600 hover:bg-blue-100 capitalize flex items-center gap-2 px-1.5"
              >
                <span>Ask AI</span>

                <Image
                  src="/dancing_duck.gif"
                  alt="AI thinking"
                  width={20}
                  height={20}
                />
              </a>
            ) : (
              <a
                href="#askai"
                className="capitalize disabled:opacity-50 pointer-events-none flex items-center gap-2 px-1.5"
              >
                <span>Ask AI</span>

                <Image
                  src="/loading_gif.gif"
                  alt="AI thinking"
                  width={20}
                  height={20}
                />
              </a>
            )}
          </li>
          {navs.map((data, index) => (
            <li key={index}>
              <a href={data.url} className="hover:text-blue-600 capitalize">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          <li className="flex gap-2 border-2 border-gray-300 rounded-md ">
            {isAI ? (
              <a
                href="#askai"
                className="hover:text-blue-600 hover:bg-blue-100 capitalize flex items-center gap-2 px-1.5"
              >
                <span>Ask AI</span>

                <Image
                  src="/dancing_duck.gif"
                  alt="AI thinking"
                  width={20}
                  height={20}
                />
              </a>
            ) : (
              <a
                href="#askai"
                className="capitalize disabled:opacity-50 pointer-events-none flex items-center gap-2 px-1.5"
              >
                <span>Ask AI</span>

                <Image
                  src="/loading_gif.gif"
                  alt="AI thinking"
                  width={20}
                  height={20}
                />
              </a>
            )}
          </li>
          {navs.map((data, index) => (
            <li key={index}>
              <a
                href={data.url}
                className="block py-2 border-b border-gray-200 hover:text-blue-600 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar_Compo;
