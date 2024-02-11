import React, { useState } from "react";

import { ThemeDataType } from "../../assets/theme";

interface datatype {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const Header = ({ theme, setTheme }: datatype) => {
  const [currTheme, setCurrTheme] = useState(theme.name);

  function changeTheme(): void {
    console.log("clicked");
    if (currTheme === "light") {
      setTheme("dark");
      setCurrTheme("dark");
    } else {
      setTheme("light");
      setCurrTheme("light");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        into the header, homepage
    </h1>
    
    <div
      className=" flex h-screen w-screen justify-start items-start p-7"
    >
      <button
        style={{ color: theme.text }}
        className=" h-fit w-fit bg-gray-500 rounded-md px-6 py-1"
        onClick={changeTheme}
      >
        click
      </button>
    </div>
    </>
    
  );
};

export default Header;
