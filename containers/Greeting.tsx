// "use client";

import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import mincraft3 from "@/assets/png/mincraft3.png";
import { useEffect, useState } from "react";

interface GreetingData {
  name: string;
  title1: string;
  title2: string;
}


const Greeting = () => {

  const [data, setData] = useState<GreetingData | null>(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const res = await fetch("https://gist.githubusercontent.com/babanigit/336e2f2c92b72f57efce3db7723c24ac/raw/647708242a5424a58ed8b037b58d92eee34393de/getGreeting.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching greeting data:", error);
      }
    };

    fetchGreeting();
  }, []);

  if (!data) return <div>Loading...</div>;


  return (
    <div className="min-h-[60vh] w-full grid md:grid-cols-3 grid-cols-1 p-4 gap-6 items-center">
      {/* Text Section */}
      <div className="md:col-span-2 flex flex-col justify-center items-center md:items-center text-center md:text-left space-y-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
          <span className="text-2xl md:text-3xl">I'm</span>
          <span className="text-4xl md:text-5xl font-bold text-blue-600/70">
            Aniket Panchal
          </span>
        </div>

        {/* Subheading */}
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 text-xl md:text-3xl">
          <span className="underline">{data.title1}</span>
          <span className="font-bold">and</span>
          <span className="underline">{data.title2}</span>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center bg-red-400/30 rounded-full p-8">
        <Image
          className=" object-cover"
          src={mincraft3}
          alt="profile"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default Greeting;
