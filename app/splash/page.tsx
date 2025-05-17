"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Splash = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  useEffect(() => {
    if (loading) {
      router.replace("/");
    }
  }, [loading, router]);

  return (
    <div
      //   style={{ background: theme.body }}
      className="flex justify-center items-center h-screen w-screen"
    >
      <div>loading...</div>
    </div>
  );
};

export default Splash;
