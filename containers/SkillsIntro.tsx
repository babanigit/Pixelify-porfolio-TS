// "use client";

import Image from "next/image";
import redd from "@/assets/png/redBro.png";
import { SectionData } from "@/models/getProfile";

// propsInterface
interface ISkillsIntroProps {
  section: SectionData | undefined;
}

const SkillsIntro = ({ section }: ISkillsIntroProps) => {
  return (
    <div className="min-h-[70vh] w-full grid md:grid-cols-3 grid-cols-1 gap-6 p-6 items-center">
      {/* Image Section */}
      <div className="flex justify-center items-center bg-red-400/50 rounded-full p-8">
        <Image
          className="object-cover"
          src={redd}
          width={120}
          height={120}
          alt="profile image"
        />
      </div>

      {/* Skills Section */}
      <div className="md:col-span-2 flex flex-col justify-center items-center md:items-center text-center md:text-center space-y-6">
        {section ? (
          <>
            <h1 className="text-4xl md:text-6xl font-bold">{section.title}</h1>
            <p className="text-base md:text-xl max-w-xl">
              {section.description}
            </p>
          </>
        ) : (
          <div className="text-xl animate-pulse">Loading Skills Intro...</div>
        )}
      </div>
    </div>
  );
};

export default SkillsIntro;
