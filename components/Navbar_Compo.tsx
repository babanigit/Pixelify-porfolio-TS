import React from "react";

const Navbar_Compo = () => {
  return (
    <ul className="flex space-x-6 p-4">
      <li>
        <a href="#home" className="hover:text-blue-600">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-600">
          Skills
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar_Compo;
