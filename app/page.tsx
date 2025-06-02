"use client";
import Navbar_Compo from "@/components/Navbar_Compo";
import Greeting from "@/containers/Greeting";
// import Certificate from "@/containers/3degreeCertificate/Certificate";
import Degree from "@/containers/EducationAndCertificates";
import EducationIntro from "@/containers/3degreeCertificate/EducationIntro";
import ContactMe from "@/containers/ContactMe";
import ProjectPage from "@/containers/ProjectPage";
import React, { useEffect, useState } from "react";
import Experience from "@/containers/Experience";
import Skills from "@/containers/Skills";
// import { useRouter } from "next/navigation";

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

  /*
home
experience
skills
education
projects
connect
*/

  // const router = useRouter();

  // const handleClick = () => {
  //   router.push(`/projects?tech=${encodeURIComponent("mongodb")}`);
  // };

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* <button
          onClick={handleClick}
          className="px-3 py-1 bg-indigo-600 text-white rounded"
        >
          mongodb
        </button> */}

        <Navbar_Compo />
      </nav>

      <div className="scroll-smooth">
        <section id="home" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <Greeting />
        </section>
        <section id="experience" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}
          <Experience />
        </section>

        <section id="skills" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}
          <Skills />
        </section>

        <section id="education" className=" scroll-mt-20">
          {/* <h1 className="text-4xl font-bold">Education</h1> */}
          <EducationIntro />
          <Degree />
          {/* <Certificate /> */}
        </section>
        <section id="projects" className="min-h-screen pt-20 scroll-mt-20">
          <ProjectPage />
        </section>
        <section id="connect" className="min-h-screen pt-20 scroll-mt-20">
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
