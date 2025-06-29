// "use client";

import Image from "next/image";
import mincraft4 from "@/assets/png/mincraft4.png";

const SkillsIntro = () => {
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

      {/* Skills Section */}
      <div className="md:col-span-2 flex flex-col justify-center items-center md:items-center text-center md:text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Technical Skills</h1>
        <p className="text-base md:text-xl max-w-xl">
          Proficient in TypeScript, JavaScript, C#, and Python. Experienced with
          Angular, ASP.NET, Next.js, and Node.js for full-stack development.
          Skilled in working with SQL Server, MongoDB, and PostgreSQL. Familiar
          with tools like Git, Docker, Postman, and AWS EC2. Strong foundation
          in MVC, JWT Auth, and WebSockets.
        </p>
      </div>

    </div>
  );
};

export default SkillsIntro;
