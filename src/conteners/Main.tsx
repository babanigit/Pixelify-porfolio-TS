import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeDataType } from "../assets/theme";

// Lazy loaded components
const Splash = lazy(() => import("../pages/0splash/Splash"));
const HomePage = lazy(() => import("../pages/1home/HomePage"));
const Projects = lazy(() => import("../pages/2projects/Projects"));
const Education = lazy(() => import("../pages/3education/Education"));
const Contact = lazy(() => import("../pages/4contact/Contact"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

interface datatype {
  theme: ThemeDataType;
}

const Main = ({ theme }: datatype) => {
  return (
    <div style={{ background: theme.body, color: theme.text }}>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Splash theme={theme} />} />
            <Route path="/home" element={<HomePage theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/eduCert" element={<Education theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="*" element={<NotFoundPage theme={theme} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Main;
