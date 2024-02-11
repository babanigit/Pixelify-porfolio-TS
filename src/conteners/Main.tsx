import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/0splash/Splash";
import HomePage from "../pages/1home/HomePage";
import { ThemeDataType } from "../assets/theme";

// interface
interface datatype {
  theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const Main = ({ theme, setTheme }: datatype) => {
  return (
    <>
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Splash theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/home"
              element={<HomePage theme={theme} setTheme={setTheme} />}
            />

            {/* <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/aboutUs" element={<AboutUs/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
