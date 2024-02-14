import React from "react";
import { ThemeDataType } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}
const Degree = ({ theme }: Iprops) => {
  return (
    <>
      <div className=" h-screen w-screen bg-red-300 grid grid-flow-col grid-cols-4">
        <div className=" justify-center items-center grid  ">hello</div>
        <div className=" justify-center items-center grid bg-yellow-300 col-span-3 ">
            <div className=" bg-blue-300 w- ">hello</div>
        </div>
      </div>
    </>
  );
};

export default Degree;
