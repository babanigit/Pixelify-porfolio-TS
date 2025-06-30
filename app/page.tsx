"use client";
import Navbar_Compo from "@/components/Navbar_Compo";
import Greeting from "@/containers/Greeting";
import Degree from "@/containers/EducationAndCertificates";
import EducationIntro from "@/containers/EducationIntro";
import ContactMe from "@/containers/ContactMe";
import ProjectPage from "@/containers/ProjectPage";
import React, { useEffect, useState } from "react";
import Experience from "@/containers/Experience";
import Skills from "@/containers/Skills";
import ExperienceIntro from "@/containers/ExperienceIntro";
import SkillsIntro from "@/containers/SkillsIntro";
// import { ProfileContent } from "@/models/getProfile";
// import { useRouter } from "next/navigation";

const MainPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [profileContent, setProfileContent] = useState<ProfileContent | null>(
  //   null
  // );

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

  // ✅ Fetch profile content only once
  useEffect(() => {
    fetchProfileContent();
  }, []);

  const fetchProfileContent = async () => {
    try {
      const res = await fetch("/assets/data/getProfileContent.json", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch profile content");
      const data = await res.json();
      console.log("the data is:- ", data);
      // setProfileContent(data);
    } catch (error) {
      console.error("Error fetching profile content:", error);
    }
  };

  /*
home
experience
skills
education
projects
connect
*/

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
        <section id="home" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <Greeting />
        </section>
        <section id="experience" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}
          <ExperienceIntro />
          <Experience />
        </section>

        <section id="skills" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}
          <SkillsIntro />
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
