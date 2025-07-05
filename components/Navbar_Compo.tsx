import React from "react";

/*
home
experience
skills
education
projects
connect
*/

const navs = [
  {
    name: "home",
    url: "#home",
  },
  {
    name: "experience",
    url: "#experience",
  },
];

const Navbar_Compo = () => {
  return (
    <ul className="flex space-x-6 p-4">
      {/* {navs.map((data, index) => (
        <li key={index}>
          <a href={data.url} className="hover:text-blue-600">
            {data.name}
          </a>
        </li>
      ))} */}

      <li>
        <a href="#home" className="hover:text-blue-600">
          home
        </a>
      </li>
      <li>
        <a href="#experience" className="hover:text-blue-600">
          experience
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-600">
          skills
        </a>
      </li>
      <li>
        <a href="#education" className="hover:text-blue-600">
          education
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-600">
          projects
        </a>
      </li>
      <li>
        <a href="#connect" className="hover:text-blue-600">
          connect
        </a>
      </li>
      <li>
        <a href="/resume" className="hover:text-blue-600">
          resume
        </a>
      </li>
      <li>
        <a href="/portfolio" className="hover:text-blue-600">
          portfolio
        </a>
      </li>
    </ul>
  );
};

export default Navbar_Compo;
