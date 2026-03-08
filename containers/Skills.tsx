"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import zz from "@/assets/png/ZZ.png";

export interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  is_active: number;
}

export interface ISkillsData {
  Languages: SkillItem[];
  Frameworks: SkillItem[];
  Libraries: SkillItem[];
  Databases: SkillItem[];
  Tools: SkillItem[];
  Concepts: SkillItem[];
}

const Skills = () => {
  const router = useRouter();
  const [skills, setSkills] = useState<ISkillsData | null>(null);

  const handleSkillClick = (skill: string) => {
    router.push(`/projects?tech=${encodeURIComponent(skill)}`);
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/babanigit/61c0739ab835b4d850e08141161752bf/raw/getSkills.json",
        );

        const data: ISkillsData = await res.json();
        setSkills(data);
      } catch (err) {
        console.error("Failed to load skills data:", err);
      }
    };

    fetchSkills();
  }, []);

  if (!skills) return <div>Loading skills...</div>;

  return (
    <div className="h-auto w-full grid grid-cols-1 md:grid-cols-4 place-items-center p-3 sm:p-4 md:p-6 gap-6 md:gap-4">
      {/* Skills Section */}
      <div className="grid col-span-1 md:col-span-3 place-items-center w-full gap-4 md:gap-6 order-2 md:order-1">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Skills
        </div>

        <div className="w-full md:w-[70%] grid gap-4 md:gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border-2 border-red-500/50 rounded-md p-4 gap-2 grid bg-white hover:shadow-lg hover:border-blue-500/50 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-center md:text-left">
                {category}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                {items
                  .filter((item: SkillItem) => item.is_active === 1)
                  .map((item: SkillItem) => (
                  <button
                    key={item.name}
                    onClick={() => handleSkillClick(item.name)}
                    className="bg-yellow-200/70 text-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-yellow-300 hover:scale-105 transition-all duration-200 active:scale-95"
                  >
                    {item.name}
                  </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="grid place-items-center bg-red-500/50 h-32 w-32 sm:h-40 sm:w-40 md:h-full md:w-full rounded-full p-3 sm:p-4 order-1 md:order-2 shadow-lg">
        <Image
          className="object-cover rounded-full"
          src={zz}
          width={100}
          height={100}
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default Skills;
