"use client";
import Navbar_Compo from "@/components/Navbar_Compo";
import Greeting from "@/conteners/1greeting/Greeting";
import Certificate from "@/conteners/3degreeCertificate/Certificate";
import Degree from "@/conteners/3degreeCertificate/Degree";
import EducationIntro from "@/conteners/3degreeCertificate/EducationIntro";
import ContactMe from "@/conteners/4contactMe/ContactMe";
import ProjectPage from "@/conteners/5projectcontents/ProjectPage";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar_Compo />
      </nav>

      <div className="scroll-smooth">
        <section id="home" className="min-h-screen pt-20 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <div>
            <Greeting />
          </div>
        </section>
        <section id="about" className="min-h-screen pt-20 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold">Education</h1> */}
          <EducationIntro />
          <Degree />
          <Certificate />
        </section>
        <section id="skills" className="min-h-screen pt-20 scroll-mt-20">
          <h1 className="text-4xl w-full flex justify-center font-bold">
            Projects
          </h1>
          <ProjectPage />
        </section>
        <section id="contact" className="min-h-screen pt-20 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold w-full flex justify-center">
            Contact{" "}
          </h1> */}
          <ContactMe />
        </section>
      </div>
    </>
  );
};

export default MainPage;
