import React, { useState } from "react";

const navs = [
  { name: "home", url: "#home" },
  { name: "experience", url: "#experience" },
  { name: "skills", url: "#skills" },
  { name: "education", url: "#education" },
  { name: "projects", url: "#projects" },
  { name: "connect", url: "#connect" },
  { name: "resume", url: "/resume" },
  { name: "portfolio", url: "/portfolio" },
];

const Navbar_Compo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Hamburger Button */}
        <button
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
