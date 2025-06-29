// "use client";

import Image from "next/image";
import mincraft4 from "@/assets/png/mincraft4.png";

const ExperienceIntro = () => {
  return (
    <div className="min-h-[70vh] w-full grid md:grid-cols-3 grid-cols-1 gap-6 p-6 items-center">
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
        <h1 className="text-4xl md:text-6xl font-bold">Work Experience</h1>
        {/* <h2 className="text-2xl md:text-3xl">
    My Professional Journey
  </h2> */}
        <p className="text-base md:text-xl max-w-xl">
          I am currently working as a Software Developer at HealthIndia
          Insurance TPA Services Pvt. Ltd., where I build full-stack web
          applications using Angular, ASP.NET Core, and SQL Server. I also
          completed an internship as an Angular Developer at Markets Mojo,
          contributing to data visualization and performance upgrades. I use
          tools like Git, Tortoise SVN, and Postman to ensure clean, testable
          code.
        </p>
      </div>
    </div>
  );
};

export default ExperienceIntro;
