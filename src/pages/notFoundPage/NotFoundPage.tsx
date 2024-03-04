// import React from "react";
import { ThemeDataType } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}
const NotFoundPage = ({ theme }: Iprops) => {
  return (
    <>
      <div
        className=" h-screen w-screen flex text-2xl justify-center items-center"
        style={{ background: theme.body, color: theme.text }}
      >
        <div>page not found ;/</div>
      </div>
    </>
  );
};

export default NotFoundPage;
