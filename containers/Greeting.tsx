"use client";

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
        const res = await fetch(
          "https://gist.githubusercontent.com/babanigit/336e2f2c92b72f57efce3db7723c24ac/raw/getGreeting.json"
        );
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
    <div className="min-h-[100vh] w-full text-black p-6 flex items-center justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center max-w-6xl w-full">
        {/* Text Section */}
        <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-center gap-3 font-pixel">
            <span className="text-xl md:text-2xl text-pink-400">I’m</span>
            <span className="text-3xl md:text-5xl font-bold text-cyan-300 neon-text">
              Aniket Panchal
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 text-base md:text-xl font-pixel ">
            <span className="underline decoration-pink-500">{data.title1}</span>
            <span className="text-yellow-300 font-bold">and</span>
            <span className="underline decoration-cyan-400">{data.title2}</span>
          </div>

          {/* Social Links */}
          <div className="mt-2 bg-blue-300/50 border rounded-4xl ">
            <SocialLinks />
          </div>
        </div>

        {/* Image Section */}
             <div className=" hidden md:flex justify-center items-center bg-red-400/30 rounded-full p-8">
        <Image
          className=" object-cover"
          src={mincraft3}
          alt="profile"
          width={120}
          height={120}
        />
      </div>
      </div>
    </div>
  );
};

export default Greeting;
