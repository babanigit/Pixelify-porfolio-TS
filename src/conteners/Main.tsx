import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/0splash/Splash";
import HomePage from "../pages/1home/HomePage";
import { ThemeDataType } from "../assets/theme";
import Projects from "../pages/2projects/Projects";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Education from "../pages/3education/Education";
import Contact from "../pages/4contact/Contact";

// interface
interface datatype {
  theme: ThemeDataType;
  // setTheme: (value: string) => void;
}

const Main = ({ theme }: datatype) => {
  return (
    <>
      <div
      style={{background:theme.body,color:theme.text}}
      >
        
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Splash theme={theme} />}
            />
            <Route
              path="/home"
              element={<HomePage theme={theme}  />}
            />
            <Route
              path="/projects"
              element={<Projects theme={theme} />}
            />
            <Route
              path="/eduCert"
              element={<Education theme={theme}  />}
            />
             <Route
              path="/contact"
              element={<Contact theme={theme}  />}
            />

            <Route 
            path="*" 
            element={<NotFoundPage  theme={theme} />}
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
