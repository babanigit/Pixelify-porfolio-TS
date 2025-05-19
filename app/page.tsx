// app/home/page.tsx
"use client";

import React, { useEffect } from "react";

// ✅ Replace `useLocation` with `usePathname` from Next.js
import { usePathname } from "next/navigation";

// ✅ Import your custom theme (adjust path accordingly)
// import { theme } from "../../assets/theme"; // You can customize or mock this for now

// ✅ Import components
// import HeaderPart1 from "@/components/1header/HeaderPart1";
// import HeaderPart3 from "@/components/1header/HeaderPart3";
import Greeting from "@/conteners/1greeting/Greeting";

export default function HomePage() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div>
        <Greeting />
      </div>
      
    </div>
  );
}
