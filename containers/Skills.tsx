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
    <div className="h-auto w-full grid grid-cols-4 place-items-center p-3">
      {/* Skills Info Section */}
      <div className="grid col-span-3 place-items-center w-full gap-6">
        <div className="text-4xl">Skills</div>

        <div className="w-[70%] grid gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border-2 rounded-md p-4 bg-white/10 backdrop-blur-md"
            >
              <div className="text-2xl font-semibold mb-2">{category}</div>
              <div className="flex flex-wrap gap-3">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSkillClick(item)}
                    className="bg-blue-200/70 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-300 transition"
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
      <div className="grid place-items-center bg-yellow-400/50 h-full w-full rounded-full p-4">
        {/* <FaTools size={64} /> */}

        <Image
          className="object-cover"
          src={zz}
          width={140}
          height={140}
          alt="profile image"
        />

        {/* <div className="text-4xl mt-2">Skills</div> */}
      </div>
    </div>
  );
};

export default Skills;
