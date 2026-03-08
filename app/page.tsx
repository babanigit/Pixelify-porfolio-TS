"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { ProfileContent } from "@/models/getProfile";

import Navbar_Compo from "@/components/Navbar_Compo";
import AskAI from "@/containers/AskAI";
import Loading_Compo from "@/components/Loading_Compo";

const Greeting = dynamic(() => import("@/containers/Greeting"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});

// const AskAI = dynamic(() => import("@/containers/AskAI"), {
//   ssr: false,
//   loading: () => <Loading_Compo />,
// });

const EduAndCerti = dynamic(
  () => import("@/containers/EducationAndCertificates"),
  {
    ssr: false,
    loading: () => <Loading_Compo />,
  },
);
const EducationIntro = dynamic(() => import("@/containers/EducationIntro"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const ContactMe = dynamic(() => import("@/containers/ContactMe"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const ProjectPage = dynamic(() => import("@/containers/ProjectPage"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const Experience = dynamic(() => import("@/containers/Experience"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const Skills = dynamic(() => import("@/containers/Skills"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const ExperienceIntro = dynamic(() => import("@/containers/ExperienceIntro"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});
const SkillsIntro = dynamic(() => import("@/containers/SkillsIntro"), {
  ssr: false,
  loading: () => <Loading_Compo />,
});

const MainPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAI, setIsAI] = useState(false);

  const [profileContent, setProfileContent] = useState<
    ProfileContent | undefined
  >(undefined);

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
    getAI_Status();
  }, []);

  const fetchProfileContent = async () => {
    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/babanigit/e79b0f07ad79a3542e07e924e73a5f06/raw/getContentIntro.json",
        {
          cache: "no-store",
        },
      );
      if (!res.ok) throw new Error("Failed to fetch profile content");
      const data = await res.json();
      // console.log("the data is:- ", data);
      setProfileContent(data);
    } catch (error) {
      console.error("Error fetching profile content:", error);
    }
  };

  const getAI_Status = async () => {
    const apiUrl =
      process.env.NEXT_PUBLIC_GET_API_STATUS ||
      "http://localhost:8000/api/test/";
    console.log("Checking AI status at:", apiUrl);

    try {
      const res = await fetch(apiUrl, {
        method: "GET",
      });

      if (!res.ok) throw new Error("Failed to get AI status");
      const data = await res.json();
      console.log("AI Status:", data);
      if (data.status === true) {
        setIsAI(true);
      } else {
        setIsAI(false);
      }
    } catch (error) {
      console.error("Error getting AI status:", error);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar_Compo 
        // isAI={isAI}
         />
      </nav>

      <div className="scroll-smooth">
        <section id="home" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <Greeting />
        </section>

        <section id="askai" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <AskAI isAI={isAI} />
        </section>

        <section id="experience" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}

          <ExperienceIntro section={profileContent?.workExperience} />
          <Experience />
        </section>

        <section id="skills" className=" pt-10 scroll-mt-20">
          {/* <h1 className="text-4xl font-bold"> experience</h1> */}
          <SkillsIntro section={profileContent?.technicalSkills} />
          <Skills />
        </section>

        <section id="education" className=" scroll-mt-20">
          {/* <h1 className="text-4xl font-bold">Education</h1> */}
          <EducationIntro
            section={profileContent?.educationAndCertifications}
          />
          <EduAndCerti />
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
