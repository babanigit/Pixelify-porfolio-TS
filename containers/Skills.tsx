"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaTools } from "react-icons/fa";
import Image from "next/image";
import zz from "@/assets/png/ZZ.png";

interface SkillsData {
  [category: string]: string[];
}

const Skills = () => {
  const router = useRouter();
  const [skills, setSkills] = useState<SkillsData>({});

  const handleSkillClick = (skill: string) => {
    router.push(`/projects?tech=${encodeURIComponent(skill)}`);
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/babanigit/61c0739ab835b4d850e08141161752bf/raw/9c50ed44ca78920fead926ad716e0e3da9d54f86/getSkills.json"
        );
        const data: SkillsData = await res.json();
        setSkills(data);
      } catch (err) {
        console.error("Failed to load skills data:", err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="h-auto w-full grid grid-cols-1 md:grid-cols-4 place-items-center p-3 sm:p-4 md:p-6 gap-6 md:gap-4">
      {/* Skills Info Section */}
      <div className="grid col-span-1 md:col-span-3 place-items-center w-full gap-4 md:gap-6 order-2 md:order-1">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Skills</div>

        <div className="w-full md:w-[70%] grid gap-4 md:gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border-2 rounded-md p-3 sm:p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-center md:text-left">
                {category}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSkillClick(item)}
                    className="bg-blue-200/70 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-300 hover:scale-105 transition-all duration-200 active:scale-95"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Icon/Visual Section */}
      <div className="grid place-items-center bg-yellow-400/50 h-32 w-32 sm:h-40 sm:w-40 md:h-full md:w-full rounded-full p-3 sm:p-4 order-1 md:order-2 shadow-lg">
        <Image
          className="object-cover rounded-full"
          src={zz}
          width={100}
          height={100}
          alt="profile image"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 140px"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>
    </div>
  );
};

export default Skills;