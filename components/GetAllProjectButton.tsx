"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GetAllProjectButton = () => {
  const router = useRouter();

  return (
    <button
      className=" border-2 p-2 rounded-2xl bg-green-400/40 cursor-grab hover:bg-green-600 "
      onClick={() => router.push(`/projects`)}
    >
     Click to get all Projects
    </button>
  );
};

export default GetAllProjectButton;
