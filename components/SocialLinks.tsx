"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialLinksData } from "@/models/socialLinksData";

const SocialLinks = () => {
  const [links, setLinks] = useState<SocialLinksData | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/babanigit/086a1e38d14c4d30e011609224e0f492/raw/getSocialLinks.json"
        );
        const data = await res.json();
        setLinks(data);
      } catch (err) {
        console.error("Failed to load social links:", err);
      }
    };

    fetchLinks();
  }, []);

  if (!links) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-full flex justify-center px-2 sm:px-4">
      <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] text-center font-bold p-3 sm:p-4 rounded max-w-4xl w-full">
        {Object.entries(links)
          .filter(([, value]) => value.url && value.url.trim() !== "")
          .map(([key, { label, url }]) => (
            <Link
              key={key}
              href={url}
              className="flex justify-center relative px-3 py-2 rounded group text-sm sm:text-base"
            >
              <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
                {label}
                <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SocialLinks;
