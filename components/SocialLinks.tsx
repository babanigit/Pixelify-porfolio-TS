"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SocialLinksData {
  resume: string;
  linkedin: string;
  github: string;
  leetcode: string;
  instagram: string;
  instagram2: string;
}

const SocialLinks = () => {
  const [links, setLinks] = useState<SocialLinksData | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("https://gist.githubusercontent.com/babanigit/086a1e38d14c4d30e011609224e0f492/raw/ef16629ead094dd1368c00dd970511f96bbc9953/getSocialLinks.json");
        const data = await res.json();
        setLinks(data);
      } catch (err) {
        console.error("Failed to load social links:", err);
      }
    };

    fetchLinks();
  }, []);

  if (!links) return <div>Loading...</div>;

  const labels = {
    resume: "<Resume/>",
    linkedin: "<LinkedIn/>",
    github: "<GitHub/>",
    leetcode: "<LeetCode/>",
    instagram: "<Insta/>",
    instagram2: "<Arts/>"
  };

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-6 place-items-center mx-6 text-center font-bold">
      {Object.entries(links).map(([key, url]) => (
        <Link key={key} href={url} className="relative px-4 py-2 rounded group">
          <span className="font-bold text-black group-hover:text-blue-600/80 transition-colors duration-300">
            {labels[key as keyof typeof labels]}
            <span className="block h-0.5 bg-blue-600/80 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
