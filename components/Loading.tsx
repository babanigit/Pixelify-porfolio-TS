import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-xl sm:text-2xl font-bold flex gap-2 items-center">
        <span>
          <Image
            src="/loading_gif.gif"
            alt="loading_gif"
            width={30}
            height={30}
          />
        </span>
      </h1>
    </div>
  );
};

export default Loading;
