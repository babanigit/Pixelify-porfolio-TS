// No 'use client' here – this is server component

import Link from "next/link";

const HeaderPart1 = () => {
  const name = "<Aniket/>";
  return (
    <div className="fixed top-0 left-0 w-[150px] h-[50px] bg-opacity-0 grid grid-flow-col justify-center items-center text-xl">
      <div>
        <Link href="/splash">{name}</Link>
      </div>
    </div>
  );
};

export default HeaderPart1;
