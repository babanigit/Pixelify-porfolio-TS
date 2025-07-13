// "use client";

import Image from "next/image";
import mincraft4 from "@/assets/png/mincraft4.png";
import { SectionData } from "@/models/getProfile";

// propsInterface
interface IExperienceIntroProps {
  section: SectionData | undefined;
}

const ExperienceIntro = ({ section }: IExperienceIntroProps) => {
  return (
    <div className="bg-gray-50 min-h-[70vh] w-full grid md:grid-cols-3 grid-cols-1 gap-6 p-6 items-center">
      {/* Image Section */}
      <div className="flex justify-center items-center bg-green-400/50 rounded-full p-8">
        <Image
          className="object-cover"
          src={mincraft4}
          width={120}
          height={120}
          alt="profile image"
        />
      </div>

      {/* Text Section */}
      <div className="md:col-span-2 flex flex-col justify-center items-center md:items-center text-center md:text-center space-y-6">
        {section ? (
          <>
            <h1 className="text-4xl md:text-6xl font-bold">{section.title}</h1>
            <p className="text-base md:text-xl max-w-xl">
              {section.description}
            </p>
          </>
        ) : (
          <div className="text-xl animate-pulse">
            Loading Experience Intro...
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceIntro;
